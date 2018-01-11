function main() {

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    function User() {
        this.name = "Anon";
        this.toString = function () {
            return "Name: " + this.name + ".";
        };
    }

    User.MyUser = function (person) {
        var user = new User();
        user.name = person.name;
        user.age = person.age;
        user.toString = function () {
            return "Name: " + user.name + ". Age: " + user.age + ".";
        };
        return user;
    };

    alert(new User());
    alert(User.MyUser(new Person("Aleshka", 7)));
}

main();
