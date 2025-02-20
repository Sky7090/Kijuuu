// Smooth scrolling for menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const menuLinks = document.querySelectorAll(".menu ul li a");

    // Toggle menu saat tombol hamburger ditekan
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Tutup menu saat salah satu link diklik
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// Timeline content reveal
const elements = document.querySelectorAll('.timeline-content');

const checkInView = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top + scrollY <= windowHeight * 0.8) {
            el.classList.add('in-view');
        }
    });
};

window.addEventListener('scroll', checkInView);
checkInView();
let textElement = document.querySelector('.typing-effect');
let text = "Every number holds meaning. Every pattern tells a story."
let i = 0;

function typeWriter() {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);  // Setiap karakter ditampilkan dengan delay 100ms
    }
}

window.onload = function() {
    typeWriter();  // Menjalankan fungsi saat halaman dimuat
};

