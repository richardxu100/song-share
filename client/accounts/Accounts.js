AccountsTemplates.configure({
  showLabels: false,
  showPlaceholders: true,
  texts: {
    inputIcons: {
      isValidating: "fa fa-spinner fa-spin",
      hasSuccess: "fa fa-check",
      hasError: "fa fa-times",
    }
  },
});

AccountsTemplates.addFields([
  {
    _id: 'firstName',
    type: 'text',
    displayName: 'First Name',
    placeholder: 'First Name',
    required: true
  },
  {
    _id: 'profileImageLink',
    type: 'url',
    displayName: 'Profile Image Link',
    placeholder: 'Profile Image Link',
    required: true
  }
]);
