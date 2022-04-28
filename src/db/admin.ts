import { Model, Schema, model } from 'mongoose';
import {makeHash} from '../utils';

interface IAdmin {
  email: string
  hash: string
  password?: string
}

interface IAdminModel extends Model<IAdmin> {
  signin(email: string, password: string): IAdmin | false;
}

export const adminSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  hash: String
});

adminSchema.virtual('password').set(function(password: string) {
  this.hash = makeHash(password);
})

adminSchema.static('signin', async function(email: string, password: string) {
  const admin = await this.findOne({email})
  const hash = makeHash(password)
  return admin.hash === hash ? admin : null
});

export const Admin = model<IAdmin, IAdminModel>('Admin', adminSchema)

export default Admin;