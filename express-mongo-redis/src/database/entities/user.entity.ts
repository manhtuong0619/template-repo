import * as mongoose from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    photoUrl: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
