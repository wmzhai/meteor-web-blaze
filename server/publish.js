Meteor.publish('allUsers', function () {
  if( Roles.userIsInRole(this.userid, 'admin')) {
    return Meteor.users.find({});
  }
});