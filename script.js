/*=========================================
    Ghassan Software
    script.js
==========================================*/

// تأثير ظهور العناصر عند التمرير
const hiddenElements = document.querySelectorAll(
    ".card, .project, .hero-text, .hero-image, .numbers div"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.2
});

hiddenElements.forEach((el) => observer.observe(el));


// عدادات متحركة
const counters = document.querySelectorAll(".numbers h2");

counters.forEach(counter => {

    const target = counter.innerText;

    const number = parseInt(target.replace(/\D/g, ""));

    if (isNaN(number)) return;

    let count = 0;

    const speed = number / 100;

    const updateCounter = () => {

        count += speed;

        if (count < number) {

            counter.innerText = Math.floor(count) + target.replace(/[0-9]/g, "");

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// زر الرجوع للأعلى

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// الوضع الليلي

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.id = "darkBtn";

document.body.appendChild(darkBtn);

darkBtn.onclick = () => {

    document.body.classList.toggle("dark");

};


// تأثير كتابة العنوان

const title = document.querySelector(".hero-text h1");

const originalText = title.innerText;

title.innerText = "";

let i = 0;

function typing() {

    if (i < originalText.length) {

        title.innerHTML += originalText.charAt(i);

        i++;

        setTimeout(typing, 70);

    }

}

typing();


// سنة الفوتر تلقائياً

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = "© " + new Date().getFullYear() + " Ghassan Software";

}
