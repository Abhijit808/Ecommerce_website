import mongoose from "mongoose"
const { Schema } = mongoose;
const users = new Schema({
   userName:{
  type: String,
  unique:true,
  required:true
},
   email:{
    type:String,
    required:true,
    unique:true
   },
   Pho:{
    type:String,
    required:true,
    unique:true
   },
   Password:{
    type: String,
    required:true
  },
    confirmPassword:{
    type: String,
    required:true
  }
},
{
    timestamps:true
});
const Users = mongoose.models.userschema || mongoose.model("userschema", users);
// const models = mongoose.model('userschema', users);
// module.exports = models;
export default Users