const check = (event) => {
    event.preventDefault();
    const email = document.querySelector("#email");
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.value.match(mailformat)) {
        alert("You have entered an invalid email address!");
        document.querySelector("#error").textContent = "Incorrect Email";
        document.querySelector("#email").focus();
        return;
    }
}
const sub = document.querySelector("#ok");
if(sub){
    sub.addEventListener("click", check);
}

const foot = document.querySelector('footer');
const date = Date.now();
const newEle = document.createElement('section');
newEle.setAttribute('id','foot');
// \u00A9 is unicode of &copy; 
newEle.textContent = `${'\u00A9'} copyright, ${new Date(date).getFullYear()}`;
// newEle.innerHTML = `<section id=foot>&copy; copyright, ${new Date(date).getFullYear()}</section>`;
foot.append(newEle);