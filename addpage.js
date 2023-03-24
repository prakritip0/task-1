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
const photoDisplayed = document.getElementById("photoDisplayed");
// console.log(photoDisplayed);

uploadPhotoBox.addEventListener("change", (e) => {
    // console.log(uploadPhotoBox)
    const uploadedFile = uploadPhotoBox.files[0];
    // console.log(uploadedFile);

    if (uploadedFile) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            photoDisplayed.setAttribute("src", reader.result);
        });
        reader.readAsDataURL(uploadedFile);
    }
})

// photo upload funcitonality ends

//checkbox functionality starts

const yesMomo = document.getElementById("yesMomo");

function selectOnlyThis(checkBox) {
    var checkboxes = document.getElementsByName('momo');
    checkboxes.forEach((item) => {
        if (item !== checkBox) {
            item.checked = false;
        }
    });
}



