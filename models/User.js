import mongoose from "mongoose"

const {Schema,model}=mongoose

const UserSchema= new Schema({
    name: {type:String},
    email: {type:String, required:true},
    username: {type:String, required:true},
    profile_pic: {type: String},
    banner: {type: String},
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now},
})
export default mongoose.models.User || model("User",UserSchema)