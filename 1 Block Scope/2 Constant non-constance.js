/* Constant non-constance */

// Does the fact that account is constant mean that we can't update password?
// Why, or why not? And if not, how could we make it so that we can't?

// const account = {
//     username: "marijn",
//     password: "xyzzy"
// }
//
// account.password = "s3cret" // (*much* more secure)
//
// console.log(account.password)

const account = {
    username: "marijn",
    password: "xyzzy",
}

Object.defineProperty(account, "password", {
    writable: false,
});

account.password = "s3cret" // (*much* more secure)

console.log(account.password);