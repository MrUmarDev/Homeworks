import { Module } from '@nestjs/common';
import { RecordsOfIllnessService } from './records_of_illness.service';
import { RecordsOfIllnessController } from './records_of_illness.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsOfIllness, RecordsOfIllnessSchema } from '../records_of_illness/schemas/records_of_illness.schema';
import { Feeding, FeedingSchema } from '../feeding/schemas/feeding.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RecordsOfIllness.name, schema: RecordsOfIllnessSchema },
      { name: Feeding.name, schema: FeedingSchema },
    ]),
  ],
  controllers: [RecordsOfIllnessController],
  providers: [RecordsOfIllnessService],
})
export class RecordsOfIllnessModule {}
