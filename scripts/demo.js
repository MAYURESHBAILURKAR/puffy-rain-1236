let users = JSON.parse(localStorage.getItem("user")) || [];

class user {
  constructor(n, e, m) {
    this.name = n;
    this.email = e;
    this.mobile = m;
  }

  signup(n, e, p, u, m, d) {
    this.name = n;
    this.email = e;
    this.mobile = m;

    users.push(this);

    localStorage.setItem("user", JSON.stringify(users));
    alert(`Hello ${this.name}
Your account is Successfully Registered`);
    location.href = "index.html";
  }
}

let data;
let signupform = async () => {
  event.preventDefault();
  let name = document.querySelector("#uname").value;
  let email = document.querySelector("#email").value;
  let Phone = document.querySelector("#number").value;
  console.log(name, email, Phone);

  data = new user(name, email, Phone);
  let sign_up = data.signup(name, email, Phone);

  // console.log(sign_up);
  sign_up = JSON.stringify(sign_up);

  console.log(res_data);

  location.href = "index.html";
};
