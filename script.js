document.addEventListener("DOMContentLoaded", function () {
    const eventHeadings = document.querySelectorAll(".Event-heading");
    const alAjalHeading = document.querySelector(".ALAJAL");
  
    const observerOptions = { threshold: 0.6 };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add animation when visible
        } else {
          entry.target.classList.remove("animate"); // Remove animation when out of view
        }
      });
    }, observerOptions);
  
    eventHeadings.forEach(heading => observer.observe(heading)); // Observe all headings

    observer.observe(alAjalHeading);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.getElementById("Event");
    const images = document.querySelectorAll(".muh");

    // Function to trigger animations
    function triggerAnimations() {
        images.forEach(img => {
            const animationClass = img.getAttribute("data-animation"); // Read specific animation class
            img.classList.remove(animationClass); // Remove existing animation
            void img.offsetWidth; // Force reflow
            img.classList.add(animationClass); // Re-add animation
        });
    }

    // Scroll Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                triggerAnimations(); // Play animations when section appears
            }
        });
    }, { threshold: 0.3 });

    observer.observe(section);

    // Button click event to restart animations
    document.querySelector(".event-btn").addEventListener("click", function () {
        triggerAnimations();
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const muharamSection = document.getElementById("Event");
  const jashanSection = document.getElementById("Jashan");
  const medicalSection = document.getElementById("MedicalCamp"); // Medical Camp Section

  const muharamImages = document.querySelectorAll(".muh");
  const jashanImages = document.querySelectorAll(".jas");
  const medicalImages = document.querySelectorAll(".med"); // Medical Camp Images

  function triggerAnimations(images) {
      images.forEach(img => {
          const animationClass = img.getAttribute("data-animation");
          img.classList.remove(animationClass);
          void img.offsetWidth; // Force reflow to reset animation
          img.classList.add(animationClass); // Apply the animation based on the data-animation value
      });
  }

  const observerOptions = { threshold: 0.3 };

  const muharamObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              triggerAnimations(muharamImages);
          }
      });
  }, observerOptions);

  const jashanObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              triggerAnimations(jashanImages);
          }
      });
  }, observerOptions);

  const medicalObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              triggerAnimations(medicalImages); // Trigger medical animations when they appear
          }
      });
  }, observerOptions);

  muharamObserver.observe(muharamSection);
  jashanObserver.observe(jashanSection);
  medicalObserver.observe(medicalSection); // Observe Medical Camp section

  // Button click event to restart animations for all sections
  document.querySelector(".event-btn").addEventListener("click", function () {
      triggerAnimations(muharamImages);
      triggerAnimations(jashanImages);
      triggerAnimations(medicalImages); // Restart medical animations
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutUsSection = document.getElementById("AboutUs");
    const cards = document.querySelectorAll(".card");

    function restartAnimation() {
        cards.forEach(card => {
            card.style.animation = "none"; // Reset animation
            void card.offsetWidth; // Force reflow
            card.style.animation = "card 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
        });
    }

    // Observe when About Us comes into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                restartAnimation();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(aboutUsSection);

    // If you have a nav link to About Us, trigger animation on click
    document.querySelector('a[href="#AboutUs"]').addEventListener("click", function () {
        setTimeout(restartAnimation, 500); // Delay to ensure scrolling happens first
    });
});

let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const slider = document.getElementById('slider');
        const dotsContainer = document.getElementById('dots');

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        }

        function autoSlide() {
            nextSlide();
            setTimeout(autoSlide, 3000);
        }

        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        });

        updateSlider();
        setTimeout(autoSlide, 3000);
