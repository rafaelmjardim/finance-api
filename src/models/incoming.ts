import { model, Schema, Document }  from "mongoose";

interface IIncoming extends Document {
    name: string;
    value: number;
    icon: string;
}

const IncomingSchema = new Schema({
    name: {type: String},
    value: {type: Number},
    icon: {type: String},
});

const IncomingModel = model<IIncoming>("Incoming", IncomingSchema);

export { IncomingModel, IIncoming};