import ContactUs from "../ContactUs";

export default function Footer() {
  return (
    <div id="footer" className="my-5 text-center">
      <ContactUs />
      <div className="small text-align-center">
        &copy;2023 - {new Date().getFullYear()} DKWholesale (US), tehcnologies
        provide by{" "}
        <a href="http://jytech.us" style={{ color: "inherit" }}>
          JYTech
        </a>{" "}
        LLC
      </div>
    </div>
  );
}
