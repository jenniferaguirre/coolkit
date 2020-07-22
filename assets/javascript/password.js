

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',', ')','(','}','{',']','[','~','-','_','.'
];
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
var lowerCasedCharacters = [
  'a','b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];




function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to have?')
  );
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  if (length < 6) {
    alert('Password length must be at least 6 characters');
    return;
  }

  if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }

  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasNumericCharacters = confirm(
    'Click OK to confirm including numbers.'
  );

  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  


