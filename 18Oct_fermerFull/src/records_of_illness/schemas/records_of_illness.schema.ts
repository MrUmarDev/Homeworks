import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Animal } from "../../animal/schemas/animal.schema";
import { Worker } from "../../worker/schemas/worker.schema";

export type RecordsOfIllnessDocument = HydratedDocument<RecordsOfIllness>;

@Schema({ versionKey: false })
export class RecordsOfIllness {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
  animal_id: Animal;
  @Prop()
  illness_type: string;
  @Prop()
  date_disease: Date;
  @Prop()
  medicines: string;
  @Prop()
  date_treatment: Date;
  @Prop()
  illness_photo: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' })
  worker_id: Worker;
}

export const RecordsOfIllnessSchema = SchemaFactory.createForClass(RecordsOfIllness);
