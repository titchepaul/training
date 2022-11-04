
function fetchUser(id: number, username: string){
    return {
        id,
        username
    }
}
fetchUser(2, "Mario");

type FetchUserParam = Parameters<typeof fetchUser>; //[id: number, username: string]
type fetchUserReturn = ReturnType<typeof fetchUser>;

function fetchLoggedUser(...params: FetchUserParam){
   const memberData = fetchUser(...params);
   console.log(memberData);

   let user:  fetchUserReturn = {
        id: 4,
        username: "toto"
   }
}

fetchLoggedUser(3, "Mario"); //ok