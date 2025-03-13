const mongoose= require('mongoose');
const reviewSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
      name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    },
    { timestamps: true }
);
const productschema=new mongoose.Schema({

    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    supplier:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required:true
    },
    bestSeller: {
        type: Boolean,
    },
    date: {
        type: Number,
        required: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
      },
      // Number of reviews for the product
      numReviews: {
        type: Number,
        required: true,
        default: 0
      }
  
},
    { timestamps: true }
);

const Product=mongoose.model('Product',productschema);

module.exports=Product;