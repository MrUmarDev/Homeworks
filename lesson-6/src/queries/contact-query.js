const { fetchOne } = require("../utils/pg");

const createQueryContact =
  "insert into contact_us(name,phone_number,email,message)values($1,$2,$3,$4) RETURNING*";
const getQueryContact = "UPDATE contact_us SET is_viewed = $1 where id = $2 RETURNING*";
module.exports = {
  create: async (name, phone_number, email, message) => {
    const data = await fetchOne(
      createQueryContact,
      name,
      phone_number,
      email,
      message
    );
    return data;
  },
  updContactStatus: async (bool, id) => {
    const data = await fetchOne(getQueryContact, bool, id);
    return data
  },
};
