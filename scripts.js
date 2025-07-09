
const projects = document.querySelectorAll(".project-card");

projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
        project.style.transition = "transform 0.4s ease";
        project.style.transform = "scale(1.1)";
        const desc = project.querySelector(".project-desc-container");
        desc.style.color = "lightgreen";
    })
    project.addEventListener("mouseleave", () => {
        project.style.transition = "transform 0.4s ease";
        project.style.transform = "scale(1)";
        const desc = project.querySelector(".project-desc-container");
        desc.style.color = "white";
    })
})