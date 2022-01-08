const Todo = require("../models/todo.models.js");

// listAllTodo() : find() metode akan mengembalikan semua todo di dalam koleksi MongoDB.
exports.listAllTodo = (req, res) => {
    Todo.find()
        .then((todo) => {
            console.log({ todo }); res.json(todo);
        })
        .catch((err) => {
            res
                .status(404)
                .json({ message: "There isnt any todo available", error: err.message });
        });
};

// createTodo(): Metode create() akan membuat item todo dan mengembalikan pesan sukses.

exports.createTodo = (req, res) => {
    Todo.create(req.body)
        .then((todo) => {
            console.log({ todo }); res.json({
                message: "Cheers!! You have successfully added TODO", todo,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry your todo list cannot be added", error: err.message,
            });
        });
};

// updateTodo(): findByIdAndUpdate() akan mengambil dua parameter: id dari todo yang akan diperbarui dan datanya.

exports.updateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((todo) => {
            console.log({ todo }); return res.json({
                message: "Cheers!! You have successfully updated TODO", todo,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Sorry your todo list cannot be updated", error: err.message,
            });
        });
};

// deleteTodo(): Metode findByIdAndRemove() hanya mengambil satu parameter, id todo, dan menghapusnya dari koleksi.

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
    .then((todo) => {
        console.log({ todo }); res.json({
            message: "Cheers!! You have successfully deleted your TODO", todo,
        });
    })
    .catch((err) => {
        res.status(404).json({
            message: "Sorry your todo is not there", error: err.message,
        });
    });
};