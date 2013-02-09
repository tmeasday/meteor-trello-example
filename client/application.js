Template.taskLists.helpers({
  types: Lists,
  listData: function() {
    return {
      type: this,
      tasks: Tasks[this]
    }
  }
});