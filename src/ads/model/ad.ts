import { Schema, model, connection, Model } from 'mongoose';

type adType = {
    idUser: string
    state: string
    category: string
    images: [object]
    title: string
    price: number
    priceNegotiable: boolean
    description: string
    views: number
    status: string
}

const schema = new Schema<adType>({
    idUser: { type: String, required: true },
    state: { type: String, required: true },
    category: { type: String, required: true },
    images:  { type: [Object], required: false },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    priceNegotiable: { type: Boolean, required: false },
    description: { type: String, required: true },
    views: { type: Number, required: true },
    status: { type: String, required: true },

},
{ timestamps: true }
);

const modelName = 'ad';

export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<adType> : model<adType>(modelName, schema);