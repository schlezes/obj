newFunction();
function newFunction() {
    var user = {
        name: "Hayes",
        id: 0
    };
    var see = function (user) {
        return user;
    };
    console.log(see(user));
}
