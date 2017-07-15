var Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req,res){
        var starterTodos = [
            {
                username: 'jboone',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'jboone',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'jboone',
                todo: 'Clean room',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos,function(err,results){
           res.send(results); 
        });                   
    });

    
    

}