
var postSignUp = function ( userId, info ) {
  console.log(userId);
  console.log(info.profile.profession);
  Roles.addUsersToRoles(userId, ['normal-user', info.profile.profession], 'example.com');
};

AccountsTemplates.configure({
  postSignUpHook: postSignUp
});

