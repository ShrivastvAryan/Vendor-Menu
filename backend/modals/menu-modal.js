import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["Veg", "Non-Veg"], default: "Veg" },
  description: { type: String },
  prices: {
    quarter: { type: Number, default: 0 },
    half: { type: Number, default: 0 },
    full: { type: Number, default: 0 },
  },
});

const SectionSchema = new mongoose.Schema({
  sectionName: { type: String, required: true }, // e.g., "MainCourse"
  items: [ItemSchema], // array of items inside this section
});

const MenuSchema = new mongoose.Schema(
  {
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }, 
    sections: [SectionSchema], // multiple sections
  },
  { timestamps: true }
);

export default mongoose.model("Menu", MenuSchema);
