import { Schema, model, connection, Model } from 'mongoose';

type stateType = {
    name: string
}

const schema = new Schema<stateType>({
    name: { type: String, required: true },

});

const modelName = 'state';

export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<stateType> : model<stateType>(modelName, schema);