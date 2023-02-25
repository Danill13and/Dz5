let text = document.querySelector(".text-content");
let button = document.querySelector(".button-readmore");

const textfull = text.innerHTML;

if (text.innerHTML.length > 20){
    let textless = text.innerHTML.slice(0, 20);
    text.innerHTML = textless + "...";
    button.addEventListener("click", (event) => {
        if (button.innerHTML === "Read More"){
            text.innerHTML = textfull;
            button.innerHTML = "Read Less";
        } else if (button.innerHTML === "Read Less"){
            text.innerHTML = textless + "...";
            button.innerHTML = "Read More";
        }
        event.preventDefault();
    });
}