import { Schema, model, connection, Model } from 'mongoose';

type categoryType = {
    name: string
    slug: string
}

const schema = new Schema<categoryType>({
    name: { type: String, required: true },
    slug: { type: String, required: true }

});

const modelName = 'category';

export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<categoryType> : model<categoryType>(modelName, schema);