export default function NetlifyContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  return (
    <form name="contact" method="POST" netlify="true" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Your Name
        </label>
        <input type="text" name="name" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Your Email
        </label>
        <input type="email" name="email" id="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="role[]" className="form-label">
          Your Role
        </label>
        <select name="role[]" id="role[]" className="form-select">
          <option value="manager">Manager</option>
          <option value="ic">Employee</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="form-control"
        ></textarea>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-outline-dark">
          Send
        </button>
      </div>
    </form>
  );
}
