import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  lastModified: {
    type: String,
    require: true,
  },
});

const gradesModel = mongoose.model("grades", accountSchema, "grades");

export default gradesModel;
