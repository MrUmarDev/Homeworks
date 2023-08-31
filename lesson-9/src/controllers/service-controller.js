const dbKnex = require("../database/index");
const checkDate = require("../utils/check-expires-date");
const createService = async (req, res, next) => {
  try {
    const { service_name, price, company_id } = req.body;
    if (!service_name || !price || !company_id)
      return res
        .status(400)
        .json({ message: "Service name and price must be provided" });

    const readBase = await dbKnex("services");
    const findService = readBase.find(
      (service) => service.service_name === service_name
    );
    if (!findService) {
      const data = await dbKnex("services")
        .insert({
          service_name,
          price,
          company_id,
        })
        .returning("*");

      if (data) {
        return res.status(201).json({
          message: "Service is created successfully",
        });
      }
    } else {
      return res.status(400).json({
        message: "Service already exists",
      });
    }
  } catch (error) {
    next(error);
  }
};
const usingService = async (req, res, next) => {
  const user_id = req.user_id;
  try {
    const readData = await dbKnex("users");
    const findUser = readData.find((user) => user.user_id === user_id);
    const { id: service_id } = req.params;
    const { promo_code } = req.body;
    const readBaseService = await dbKnex("services");
    const findService = readBaseService.find(
      (service) => service.service_id === service_id
    );
    if (findService.isactive) {
      if (+findUser.balance > +findService.price) {
        const userBalance = findUser.balance - findService.price;
        await dbKnex("users")
          .update({ balance: userBalance })
          .where("user_id", "=", findUser.user_id);
      } else {
        return res.status(400).json({
          message: "Not enough funds",
        });
      }
      if (promo_code) {
        const readBasePromo = await dbKnex("promo_codes");
        const findPromo = readBasePromo.find(
          (promo) => promo.service_id === service_id
        );
        if (!findPromo) {
          return res.status(400).json({
            message: "Promo code invalid",
          });
        }
        const checkPromo = checkDate(findPromo.expires_date);
        if (checkPromo) {
          const readBaseUsers = await dbKnex("users");
          const findUser = readBaseUsers.find(
            (user) => user.user_id === findPromo.user_id
          );
          if (!findUser.deleted_at != null) {
            const cashback = (findService.price * findPromo.cashback) / 100;
            const balance = findUser.balance + cashback;
            const data = await dbKnex("users")
              .update({
                balance: balance,
              })
              .where("user_id", "=", findUser.user_id);
          }
        }
      }
      return res.status(200).json({
        message: "Success",
      });
    } else {
      return res.status(400).json({
        message: "Service inactive",
      });
    }
  } catch (error) {
    next(error);
  }
};
const updateService = async (req, res, next) => {
  try {
    const { service_name, price, isactive } = req.body;
    if (!service_name || !price) {
      return res.status(400).json({
        message: "service name, price,isactive are required",
      });
    }
    const date = new Date().toLocaleDateString();
    const [data] = await dbKnex("services")
      .update({
        service_name,
        price,
        isactive,
        updated_at: date,
      })
      .returning("*");
    if (data) {
      return res.json({
        message: "Service updated successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};
const removeService = async (req, res) => {
  const { id } = req.params;
  const data = await dbKnex("services");
  const findService = data.find((service) => service.service_id === id);
  if (findService.deleted_at == null) {
    const data = await dbKnex("services")
      .update({
        deleted_at: new Date().toLocaleDateString(),
      })
      .returning("*");
    if (data) {
      return res.json({
        message: "Service deleted",
      });
    }
  } else {
    return res.json({
      message: "Service not found",
    });
  }
};
module.exports = {
  createService,
  usingService,
  updateService,
  removeService,
};
