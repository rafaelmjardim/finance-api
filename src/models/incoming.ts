import { model, Schema, Document }  from "mongoose";

interface IIncoming extends Document {
    name: string;
    value: number;
}

const IncomingSchema = new Schema({
    name: {type: String},
    value: {type: Number},
});

const IncomingModel = model<IIncoming>("Incoming", IncomingSchema);

export { IncomingModel, IIncoming};