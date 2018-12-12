const Tasks = require("../controllers/tasks");

module.exports = function(app){
    app.get("/tasks", Tasks.getAll);
    app.post("/tasks", Tasks.create );
    app.put("/update/:id", Tasks.update);
    // DELETE
    app.delete("/tasks/:id", Tasks.destroy);
    app.get("/task/:id",  Tasks.getOne);

}



