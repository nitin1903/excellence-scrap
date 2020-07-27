const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Sources = require("../sources");
const { marked_price } = require("../scrap-schema/snapdeal");

const mobileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    enum: Sources,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  marked_price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  specifications: {
    type: [String],
  },
  rating: {
    type: String,
  },
});

mobileSchema.statics.addManyMobiles = async function (mobiles) {
  for (mobile of mobiles) {
    mobile.price = convertToNumber(mobile.price);
    mobile.marked_price = convertToNumber(mobile.marked_price) || mobile.price;
    mobile.discount =
      convertToNumber(mobile.discount) ||
      ((mobile.marked_price - mobile.price) * 100) / mobile.marked_price;
  }
  try {
    const result = await Mobile.create(mobiles);
    return result;
  } catch (err) {
    throw err;
  }
};

mobileSchema.statics.getAll = async function (source) {
  try {
    const result = await Mobile.find({ source });
    return result;
  } catch (err) {
    throw err;
  }
};

mobileSchema.statics.addMobile = async function (mobile) {
  mobile.price = convertToNumber(mobile.price);
  mobile.marked_price = convertToNumber(mobile.marked_price) || mobile.price;
  mobile.discount =
    convertToNumber(mobile.discount) ||
    ((mobile.marked_price - mobile.price) * 100) / mobile.marked_price;
  try {
    const result = await Mobile.create(mobile);
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const Mobile = mongoose.model("Mobile", mobileSchema);

function convertToNumber(str) {
  return Number(str.replace(/[^0-9]/g, ""));
}

module.exports = Mobile;
