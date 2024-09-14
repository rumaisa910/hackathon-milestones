const button = document.getElementById("hide/show more") as HTMLButtonElement
const skills = document.getElementById("skills") as HTMLElement

button.addEventListener("click", () => {
    if(skills.style.display === "none"){
        skills.style.display = "block"
    } else {
        skills.style.display = "none"
    }

});