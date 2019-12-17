var mongoose=require("mongoose");
var doctorschema=new mongoose.Schema({
	name:String,
	image:String,
	description:String,
	appointment:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Appointment"
	}]
});

module.exports=mongoose.model("Doctor",doctorschema);