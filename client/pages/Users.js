import moment from 'moment';

Template.Users.onCreated(function () {
  this.autorun( () => {
    this.subscribe('allUsers');
  });
});

Template.Users.helpers({
  users: function () {
   return Meteor.users.find();
  },
  userEmail: function () {
    return this.emails[0].address;
  },
  isAdmin: function () {
    return Roles.userIsInRole(this._id, 'admin')? 'admin': '';
  },
  dateFormat: function () {
    return moment(this.createdAt).format('MMMM D YYYY');
  }
});

Template.Users.events({
  'click .user_id': function () {
    Session.set('currentUser', this);
  },
  'click .toggle-admin': function () {
    Meteor.call('toggleAdmin', this._id);
  }
});