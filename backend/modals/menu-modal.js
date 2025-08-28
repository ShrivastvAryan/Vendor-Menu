const mongoose=require('mongoose')

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["Veg", "Non-Veg"], default: "Veg" },
  description: { type: String },
  prices: {
    quarter: { type: String, default:'-'},
    half: { type: String, default:'-'},
    full: { type: String, default:'-'},
  },
});

const SectionSchema = new mongoose.Schema({
  sectionName: { type: String, required: true }, // e.g., "MainCourse"
  items: [ItemSchema], // array of items inside this section
});

const MenuSchema = new mongoose.Schema(
  {
    restaurantName:{type:String,required:true},
    restaurantAddress:{type:String,required:true},
    restaurantNumber:{type:String,required:true},
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }, 

    clerkUserId: { type: String, required: true },

    sections: [SectionSchema]
  },
  { timestamps: true }
);

module.exports=mongoose.model("Menu", MenuSchema);
