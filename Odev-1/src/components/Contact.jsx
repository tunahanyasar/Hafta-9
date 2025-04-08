const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>CONTACT US</h2>
        <div className="heading-bottom-line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Hampden-Syndey Collage.
        </p>
        <div className="message-container">
          <div>
            <div className="mobile-email">
              <div className="mobile">
                <h6>Mobile Number</h6>
                <span>+135 773 321 4442</span>
              </div>
              <div className="email">
                <h6>Email Address</h6>
                <span>demo@demo.com</span>
              </div>
            </div>
            {/* Mesaj kısmı */}
            <form>
              <h3>Make An Appointment</h3>
              <input type="text" placeholder="Your Name" id="textname" />
              <input type="email" placeholder="Your Email" id="email" />
              <textarea
                rows="5"
                cols="50"
                name="text"
                placeholder="Your Message"
              ></textarea>
            </form>
          </div>
          {/* Google Map */}
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3210907401!2d28.68252805376745!3d41.00537021102762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1742689738511!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Istanbul"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 