const modal = document.getElementById("submitModal");
const submitSubscription = document.getElementById("submitSubscription");

// function subscriptionButton() {
//     modal.style.display = "block";
// }

const modalOptYes = document.getElementById("modalYes");
const modalOptNo = document.getElementById("modalNo");

const emailInput = document.getElementById("emailAddress");

const validateEmail = () => {
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    // console.log(regx.test(emailInput.value));
    if (regx.test(emailInput.value)) {
        submitSubscription.disabled = false;
        modal.style.display = "flex";
    } else {
        alert("Please enter a valid email!!");
        submitSubscription.disabled = true;
    }

}

submitSubscription.addEventListener("click", function () {
    validateEmail();
    // modal.style.display = "block";
})

modalOptYes.addEventListener("click", () => {
    modal.style.display = "none";
    emailInput.reset();
})
modalOptNo.addEventListener("click", () => {
    modal.style.display = "none";
})



