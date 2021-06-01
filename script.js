// Initialize Animate On Scroll library
AOS.init();

// Toggle show and hide listContainer in About section
const displayButton = document.querySelector(".toggleDisplay");
const headerNumButtons = document.querySelectorAll(".number");
const listItems = document.querySelectorAll(".trait p");
const traits = document.querySelectorAll(".trait");
const listContainer = document.querySelector(".listContainer");
const infoContainer = document.querySelector(".infoContainer");

// Define a function that will expand the traits list
const showTraitsList = () => {
    displayButton.style.right = "2rem"
    displayButton.innerHTML = `
            <span class="srOnly">Hide traits list</span>
            <i class="fas fa-angle-double-left" aria-hidden="true"></i>
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
            <span class="srOnly">Display traits list</span>
            <i class="fas fa-angle-double-right"></i>
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
        status.textContent = "Your message is on its way! Looking forward to receiving it!";
        form.reset()
    }).catch(error => {
        status.textContent = "Oops! There was a problem submitting your form."
    });
}
form.addEventListener("submit", handleSubmit)