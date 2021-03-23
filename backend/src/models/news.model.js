import { Schema, model } from 'mongoose';

const newsSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('News', newsSchema);
