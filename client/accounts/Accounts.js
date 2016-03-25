AccountsTemplates.addFields([
  {
    _id: 'firstName',
    type: 'text',
    displayName: 'First Name',
    required: true,
    re: /(?=.*[z-z])(?=.*[A-Z])/,
    errStr: '1 lowercase and 1 uppsercase letter required'
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