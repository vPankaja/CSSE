import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    balance: {
      type: String,
      required: true,
      default: 0,
    },
    password: {
      type: String,
      required: true,
    },
    status: { type: Boolean, required: true, default: true },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model('Users', UserSchema);

export default Users;
