let role;
role = "moderator";
switch (role) {
  case "admin":
    console.log("the guest is an admin");
    break;
  case "moderator":
    console.log("the guest is a moderator");
    break;
  default:
    console.log("unknown role");
}
