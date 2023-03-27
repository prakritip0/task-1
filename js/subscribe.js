const modal = document.getElementById("submitModal");
const submitSubscription = document.getElementById("submitSubscription");
const congratsText = document.getElementById("congrats");
const emailInput = document.getElementById("emailAddress");

// function subscriptionButton() {
//     modal.style.display = "block";
// }

const modalOptYes = document.getElementById("modalYes");
const modalOptNo = document.getElementById("modalNo");



const validateEmail = () => {
    console.log(emailInput.value)
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    console.log(regx.test(emailInput.value));
    if (regx.test(emailInput.value)) {
        submitSubscription.disabled = false;
        modal.style.display = "flex";
    } else {
        alert("Please enter a valid email!!");
        // submitSubscription.disabled = true;
    }

}


modalOptYes.addEventListener("click", () => {
    modal.style.display = "none";
    congratsText.style.display = "flex";
    submitSubscription.style.display = "none";
    emailInput.style.display = "none";
})
modalOptNo.addEventListener("click", () => {
    modal.style.display = "none";
})





