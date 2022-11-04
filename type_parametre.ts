
function fetchUsers(id: number, username: string){
    console.log(`Fetch user id ${id} | username ${username} `);
}
fetchUsers(2, "Mario");

type FetchUserParams = Parameters<typeof fetchUsers>; //[id: number, username: string]

function fetchLoggedUsers(...params: FetchUserParams){
    fetchUsers(...params);
}

fetchLoggedUsers(3, "Mario"); //ok