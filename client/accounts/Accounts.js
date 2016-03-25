var myLogoutFunc = function () {
  Session.set('nav-toggle', '');
  FlowRouter.go('/');
};

AccountsTemplates.configure({
  confirmPassword: false,
  onLogoutHook: myLogoutFunc
});

AccountsTemplates.addFields([
  {
    _id: 'firstName',
    type: 'text',
    displayName: 'First Name',
    required: true
  },{
    _id: 'profession',
    type: 'select',
    displayName: 'Profession',
    select: [
      {
        text: 'Developer',
        value: 'developer'
      }, {
        text: 'Designer',
        value: 'designer'
      },{
        text: 'Other',
        value: 'other'
      }
    ]
  }
]);