function requireUserName(name){
  for (var a = 0; a < name.length; a++) {
    if (name[a] !== name[a].toLowerCase()) {
      return "Username anda tidak valid";
    }
  }
  return 'Username valid'
}
console.log(requireUserName('zeronull'))

function requireEmail(email) {

  for (var a = 0; a < email.length; a++) {
    if (email[a] !== email[a].toLowerCase()) {
      return "Email anda tidak valid";
    }
  }

  var at = email.indexOf('@')
  if(at > 1){
    return 'Email anda valid'
  } else {
    return 'Email anda tidak valid'
  }

}
console.log(requireEmail("aku@kamu.com"));

function requireEmail(email) {

  for (var a = 0; a < email.length; a++) {
    if (email[a] !== email[a].toLowerCase()) {
      return "Email anda tidak valid";
    }
  }

  var at = email.indexOf('@')
  if(at > 1){
    return 'Email anda valid'
  } else {
    return 'Email anda tidak valid'
  }

}
console.log(requireEmail("kamu@aku.com"));
