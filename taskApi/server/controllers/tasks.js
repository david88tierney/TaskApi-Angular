const mongoose = require("mongoose");
const Task = mongoose.model("Task");

class Tasks {
    // Get all Tasks
    getAll(req, res){
        Task.find({}, function(err, tasks){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok", "tasks": tasks});
            }
        });
    }
    // Get one Task
    getOne(req, res){
        Task.findOne( {_id: req.params.id} , function(err, task){
            if(err){
                return res.json(err);
            } else{
                return res.json(task);
            }
        } )

    }
    // Create a Task
    create(req, res){
        let task = new Task(req.body);
        task.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok"});
            }
        });
    }
    // Update a Task
    update(req, res){
        Task.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, data){
            if(err){
                res.json({"status": "not ok", "errors": err})
            } else{
                res.json({"status": "ok", "data": data})
            }
        })
    }

    // Delete a Task
    destroy(req,res){

		Task.findOne({_id:req.params.id},(e,task)=>{
			if(!task)return res.json(e);
			Task.remove({_id:req.params.id},(e)=>{
				if(e)return res.json(e);
				return res.json(task);
			});
		});
	}
}

module.exports = new Tasks();