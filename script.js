document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission
    const contactForm = document.querySelector("form");
    
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        const name = document.querySelector("input[type='text']").value;
        const email = document.querySelector("input[type='email']").value;
        const message = document.querySelector("textarea").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });

    // Highlight the active navigation link on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Add hover effect to products
    const products = document.querySelectorAll(".product");
    products.forEach((product) => {
        product.addEventListener("mouseenter", () => {
            product.style.transform = "scale(1.1)";
        });

        product.addEventListener("mouseleave", () => {
            product.style.transform = "scale(1)";
        });
    });
});
