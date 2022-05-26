

let fileEl = document.querySelector(".file-upload-field"),
    fileWrapper = document.querySelector(".file-upload-wrapper");
fileEl.addEventListener("change", function (e) {
    fileWrapper.setAttribute("data-text", fileEl.value);
});