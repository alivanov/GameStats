import { Schema, model } from 'mongoose';

const GameSchema = Schema(
  {
    data: Schema.Types.Mixed,
  },
  { timestamps: true },
);

export default model('Game', GameSchema);
