var mongoose=require("mongoose");
var appointmentSchema=mongoose.Schema({
	patientname:String,
	problem:String,
	number:String
});
module.exports=mongoose.model("Appointment",appointmentSchema);