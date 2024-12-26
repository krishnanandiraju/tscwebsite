// Function to create the header
function createHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `

   
         <header id="header" class="header fixed-top">
    <div class="branding d-flex align-items-center">

      <div class="container position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
          <img src="assets/img/logo-new.png" alt="">

        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="index.html" class="active">Home<br></a></li>
            <li><a href="about-us.html">About Us</a></li>
            <li class="dropdown"><a href="#"><span>Services</span> <i
                  class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="influencer-management.html">Influencer Management</a></li>
                <li><a href="white-label-production.html">White Label Production</a></li>
                <li><a href="in-house.html">In-House (IH) Production</a></li>
              </ul>
            </li>
            <li><a href="team.html">Team </a></li>
            <li><a href="brand-partners.html">Brand Partners</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>

            <li><a href="contact.html">Contact</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

      </div>

    </div>

  </header>
    `;
}

// Function to create the footer
function createFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
         <footer id="footer" class="footer">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="assets/img/logo-new.png" alt="">
          </a>
          <div class="footer-contact pt-3">
            <p>253/3RT, Vijay Nagar Colony </p>
            <p>Hyderabad 500057</p>
            <p class="mt-3"><strong>Phone:</strong> <span>+91 1234567892</span></p>
            <p><strong>Email:</strong> <span>info@example.co1 m</span></p>
          </div>
        
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about-us.html">About us</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="brand-partners.html">Brand Partners</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="influencer-management.html">Influencer Management</a></li>
                <li><a href="white-label-production.html">White Label Production</a></li>
                <li><a href="in-house.html">In-House (IH) Production</a></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-12 footer-newsletter">
          <h4>Our Social Channels</h4>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename"> The Sports Culture
        
         </strong> <span>All Rights Reserved</span></p>
      <div class="credits">
       
      </div>
    </div>

  </footer>
    `;
}

// Call the functions to add header and footer
createHeader();
createFooter();
