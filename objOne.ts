/*
  try to upload to github
*/

newFunction();
function newFunction(): void {
    interface User {
        name: string;
        id: number;
    }

    const user: User = {
        name: "Hayes",
        id: 0,
    };

    const see = function (user: User) {
        return user;
    };
    console.log(see(user));
}

