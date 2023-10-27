import "./Header.css";

export function Header() {
  return (
    <header className="border-bottom lh-1 py-3" id="Header">
      <div className="row flex-nowrap justify-content-center align-items-center">
        <div className="col text-center">
          <a
            className="header-logo text-body-emphasis text-decoration-none"
            href="#/"
          >
            DK Wholesale
          </a>
        </div>
      </div>
    </header>
  );
}
