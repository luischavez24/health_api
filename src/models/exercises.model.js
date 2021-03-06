import { Schema, model } from 'mongoose';

// Setup schema
const exercisesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type:String,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  units: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true
  }
});

export default model('exercise', exercisesSchema, 'exercise');