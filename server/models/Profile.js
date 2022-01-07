const mongoose = require("mongoose");

const availabileTimes = {
  startTime: Number,
  endTime: Number,
},

const citySchema = new mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

const profileSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    maxLength: 200
  },
  availability: [
    {
      type: availabileTimes
    }
  ],
  location: {
    type: citySchema
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
});


module.exports = Profile = mongoose.model("profile", profileSchema);
