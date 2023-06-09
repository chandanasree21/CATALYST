//create router to handle user api reqs
const exp = require("express");
const studentsApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

//to extract body of request object
studentsApp.use(exp.json());

//student API Routes

studentsApp.get(
  "/students",
  expressAsyncHandler(async (request, response) => {
    let studentsCollectionObject = request.app.get("studentsCollectionObject");
    let courses = await studentsCollectionObject.find().toArray();
    response.send({ message: "courses list", payload: courses });
  })
);

studentsApp.post(
    "/student",
    expressAsyncHandler(async (request, response) => {
      let studentsCollectionObject = request.app.get("studentsCollectionObject");
      await studentsCollectionObject.insertOne(request.body);
      response.send({ message: "inserted" });
    })
  );
  
module.exports = studentsApp;