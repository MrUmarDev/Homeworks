import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './models/payment.model';
import { FindPaymentDto } from './dto/find-payment.dto';
import { Op } from 'sequelize';

@Injectable()
export class PaymentService {
  constructor(@InjectModel(Payment) private paymentRepository: typeof Payment) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const payment = await this.paymentRepository.findOne({ where: { name: createPaymentDto.name } });
    if (payment) {
      throw new BadRequestException('Payment already exists');
    }
    return this.paymentRepository.create(createPaymentDto);
  }

  async findAll(findPaymentDto: FindPaymentDto) {
    let where = {};

    if (findPaymentDto.name) {
      where['name'] = { [Op.like]: `%${findPaymentDto.name}%` };
    }

    if (findPaymentDto.min_price) {
      where = {
        ...where,
        price: {
          [Op.gt]: findPaymentDto.min_price,
        },
      };
    }
    if (findPaymentDto.description) {
      where['description'] = { [Op.like]: `%${findPaymentDto.description}%` };
    }
    if (findPaymentDto.category_id) {
      where = {
        ...where,
        category_id: {
          [Op.lt]: findPaymentDto.category_id,
        },
      };
    }

    return this.paymentRepository.findAll({ where, include: { all: true } });
  }

  findOne(id: number) {
    return this.paymentRepository.findByPk(id, { include: { all: true } });
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.paymentRepository.update(
        { ...updatePaymentDto },
        { where: { id }, returning: true }
    );
  }

  remove(id: number) {
    return this.paymentRepository.destroy({ where: { id } });
  }
}
