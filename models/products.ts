import mongoose from "mongoose"
const { Schema } = mongoose;
const users = new Schema({
   productname:{
  type: String,
  unique:true,
  required:true
},
   catogery:{
    type:String,
    required:true,
    unique:true
   },
   description:{
    type:String,
    required:true,
    unique:true
   },
   images:[{
    id:Number,
    url:String
   }],
},
{
    timestamps:true
});
const Users = mongoose.models.userschema || mongoose.model("userschema", users);
// const models = mongoose.model('userschema', users);
// module.exports = models;
export default Users