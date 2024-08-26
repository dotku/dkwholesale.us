import ContactUs from "../ContactUs";

export default function Footer() {
  return (
    <div id="footer" className="my-5 text-center">
      <ContactUs />
      <div className="small text-align-center">
        &copy;2023 - {new Date().getFullYear()} DKWholesale LLC, partnered with
        tehcnologies service provider{" "}
        <a href="http://jytech.us" style={{ color: "inherit" }}>
          JYTech
        </a>
      </div>
    </div>
  );
}
