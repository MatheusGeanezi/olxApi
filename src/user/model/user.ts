import { Schema, model, connection, Model } from 'mongoose';

export type userType = {
    name: string
    email: string
    state: string
    passwordHash: string
    token: string
}

const schema = new Schema<userType>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    state: { type: String, required: true },
    passwordHash: { type: String, required: true },
    token: { type: String, required: true },

});

const modelName = 'user';

export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<userType> : model<userType>(modelName, schema);