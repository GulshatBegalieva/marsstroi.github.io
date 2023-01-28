let navbar = document.querySelector(".nav");
let menuClose = document.querySelector(".menu-close");

document.querySelector(".burger-menu").onclick = () => {
    navbar.classList.add("active");
};
document.querySelector(".menu-close").onclick = () => {
    navbar.classList.remove("active");
};

/* var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo() {
    videoPlayer.style.display = "none";
}

function playVideo(file) {
    myVideo.src = file;
    videoPlayer.style.display = "block";
}

var swiper = new Swiper(".myswiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}); */

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace(
                "fa-plus",
                "fa-square-minus"
            );
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace(
                "fa-square-minus",
                "fa-plus"
            );
        }
        removeOpen(index);
    });
});

function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2
                .querySelector("i")
                .classList.replace("fa-square-minus", "fa-plus");
        }
    });
}

let rangeValue = document.querySelector(".range-value-span");
let rangeInput = document.querySelector(".range-input");
let progressBar = document.querySelector(".progressbar");

rangeInput.oninput = (() => {
    let value = rangeInput.value;
    rangeValue.textContent = value;
    rangeValue.style.left = (value / 3) + "%";
    progressBar.style.width = (value / 3) + "%";
});

const area = document.querySelector('#area');
const options = document.querySelectorAll('select');
const inputs = document.querySelectorAll('input');
const tarifOptions = document.querySelectorAll('select option');
const totalPriceElement = document.querySelector('.total-price');

function calculate() {
    let totalPrice = parseInt(area.value);
    for (const option of tarifOptions) {
        if (option.selected === true) {
            totalPrice = totalPrice * parseFloat(option.value);
        }
    }
    const formatter = new Intl.NumberFormat("ru");
    totalPriceElement.innerText = formatter.format(totalPrice);
}
calculate();

for (const item of options) {
    item.addEventListener("change", function () {
        calculate();
    });
}
for (const input of inputs) {
    input.addEventListener("input", function () {
        calculate();
    });
}