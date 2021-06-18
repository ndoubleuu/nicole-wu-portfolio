// Initialize Animate On Scroll library
AOS.init();

// Hamburger nav
const navButton = document.querySelector(".navButton");
const navIcon = document.querySelector(".navIcon");
const navMenu = document.querySelector("#navMenu");

// To make code more DRY- function that removes the classes that are applied when nav dropdown menu is open
const removeOpenNavClasses = () => {
    navIcon.classList.remove("open");
    navMenu.classList.remove("showMenu");
}

navButton.addEventListener("click", () => {
    // Toggle between menu icon and close menu icon
    if (navIcon.classList.contains("open")) {
        removeOpenNavClasses();
    } else {
        navIcon.classList.add("open");
        navMenu.classList.add("showMenu");
    }
})

// When a link in nav menu is clicked, the menu should collapse
const links = document.querySelectorAll(".navLink");

links.forEach((link) => {
    link.addEventListener("click", () => {
        // Remove showMenu class from navMenu so that it hides when a link is clicked
        // Remove open class from navIcon so that it changes back to hamburger icon
        removeOpenNavClasses();
    })
})

// When logo is clicked, remove showMenu class so that dropdown menu closes
const logo = document.querySelector(".logoContainer a");

logo.addEventListener("click", () => {
    removeOpenNavClasses();
})

// Ensure that if user increases screen width while nav menu is in drop down mode, .showMenu class is removed to prevent nav links from being positioned underneath nav bar
const largerScreen = window.matchMedia("(min-width: 845px)");

const removeShowNavClass = (largerScreen) => {
    // If screen width is greater than 845px, remove showMenu class
    if (largerScreen.matches) {
        navMenu.classList.remove("showMenu");
    } else {
        // If screen width is less than 845px and dropdown menu is open, close the menu
        if (navIcon.classList.contains("open")) {
            removeOpenNavClasses();
        }
    }
}

largerScreen.addEventListener("change", () => {
    removeShowNavClass(largerScreen);
})

// Toggle show and hide listContainer in About section
const displayButton = document.querySelector(".toggleDisplay");
const headerNumButtons = document.querySelectorAll(".number");
const listItems = document.querySelectorAll(".trait p");
const traits = document.querySelectorAll(".trait");
const listContainer = document.querySelector(".listContainer");
const infoContainer = document.querySelector(".infoContainer");

// Define a function that will expand the traits list
const showTraitsList = () => {
    displayButton.style.right = "2.5rem";
    displayButton.innerHTML = `
            <span class="srOnly">Minimize traits list</span>
            <i class="fas fa-angle-double-left" aria-hidden="true" title="Minimize section"></i>
        `;
    listItems.forEach((item) => {
        item.classList.remove("hideListItems");
    })
    listContainer.style.width = "";
    infoContainer.style.width = "";
}

// Define a function that hides traits list + toggles between display and hide depending on the container's width
const toggleDisplay = () => {
    if (listContainer.style.width === "") {
        displayButton.style.right = "-4.5rem"
        displayButton.innerHTML = `
            <span class="srOnly">Expand traits list</span>
            <i class="fas fa-angle-double-right" title="Expand section"></i>
        `;
        listItems.forEach((item) => {
            item.classList.add("hideListItems");
        })
        listContainer.style.width = "10.5rem";
        infoContainer.style.width = "100%";
    } else {
        showTraitsList();
    }
}

// Call the toggle function (defined above) when the displayButton is clicked
displayButton.addEventListener("click", () => {
    toggleDisplay();
})

// When any number button in the header is clicked, expand/display the listContainer
headerNumButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showTraitsList();
    })
})


// ** Form spree submission
const form = document.getElementById("contactForm");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("formStatus");
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.textContent = "👩🏻‍💻 Thank you, your message is on its way! Looking forward to receiving it!";
        form.reset()
    }).catch(error => {
        status.textContent = "Oops! There was a problem submitting your form."
    });
}
form.addEventListener("submit", handleSubmit)

console.group(
    "%cHello!",
    "background-color: #d0d9e5; font-size: 2rem; font-family: 'Quicksand'"
)
console.log("I just wanted to say...")
console.log("Thanks for viewing my portfolio!");
console.log("There's nothing else to see in the console, but I'm glad you checked. 🤗");
console.log("...")
console.log("Oh! But before you go, I also just wanted to let you know that I'm looking for new opportunities. Feel free to reach out!");
console.log("Have a wonderful day!")
console.groupEnd();