
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }
});

function showInfo(id) {
    const info = document.getElementById(id);
    info.hidden = !info.hidden;
}
