import { PartialType } from '@nestjs/mapped-types';
import { CreateRecordsOfIllnessDto } from './create-records_of_illness.dto';

export class UpdateRecordsOfIllnessDto extends PartialType(CreateRecordsOfIllnessDto) {
    illness_type: string;
    date_disease: Date;
    medicines: string;
    date_treatment: Date;
    illness_photo: string;
    animal_id: string;
    worker_id: string;
}
