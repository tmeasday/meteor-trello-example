Template.taskLists.helpers({
  types: function() { return Lists.find(); },
  listData: function() {
    return {
      type: this.type,
      tasks: Tasks.find({listId: this._id})
    }
  }
});

Template.task.helpers({
  prevList: function() {
    return prevTaskList(this);
  },
  nextList: function() {
    return nextTaskList(this);
  }
})

Template.task.events({
  'click .prevList': function() {
    Tasks.update(this._id, {$set: {listId: Lists.findOne({type: prevTaskList(this)})._id}});
  },
  'click .nextList': function() {
    Tasks.update(this._id, {$set: {listId: Lists.findOne({type: nextTaskList(this)})._id}});
  }
})