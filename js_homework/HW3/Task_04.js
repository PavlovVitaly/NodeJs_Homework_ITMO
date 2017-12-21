function ValidatePassword() {
    var password = prompt("¬ведите пароль");
    var regLength = /^.{9}$/g;
    var regSmallLetters = /[a-z]/i;
    var regBigLetters = /[A-Z]/g;
    var regDig = /(.*\d.*){2,4}/g;
    var regSpec = /(.*[\W].*){1,9}/g;
    /*  alert(password.match(regLength));
      alert(password.match(regSmallLetters));
      alert(password.match(regBigLetters));
      alert(password.match(regDig));
      alert(password.match(regSpec));*/
    var result = password.match(regLength) && password.match(regSmallLetters) && password.match(regBigLetters) && password.match(regDig) && password.match(regSpec);
    if (result) {
        alert(true);
    } else {
        alert(false);
    }
}

ValidatePassword();
