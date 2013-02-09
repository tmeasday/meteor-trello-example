if (Lists.find().count() === 0) {
  var listData = ['todo', 'doing', 'done']
  var taskData = {
    todo: ['Use Proper Collection', 'Style it'],
    doing: ['Prototype HTML'],
    done: ['Create Project']
  }
  
  _.each(listData, function(type) {
    var listId = Lists.insert({type: type});
    
    _.each(taskData[type], function(task) {
      Tasks.insert({listId: listId, title: task});
    });
  })
}
