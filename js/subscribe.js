const modal = document.getElementById("submitModal");
const submitSubscription = document.getElementById("submitSubscription");

function subscriptionButton() {
    modal.style.display = "block";
}

const modalOptYes = document.getElementById("modalYes");
const modalOptNo = document.getElementById("modalNo");

const emailInput = document.getElementById("emailInput");


submitSubscription.addEventListener("click", function () {
    modal.style.display = "block";
})

modalOptYes.addEventListener("click", () => {
    modal.style.display = "none";
    emailInput.reset();
})
modalOptNo.addEventListener("click", () => {
    modal.style.display = "none";
})



