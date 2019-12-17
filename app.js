var express              =require("express"),
    app                  =express(),
    mongoose             =require("mongoose"),
	passport             =require("passport"),
	bodyParser           =require("body-parser"),
	LocalStrategy        =require("passport-local"),
	Doctors              =require("./models/doctor.js"),
	Appointments         =require("./models/appointment.js"),
	passportLocalMOngoose=require("passport-local-mongoose"),
	User          		 =require("./models/user"),
	seedDB               =require("./seed.js")
//seedDB();
var idd="5d989c0f4f107d09e676c7dd";
mongoose.connect("mongodb://localhost:27017/inspark_app", { useNewUrlParser: true,useUnifiedTopology:true });
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
	secret:"Tommy is the best",
	resave:false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname+"/public"));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	next();
});
////======
////ROUTES
////======
app.get("/landing",function(req,res){
	console.log(req.user._id);
	res.render("home");
});
app.get("/hospitals",function(req,res){
	res.render("hospitals");
});
app.get("/hospitals/fortis",function(req,res){
	res.render("fortis_type");
});
app.get("/hospitals/aster",function(req,res){
	res.render("aster_type");
});
app.get("/hospitals/apollo",function(req,res){
	res.render("apollo_type");
});
app.get("/hospitals/sgpgi",function(req,res){
	res.render("sgpgi_type");
});
app.get("/hospitals/sahara",function(req,res){
	res.render("sahara_type");
});
app.get("/hospitals/mayo",function(req,res){
	res.render("mayo_type");
});
app.get("/hospitals/kgmu",function(req,res){
	res.render("kgmu_type");
});
app.get("/hospitals/aster/sexologist",function(req,res){
	res.render("aster_sexologist_list");
});
app.get("/hospitals/aster/dentist",function(req,res){
	res.render("aster_dentist_list");
});
app.get("/hospitals/aster/dermatologist",function(req,res){
	res.render("aster_dermatologist_list");
});
app.get("/hospitals/aster/pyschiatrist",function(req,res){
	res.render("aster_pyschiatrist_list");
});
app.get("/hospitals/aster/cardialogist",function(req,res){
	res.render("aster_cardialogist_list");
});
app.get("/hospitals/aster/ortho",function(req,res){
	res.render("aster_ortho_list");
});
app.get("/hospitals/aster/nuerologist",function(req,res){
	res.render("aster_nuerologist_list");
});
app.get("/hospitals/apollo/sexologist",function(req,res){
	res.render("apollo_sexologist_list");
});
app.get("/hospitals/apollo/dentist",function(req,res){
	res.render("apollo_dentist_list");
});
app.get("/hospitals/apollo/dermatologist",function(req,res){
	res.render("apollo_dermatologist_list");
});
app.get("/hospitals/apollo/pyschiatrist",function(req,res){
	res.render("apollo_pyschiatrist_list");
});
app.get("/hospitals/apollo/cardialogist",function(req,res){
	res.render("apollo_cardialogist_list");
});
app.get("/hospitals/apollo/ortho",function(req,res){
	res.render("apollo_ortho_list");
});
app.get("/hospitals/apollo/nuerologist",function(req,res){
	res.render("apollo_nuerologist_list");
});
app.get("/hospitals/sgpgi/sexologist",function(req,res){
	res.render("sgpgi_sexologist_list");
});
app.get("/hospitals/sgpgi/dentist",function(req,res){
	res.render("sgpgi_dentist_list");
});
app.get("/hospitals/sgpgi/dermatologist",function(req,res){
	res.render("sgpgi_dermatologist_list");
});
app.get("/hospitals/sgpgi/pyschiatrist",function(req,res){
	res.render("sgpgi_pyschiatrist_list");
});
app.get("/hospitals/sgpgi/cardialogist",function(req,res){
	res.render("sgpgi_cardialogist_list");
});
app.get("/hospitals/sgpgi/ortho",function(req,res){
	res.render("sgpgi_ortho_list");
});
app.get("/hospitals/sgpgi/nuerologist",function(req,res){
	res.render("sgpgi_nuerologist_list");
});
app.get("/hospitals/sahara/sexologist",function(req,res){
	res.render("sahara_sexologist_list");
});
app.get("/hospitals/sahara/dentist",function(req,res){
	res.render("sahara_dentist_list");
});
app.get("/hospitals/sahara/dermatologist",function(req,res){
	res.render("sahara_dermatologist_list");
});
app.get("/hospitals/sahara/pyschiatrist",function(req,res){
	res.render("sahara_pyschiatrist_list");
});
app.get("/hospitals/sahara/cardialogist",function(req,res){
	res.render("sahara_cardialogist_list");
});
app.get("/hospitals/sahara/ortho",function(req,res){
	res.render("sahara_ortho_list");
});
app.get("/hospitals/sahara/nuerologist",function(req,res){
	res.render("sahara_nuerologist_list");
});
app.get("/hospitals/mayo/sexologist",function(req,res){
	res.render("mayo_sexologist_list");
});
app.get("/hospitals/mayo/dentist",function(req,res){
	res.render("mayo_dentist_list");
});
app.get("/hospitals/mayo/dermatologist",function(req,res){
	res.render("mayo_dermatologist_list");
});
app.get("/hospitals/mayo/pyschiatrist",function(req,res){
	res.render("mayo_pyschiatrist_list");
});
app.get("/hospitals/mayo/cardialogist",function(req,res){
	res.render("mayo_cardialogist_list");
});
app.get("/hospitals/mayo/ortho",function(req,res){
	res.render("mayo_ortho_list");
});
app.get("/hospitals/mayo/nuerologist",function(req,res){
	res.render("mayo_nuerologist_list");
});
app.get("/hospitals/kgmu/sexologist",function(req,res){
	res.render("kgmu_sexologist_list");
});
app.get("/hospitals/kgmu/dentist",function(req,res){
	res.render("kgmu_dentist_list");
});
app.get("/hospitals/kgmu/dermatologist",function(req,res){
	res.render("kgmu_dermatologist_list");
});
app.get("/hospitals/kgmu/pyschiatrist",function(req,res){
	res.render("kgmu_pyschiatrist_list");
});
app.get("/hospitals/kgmu/cardialogist",function(req,res){
	res.render("kgmu_cardialogist_list");
});
app.get("/hospitals/kgmu/ortho",function(req,res){
	res.render("kgmu_ortho_list");
});
app.get("/hospitals/kgmu/nuerologist",function(req,res){
	res.render("kgmu_nuerologist_list");
});
app.get("/hospitals/fortis/sexologist",function(req,res){
	Doctors.find({},function(err,doctor){
		if(err)
			{
				console.log("There is an error");
			}
		else{
			res.render("fortis_sexologist_list",{doctors: doctor});
		}
	});
});
app.get("/hospitals/fortis/dentist",function(req,res){
	res.render("fortis_dentist_list");
});
app.get("/hospitals/fortis/dermatologist",function(req,res){
	res.render("fortis_dermatologist_list");
});
app.get("/hospitals/fortis/pyschiatrist",function(req,res){
	res.render("fortis_pyschiatrist_list");
});
app.get("/hospitals/fortis/cardialogist",function(req,res){
	res.render("fortis_cardialogist_list");
});
app.get("/hospitals/fortis/ortho",function(req,res){
	res.render("fortis_ortho_list");
});

