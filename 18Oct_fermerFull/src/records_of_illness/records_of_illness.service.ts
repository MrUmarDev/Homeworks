import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRecordsOfIllnessDto } from './dto/create-records_of_illness.dto';
import { UpdateRecordsOfIllnessDto } from './dto/update-records_of_illness.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordsOfIllness, RecordsOfIllnessDocument } from './schemas/records_of_illness.schema';
import { Model } from 'mongoose';
import { Feeding, FeedingDocument } from '../feeding/schemas/feeding.schema';

@Injectable()
export class RecordsOfIllnessService {
  constructor (
      @InjectModel(RecordsOfIllness.name) private readonly recordsOfIllnessModel: Model<RecordsOfIllnessDocument>,
      @InjectModel(Feeding.name) private readonly feedingModel: Model<FeedingDocument>,
  ) { }

  async create(createRecordsOfIllnessDto: CreateRecordsOfIllnessDto) {
    const { feeding_id } = createRecordsOfIllnessDto;

    const feeding = await this.feedingModel.findById(feeding_id);
    if (!feeding) throw new BadRequestException('Feeding not found');
    const recordsOfIllness = await this.recordsOfIllnessModel.create(createRecordsOfIllnessDto);
    feeding.records_of_illness.push(recordsOfIllness);
    await feeding.save();
    return recordsOfIllness;
  }

  findAll() {
    return this.recordsOfIllnessModel.find().populate('feeding_id');
  }

  findOne(id: string) {
    return this.recordsOfIllnessModel.findById(id).populate('feeding_id');
  }

  update(id: string, updateRecordsOfIllnessDto: UpdateRecordsOfIllnessDto) {
    return this.recordsOfIllnessModel.findByIdAndUpdate(id, updateRecordsOfIllnessDto, { new: true });
  }

  remove(id: string) {
    return this.recordsOfIllnessModel.findByIdAndRemove(id);
  }
}
