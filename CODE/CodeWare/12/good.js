function validate(password) {
  return  /^[A-Za-z0-9]{6,}$/.test(password) &&
          /[A-Z]+/           .test(password) &&
          /[a-z]+/           .test(password) &&
          /[0-9]+/           .test(password) ;
}

function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}

function validate(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\w{6,}$/.test(password);
}

function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}

function validate(password) {
  return /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[A-Za-z0-9]{6,}$/.test(password);
}

function validate(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

function validate(password) {
  console.log(password);
        return password.length>=6 && 
          /[a-z]/.test(password) && 
          /[A-Z]/.test(password) && 
          /[0-9]/.test(password) &&
          /^[a-zA-Z0-9]+$/.test(password);
         
        }