app.get("/hospitals/fortis/nuerologist",function(req,res){
	res.render("fortis_nuerologist_list");
});
app.get("/hospitals/fortis/sexologist/:id",function(req,res){
	Doctors.findById(req.params.id).populate("appointment").exec(function(err,foundDoctor){
		if(err)
			{
				console.log("Error in finding the doctor");
				console.log(err);
			}
		else
			{
				console.log(foundDoctor);
				res.render("show",{doctor: foundDoctor});
			}
	});
});
app.get("/hospitals/fortis/sexologist/:id/appointment/new",function(req,res){
	Doctors.findById(req.params.id,function(err,doctor){
		if(err)
			{
				console.log("Error in finding the doctor");
				console.log(err);
			}
		else
			{
				res.render("new",{doc: doctor});
			}
	});
});
app.post("/hospitals/fortis/sexologist/:id/appointments",function(req,res){
		Doctors.findById(req.params.id,function(err,doc){
		if(err)
			{
				console.log(err);
			}
		else
			{
				Appointments.create(req.body.appointment,function(err,app){
					if(err)
						{
							console.log("Error in creating the new appointment");
							console.log(err);
						}
					else
						{
							doc.appointment.push(app);
							doc.save();
							res.redirect('/hospitals/fortis/sexologist/'+doc._id)
						}
				});
			}
	});
});
app.get("/hospitals/fortis/sexologist/:id/doct",function(req,res){
	 Doctors.findById(req.params.id).populate("appointment").exec(function(err,doctor){
		if(err)
			{
				console.log("There was error in finding the doctor");
				console.log(err);
			}
		else
			{
				if(doctor.name==req.user.username){
					res.render("doc",{doc: doctor});
				}
				else
					{
						res.send("You are not authorized");
					}
			}
	});
});
app.get("/:doc_id/:id/delete",function(req,res){
	Appointments.deleteOne({_id:req.params.id},
				  function(err){
		if(err)
			{
				console.log("error in deleting the appointment");
				console.log(err);
			}
		else
			{
				res.redirect("/doc");
			}
	})
});
app.get("/:id/edit",function(req,res){
	Appointments.findById(req.params.id,function(err,app){
		if(err)
			{
				console.log("Error in finding the appointment");
			}
		else
			{
				res.render("edit",{app: app});
			}
	});
});
app.post("/:id/edit",function(req,res){
	Appointments.findByIdAndUpdate(req.params.id,req.body.appointment,function(err,updatedapp){
		if(err)
			{
				console.log("Error in finding the error");
			}
		else
			{
				res.redirect("/hospitals/fortis/sexologist");
			}
	});
});
app.get('/user/:id/delete', function(req, res){
	user.remove({_id: req.params.id}, 
	   function(err){
		if(err) res.json(err);
		else    res.redirect('/view');
	});
});
app.get("/login/doct",function(req,res){
	res.render("login_doc_barber");
});
app.post("/login/doct",function(req,res){
	if(req.body.username=="Abhinav Ayush")
				{
					res.redirect("/doc");
				}
				else
				{
					res.send("YOU ARE NOT AUTHORIZED da");
				}
});
app.get("/doc",function(req,res){
		 Doctors.findById(idd).populate("appointment").exec(function(err,doct){
		if(err)
			{
				console.log(err);
			}
		else
			{
				res.render("doc",{doc: doct});
			}
	});
});
/////////===========
/////////SIGNUP ROUTES
///////====================
app.get("/register",function(req,res){
	Doctors.findById(req.params.id,function(err,doctor){
		if(err)
			{
				console.log(err);
			}
		else
			{
				res.render("register",{doctor: doctor});
			}
	});
});
app.post("/register",function(req,res){
	Doctors.findById(req.params.id,function(err,docto){
		var newUser=new User({username:req.body.username});
		User.register(newUser,req.body.password,function(err,user){
		if(err)
			{
				console.log(err);
				res.redirect("/register");
			}
		else
			{
				passport.authenticate("local")(req,res,function(){
				res.redirect("/landing");
				});
			}
		});
	});
});
//////////===============
//////////LOGIN
//////////=============
app.get("/",function(req,res){
		Doctors.findById(req.params.id,function(err,doctor){
		if(err)
			{
				console.log(err);
			}
		else
			{
				res.render("login",{doctor: doctor});
			}
	});
});

app.post("/",passport.authenticate("local",{
	successRedirect:"/landing",failureRedirect:"/"
	}),function(req,res){
});
app.listen(5020,function(){
	console.log("Tryst Dor Raha");
});