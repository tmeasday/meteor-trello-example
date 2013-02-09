var Lists = new Meteor.Collection('lists');
var Tasks = new Meteor.Collection('tasks');

var taskList = function(task) {
  return Lists.findOne(task.listId);
}

var nextTaskList = function(task) {
  var list = taskList(task)
  if (list.type === 'todo')
    return 'doing';
  else if (list.type === 'doing')
    return 'done';
};

var prevTaskList = function(task) {
  var list = taskList(task)
  if (list.type === 'doing')
    return 'todo';
  else if (list.type === 'done')
    return 'doing';
};
