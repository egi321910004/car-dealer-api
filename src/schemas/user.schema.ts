// src/schemas/user.schema.ts
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});
