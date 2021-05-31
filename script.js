// Initialize Animate On Scroll library
AOS.init();

// Toggle show and hide listContainer in About section
const displayButton = document.querySelector(".toggleDisplay");
const listItems = document.querySelectorAll(".trait p");
const traits = document.querySelectorAll(".trait");
const listContainer = document.querySelector(".listContainer");
const infoContainer = document.querySelector(".infoContainer");

displayButton.addEventListener("click", () => {
    console.log(listContainer.style);
    if (listContainer.style.width === "") {
        displayButton.style.right = "-4.5rem"
        displayButton.innerHTML = `<i class="fas fa-angle-double-right"></i>`;
        listItems.forEach((item) => {
            item.classList.add("hideListItems");
        })
        listContainer.style.width = "10.5rem";
        infoContainer.style.width = "100%";
    } else {
        displayButton.style.right = "2rem"
        displayButton.innerHTML = `
            <span class="srOnly">Display traits list</span>
            <i class="fas fa-angle-double-left" aria-hidden="true"></i>
        `;
        listItems.forEach((item) => {
            item.classList.remove("hideListItems");
        })
        listContainer.style.width = "";
        infoContainer.style.width = "";
    }
})

// let i = 0;

// let n = 0;

// const textOne = `< Hello World! />`
// const textTwo = `I'm Nicole, and I'm a`

// const speed = 55;

// const partOne = document.querySelector('#partOne');

// const typingOne = () => {
//     if (i < textOne.length) {
//         //print the text onto the page
//         // This piece of code prints one letter after the other as an entire line of text
//         partOne.innerHTML += textOne.charAt(i);
//         //Make letters go from one to the next to create typing effect
//         i++;
//         setTimeout(typingOne, speed);
//     }
// }

// const typingTwo = () => {
//     if (n < textTwo.length) {
//         partTwo.innerHTML += textTwo.charAt(n);
//         n++;
//         setTimeout(typingTwo, speed);
//     }
// }

// // Delay the function call so that the typing doesn't happen until 1.5s after page has been loaded
// setTimeout(function () {
//     typingOne();
// }, 500);

// setTimeout(function () {
//     typingTwo();
// }, 2000);