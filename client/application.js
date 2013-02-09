Template.taskLists.helpers({
  types: function() { return Lists.find(); },
  listData: function() {
    return {
      type: this.type,
      tasks: Tasks.find({listId: this._id})
    }
  }
});