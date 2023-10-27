export default function ContactUs() {
  return (
    <div className="container">
      <address className="row">
        <div className="col-12 col-md-6 g-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.446156145181!2d-121.90517062325881!3d37.68571981728346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808febe1f7bfffff%3A0x7543bdfc81f39743!2s4125%20Hopyard%20Rd%20STE%20225%2C%20Pleasanton%2C%20CA%2094588!5e0!3m2!1sen!2sus!4v1698378677001!5m2!1sen!2sus"
            height="450"
            style={{ border: 0, width: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="dkwholesale address"
          ></iframe>
        </div>
        <div className="col-12 col-md-6 mt-5 g-0">
          <h3>Contact Us</h3>
          <hr />
          DK Wholesale <br />
          4125 Hopyard Rd <br />
          Suite #225 <br />
          Pleasanton, CA 94588
          <br />
          United States
          <br />
          <hr />
          <a
            href="mailto:dkwholesale2020@gmail.com"
            style={{ textDecoration: "none" }}
          >
            dkwholesale2020@gmail.com
          </a>
          <br />
          (415) 851-1937
        </div>
      </address>
    </div>
  );
}
