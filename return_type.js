"use strict";
function fetchUser(id, username) {
    return {
        id,
        username
    };
}
fetchUser(2, "Mario");
function fetchLoggedUser(...params) {
    const memberData = fetchUser(...params);
    console.log(memberData);
    let user = {
        id: 4,
        username: "toto"
    };
}
fetchLoggedUser(3, "Mario"); //ok
