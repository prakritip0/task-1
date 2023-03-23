const modal = document.getElementById("submitModal");
const submitBtn = document.getElementById("submitBtn");

const modalOptYes = document.getElementById("modalYes");
const modalOptNo = document.getElementById("modalNo");

const allInputs = document.getElementById("allInputs");

//submit button functionality starts

submitBtn.addEventListener("click", function () {
    modal.style.display = "block";
})

modalOptYes.addEventListener("click", () => {
    modal.style.display = "none";
    allInputs.reset();
})
modalOptNo.addEventListener("click", () => {
    modal.style.display = "none";
})

// submit button functionality ends

// photo upload funcitonality starts

const uploadPhotoBox = document.getElementById("uploadPhotoBox");
const photoDisplay = document.getElementById("photoDisplay");

uploadPhotoBox.addEventListener("change", () => {
    const uploadedFile = uploadPhotoBox.files;
})

