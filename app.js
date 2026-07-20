const express = require('express');
const cors = require('cors');
const app= express();

const galleryRouter=require('./routing/galleryRouting');
const registerRouter = require('./routing/registerRouting');
const locationRouter = require('./routing/locationRouting');
const treatmentRouter = require('./routing/treatmentRouting');
const subtreatmentRouter = require('./routing/subtreatmentRouting');
const adddoctorRouter = require('./routing/adddoctorRouting');
const addoffersRouter = require('./routing/addoffersRouting');
const eanddtreatmentRouter = require('./routing/eanddtreatmentRouting'); 
const eanddsubtreatmentRouter = require('./routing/eanddsubtreatmentRouting');
const eanddlocationRouter = require("./routing/eanddlocationRouting");
const eandddoctorRouter = require("./routing/eandddoctorRouting");
const eanddofferRouter = require("./routing/eanddofferRouting");
const bookappointmentRouter = require("./routing/bookappointmentRouting");

const port = 4000;
require('./dbconfig/dbconfig');
app.use(express.json());
app.use(cors());

app.use(express.static('public'));


app.use("/", galleryRouter);
app.use("/", registerRouter);
app.use("/", locationRouter);
app.use("/", treatmentRouter);
app.use("/", subtreatmentRouter);
app.use("/", adddoctorRouter)
app.use("/", addoffersRouter);
app.use("/", eanddtreatmentRouter);
app.use("/", eanddsubtreatmentRouter);
app.use('/', eanddlocationRouter);
app.use("/", eandddoctorRouter);
app.use("/", eanddofferRouter);
app.use("/", bookappointmentRouter);


app.use((re, res) =>{
  res.send('<h1>404 not found</h1>');
});

app.listen(port, () =>{
  console.log(`Server is running on port ${port}`);
})
