const iconShow = document.getElementById("show_pass");
const password = document.getElementById("passWord");
const email = document.querySelector(".email-input");
const form = document.getElementById("id_form");

const handleShow = (e) => {
    iconShow.classList.toggle("fa-eye");
    iconShow.classList.toggle("fa-eye-slash");
    const checkClass = e.target.classList[2];

    checkClass === "fa-eye-slash"
      ? (password.type = "text")
      : (password.type = "password");
}

iconShow.addEventListener ("click", handleShow);

let data = {email: null , password: null};

email.addEventListener("input", (event) => {
  data.email= event.target.value;
});
password.addEventListener ("input" , (event) => {
data.password = event.target.value;
});
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log(data);
})


