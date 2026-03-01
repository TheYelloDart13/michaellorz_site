// Lightbox Gallery
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxContent = document.querySelector('.lightbox-content img');
  const lightboxClose = document.querySelector('.lightbox-close');
  
  if (!lightbox || !lightboxContent) return;
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        lightboxContent.src = img.src;
        lightboxContent.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
  
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Parallax Effect removed - hero image stays fixed

// Contact Form Handler
function initContactForm() {
  const form = document.querySelector('.contact-form form');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // In a real implementation, you would send this to a serverless function
    // For now, we'll just show a success message
    const submitButton = form.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      submitButton.textContent = 'Message Sent!';
      submitButton.style.backgroundColor = '#A7F3D0';
      form.reset();
      
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '';
      }, 3000);
    }, 1000);
    
    // In production, uncomment and configure:
    /*
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        submitButton.textContent = 'Message Sent!';
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      submitButton.textContent = 'Error - Please try again';
      console.error('Error:', error);
    }
    */
  });
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
  initSmoothScroll();
  initContactForm();
});

