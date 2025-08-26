let isMobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    const mobileSignIn = document.getElementById('mobileSignIn');

    isMobileMenuOpen = !isMobileMenuOpen;

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (window.innerWidth <= 768) {
            mobileSignIn.style.display = 'none';
        }
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu(event) {
    if (event && event.target !== event.currentTarget) return;

    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    const mobileSignIn = document.getElementById('mobileSignIn');

    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto';
    isMobileMenuOpen = false;

    if (window.innerWidth <= 768) {
        mobileSignIn.style.display = 'block';
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    const mobileSignIn = document.getElementById('mobileSignIn');

    if (window.innerWidth > 768) {
        if (isMobileMenuOpen) {
            closeMobileMenu();
        }
        mobileSignIn.style.display = 'none';
    } else {
        if (!isMobileMenuOpen) {
            mobileSignIn.style.display = 'block';
        }
    }
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
    }
});

// Initialize mobile sign in button visibility
window.addEventListener('load', () => {
    const mobileSignIn = document.getElementById('mobileSignIn');
    if (window.innerWidth <= 768) {
        mobileSignIn.style.display = 'block';
    }
});

// Image Slideshow Functionality
function startSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Show the first slide
    slides[currentSlide].classList.add('active');

    // Change slide every 1.5 seconds
    setInterval(() => {
        // Hide current slide
        slides[currentSlide].classList.remove('active');

        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;

        // Show next slide
        slides[currentSlide].classList.add('active');
    }, 1500); // 1.5 seconds
}

// Initialize card3 slideshow
function initCard3Slideshow() {
    const slideshow = document.querySelector('.card3 .slideshow');
    const dotsContainer = document.querySelector('.card3 .slideshow-dots');

    // Clear any existing content
    slideshow.innerHTML = '';
    dotsContainer.innerHTML = '';

    // Create slides and dots
    for (let i = 1; i <= 9; i++) {
        // Create slide
        const img = document.createElement('img');
        img.src = `c-past${i}.jpg`;
        img.alt = `Event Image ${i}`;
        slideshow.appendChild(img);

        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.dataset.index = i - 1;
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.card3 .dot');
    const images = document.querySelectorAll('.card3 .slideshow img');
    let currentIndex = 0;
    const totalImages = images.length;

    // Set first dot as active
    if (dots.length > 0) dots[0].classList.add('active');

    // Function to show slide
    function showSlide(index) {
        if (index >= totalImages) index = 0;
        if (index < 0) index = totalImages - 1;

        slideshow.style.transform = `translateX(-${index * 100}%)`;

        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        currentIndex = index;
    }

    // Add click event to dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showSlide(parseInt(dot.dataset.index));
        });
    });

    // Auto slide change
    let slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000); // Change slide every 3 seconds

    // Pause on hover
    slideshow.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slideshow.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 3000);
    });

    // Initialize first slide
    showSlide(0);
}

// Clone buttons for seamless looping
document.addEventListener('DOMContentLoaded', function () {
    const marquee = document.querySelector('.people-name1');
    const buttons = marquee.querySelectorAll('button');

    // Clone all buttons and append them
    buttons.forEach(button => {
        const clone = button.cloneNode(true);
        marquee.appendChild(clone);
    });

    // Adjust animation duration based on number of buttons
    const totalButtons = buttons.length * 2; // Original + clones
    marquee.style.animationDuration = `${totalButtons * 3}s`; // 3s per button
});

// Start the slideshows when the page loads
window.addEventListener('DOMContentLoaded', () => {
    startSlideshow();
    initCard3Slideshow();
});

const pastContainer = document.querySelector(".past-container");

// Load past1–past6 dynamically
for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    img.src = `past${i}.jpg`;
    img.alt = `Past Image ${i}`;
    img.classList.add("past-image");
    pastContainer.appendChild(img);
}

const pastImages = document.querySelectorAll(".past-image");
let pastIndex = 0;

// Show first image instantly
pastImages[0].classList.add("active");

function showNextImage() {
    pastImages[pastIndex].classList.remove("active");
    pastIndex = (pastIndex + 1) % pastImages.length;
    pastImages[pastIndex].classList.add("active");
}

// Start slideshow without an initial pause
setTimeout(() => {
    setInterval(showNextImage, 2000); // Every 2s total (1s fade + 1s visible)
    showNextImage(); // trigger immediately so timing is smooth
}, 0);





setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 4) % images.length;
    images[index].classList.add("active");
}, 2000); // change every 3s

function showToast() {
    const toast = document.getElementById('toast');
    if (toast && toast.classList.contains('hidden')) {
        toast.classList.remove('hidden');

        // Auto-hide after 20 seconds
        setTimeout(() => {
            if (!toast.classList.contains('hidden')) {
                toast.classList.add('hidden');
            }
        }, 20000); // 20 seconds

        // Close on cross button click
        const closeButton = document.querySelector('.toast-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                toast.classList.add('hidden');
            });
        }
    }
}

// Show toast every 15 seconds
let toastInterval = setInterval(() => {
    showToast();
}, 15000); // 15 seconds

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Show loading state
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        document.getElementById('successModal').classList.remove('hidden');
        submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Send Message';
        submitBtn.disabled = false;
        this.reset();
    }, 1500);
});

function closeModal() {
    document.getElementById('successModal').classList.add('hidden');
}

// Countdown Timer with Auto-Destroy
document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const eventDate = new Date("August 23, 2025 18:00:00").getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;

        // If countdown is over
        if (distance < 0) {
            const countdownSection = document.querySelector(".bg-amber-600");
            if (!document.getElementById("expired-message")) {
                const expiredMsg = document.createElement("div");
                expiredMsg.id = "expired-message";
                expiredMsg.className =
                    "expired-message mt-6 p-4 bg-red-600 text-white text-center rounded";
                expiredMsg.innerHTML = `
              <h3 class="text-2xl font-bold mb-2">🎉 Event Completed</h3>
              <p class="text-lg">The International Mushaira 2025 has concluded. Thank you for your participation!</p>
            `;
                countdownSection.appendChild(expiredMsg);
            }

            // Reset to 00
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            setTimeout(destroyCountdown, 8000);
            return;
        }

        // Calculate
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update UI with leading zeros
        document.getElementById("days").textContent = days
            .toString()
            .padStart(2, "0");
        document.getElementById("hours").textContent = hours
            .toString()
            .padStart(2, "0");
        document.getElementById("minutes").textContent = minutes
            .toString()
            .padStart(2, "0");
        document.getElementById("seconds").textContent = seconds
            .toString()
            .padStart(2, "0");
    }

    function destroyCountdown() {
        const countdownSection = document.querySelector(".bg-amber-600");
        const countdownBoxes = document.querySelectorAll(
            ".bg-amber-600 .flex.space-x-6 > div"
        );

        // Fade-out effect
        countdownBoxes.forEach((box) => {
            box.style.transition = "opacity 1s ease";
            box.style.opacity = "0";
        });

        setTimeout(() => {
            const countdownContainer = document.querySelector(
                ".bg-amber-600 .flex.space-x-6"
            );
            if (countdownContainer) {
                countdownContainer.remove();

                const sectionTitle = countdownSection.querySelector("h2");
                if (sectionTitle) {
                    sectionTitle.textContent = "EVENT COMPLETED";
                }

                const dateText = countdownSection.querySelector("p");
                if (dateText) {
                    dateText.innerHTML =
                        "✅ Successfully held on 23 August, 2025";
                }
            }
        }, 1000);

        clearInterval(countdownInterval);
    }

    // Start countdown
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});
