"use strict";
function fetchUsers(id, username) {
    console.log(`Fetch user id ${id} | username ${username} `);
}
fetchUsers(2, "Mario");
function fetchLoggedUsers(...params) {
    fetchUsers(...params);
}
fetchLoggedUsers(3, "Mario"); //ok
