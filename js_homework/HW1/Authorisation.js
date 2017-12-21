function Authorisation(){
    var login = prompt("Введите пароль");
    if(login != "Админ"){
        alert("Я Вас не знаю!");
        return;
    }

    var password = prompt("Введите пароль");
    if(password === "Пароль"){
        alert("Добро пожаловать!");
        return;
    }else{
        alert("Пароль неверен!");
        return;
    }
}

Authorisation();
