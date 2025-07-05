

const workContainer = document.querySelector(".work-container");
const heroWrapper = document.querySelector(".hero-wrapper");
const imgContainer = document.querySelector(".hero-img-container");
const img = document.querySelector(".hero-img");

const heroWrapperStyle = window.getComputedStyle(heroWrapper);
const paddingLeft = parseFloat(heroWrapperStyle.paddingLeft);

const padding = paddingLeft + (imgContainer.clientWidth - img.clientWidth);

workContainer.style.paddingLeft = padding + "px";
