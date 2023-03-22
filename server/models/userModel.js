import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    proffession:{
        type:String,
    },
    password :{
        type:String,
        required:true
    },
    profile:{
        type:String,
        default:"1.png"
    },
    admin:{
        type:Boolean,
        default:false
    }
})

const UserModel=mongoose.model("User", UserSchema)
export default UserModel