// Close Sticky Banner Function
function closeStickyBanner() {
   const banner = document.getElementById('stickyPromoBanner');
   if (banner) {
      banner.classList.remove('show');
      sessionStorage.setItem('promoBannerClosed', 'true');
   }
}

document.addEventListener('DOMContentLoaded', function() {
   // Check if mobile device
   const isMobile = window.innerWidth <= 768;
   
   // Set sticky banner position dynamically based on navbar height
   const navbar = document.querySelector('.navbar');
   const stickyBanner = document.getElementById('stickyPromoBanner');
   
   if (navbar && stickyBanner) {
      function updateBannerPosition() {
         const navbarHeight = navbar.offsetHeight;
         stickyBanner.style.top = navbarHeight + 'px';
      }
      
      // Set initial position
      updateBannerPosition();
      
      // Update on window resize
      let resizeTimer;
      window.addEventListener('resize', function() {
         clearTimeout(resizeTimer);
         resizeTimer = setTimeout(updateBannerPosition, 100);
      });
   }
   
   // Add fade-in class to sections
   const sections = document.querySelectorAll('.container, .container-lg');
   sections.forEach(section => {
      section.classList.add('fade-in-section');
      // On mobile, immediately show content
      if (isMobile) {
         section.classList.add('is-visible');
      }
   });

   // Intersection Observer for scroll animations (desktop only)
   if (!isMobile && sections.length > 0) {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add('is-visible');
            }
         });
      }, {
         threshold: 0.1,
         rootMargin: '0px 0px -50px 0px'
      });

      sections.forEach(section => {
         observer.observe(section);
      });
   }

   // Smooth scroll to top on page load
   if ('scrollTo' in window) {
      window.scrollTo({ top: 0, behavior: 'auto' });
   }

   // Enhanced navbar scroll effect
   if (navbar) {
      let lastScrollTop = 0;
      
      window.addEventListener('scroll', function() {
         let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         
         // Check banner closed status on every scroll (to catch real-time changes)
         const bannerClosed = sessionStorage.getItem('promoBannerClosed') === 'true';
         
         // Add shadow when scrolled
         if (scrollTop > 50) {
            navbar.classList.add('scrolled');
         } else {
            navbar.classList.remove('scrolled');
         }

         // Show sticky banner after scrolling past hero section (around 300px)
         // Only show if not closed by user
         if (stickyBanner) {
            if (scrollTop > 300 && !bannerClosed) {
               stickyBanner.classList.add('show');
            } else if (scrollTop <= 300 || bannerClosed) {
               stickyBanner.classList.remove('show');
            }
         }
         
         lastScrollTop = scrollTop;
      }, { passive: true });
   }

   // Highlight active nav link based on current page
   const currentPage = window.location.pathname.split('/').pop() || 'index.html';
   const navLinks = document.querySelectorAll('.nav-link');
   
   navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
         link.classList.add('active');
      } else {
         link.classList.remove('active');
      }
   });

   // Smooth scroll for CTA button and anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
         const targetId = this.getAttribute('href');
         if (targetId.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
               const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
               const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
               
               window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
               });

               // Close mobile menu if open
               const navbarCollapse = document.querySelector('.navbar-collapse');
               if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                  navbarCollapse.classList.remove('show');
               }
            }
         }
      });
   });
});
