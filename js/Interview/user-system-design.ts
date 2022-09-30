function implementAPI(logs: string[]) {
  let register = {}
  let login = {}
  let res: string[] = []
  for (let log of logs) {
    let [op, username, passwd] = log.split(" ")
    if (op === "register") {
      if (username in register) {
        res.push("Username already exists")
      } else {
        register[username] = passwd
        res.push("registered Successfully")
      }
    } else if (op === "login") {
      if (username in register) {
        //already logged
        if (username in login) {
          res.push("Login uncessfully")
        } else if (register[username] === passwd) {
          login[username] = passwd
          res.push("Logged in Successfully")
        } else {
          res.push("Login uncessfully")
        }
      }
    } else if (op === "logout") {
      if (username in register && username in login) {
        delete login[username]
        res.push("Logged out Successfully")
      } else {
        res.push("Logout Uncessfully")
      }
    }
  }
  return res
}
let res = implementAPI([
  "register david david123",
  "register adam 1Adam1",
  "login david david123",
  "login adam 1adam1",
  "logout david",
])
for (let s of res) {
  console.log(s)
}
