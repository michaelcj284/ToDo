const express = require('express');

const stu = express();

const students = [
    {
        id: 1,
        name: "James Mark",
        age: 20,
    },
    {
        id: 2,
        name: "Ken Ogene",
        age: 23,
    },
    {
        id: 3,
        name: "Bright Chima",
        age: 27,
    },
];

stu.get("/", (req, res) => {
    res.send(students);
})

stu.get("/students/:id", (req, res) => {
    const id = req.params.id;

    const student = students.find((student) => student.id === parseInt(id));
    if (student) {
        res.status(200).send({
            message: "Student Found",
            data: student,
            date: new Date().toLocaleDateString(),
        });
    }else {
        res.status(404).send({
            message: "Student not found"
        });
    }

})




stu.listen(3000, () => {
    console.log("Server is running on port 3000");
})

