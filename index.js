window.addEventListener("load", function () {
    const loader = document.querySelector('.loader');
    const container = document.querySelector('.container');

    const hiding = () => loader.className += " hidden";

    setTimeout(hiding, 4000);
    container.className += " show";

}

)
// window.onload = () => {
//     const loader = document.querySelector('.loader');

//     const hiding = () => loader.className += " hidden";

//     setTimeout(hiding, 4000);
// }

