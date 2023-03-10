const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
	res.send("programming zone server is running");
});

app.get("/courses", (req, res) => {
	res.send(courses);
});

app.get("/courses/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const course = courses.find((course) => course.id === id);
	res.send(course);
});

app.listen(port, (req, res) => {
	console.log(`programming zone website started and running on port ${port}`);
});
