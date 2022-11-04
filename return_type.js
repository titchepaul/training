function fetchUser(id, username) {
    return {
        id: id,
        username: username
    };
}
fetchUser(2, "Mario");
function fetchLoggedUser() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var memberData = fetchUser.apply(void 0, params);
    console.log(memberData);
    var user = {
        id: 4,
        username: "toto"
    };
}
fetchLoggedUser(3, "Mario"); //ok
