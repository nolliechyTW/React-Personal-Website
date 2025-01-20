import "../Styles/Contact.css";

const Contact = () => {
  return (
<section class="contact" id="contact">
  <header class="section-heading">
    <h1>Get in Touch</h1>
    <p>I'm here to collaborate and create something amazing together. Feel free to reach out!</p>
  </header>

  <div class="contact-contents">
    <div class="contact-details">
      <div class="contact-item">
        <div class="icon">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <div class="contact-text">
          <span>My Location</span>
          <span>Philadelphia/ Washington DC</span>
        </div>
      </div>
      <div class="contact-item">
        <div class="icon">
          <i class="fa-solid fa-phone"></i>
        </div>
        <div class="contact-text">
          <span>Phone Number</span>
          <span><a href="tel:+12152522496">215-252-2496</a></span>
        </div>
      </div>
      <div class="contact-item">
        <div class="icon">
          <i class="fa-solid fa-envelope"></i>
        </div>
        <div class="contact-text">
          <span>Email Address</span>
          <span>
            <a href="mailto:nolliechy@gmail.com">nolliechy@gmail.com</a>
          </span>
        </div>
      </div>
    </div>

    <form action="https://formsubmit.co/nolliechy@gmail.com" method="POST" class="contact-form">
      <div class="input-element">
        <input type="text" name="name" placeholder="Your Name" required />
      </div>
      <div class="input-element">
        <input type="email" name="email" placeholder="Your Email" required />
      </div>
      <div class="text-area">
        <textarea name="message" placeholder="Your Message" required></textarea>
      </div>
      <div class="form-button-container">
        <button type="submit" class="btn form-btn">Send Message</button>
      </div>
    </form>
  </div>
</section>
  );
};

export default Contact;
