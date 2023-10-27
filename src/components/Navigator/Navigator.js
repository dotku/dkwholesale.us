import { Link } from "react-router-dom";

export default function Navigator() {
  const navs = [
    {
      display: "Vending Machines",
      href: "/vending-Machine",
    },
    {
      display: "Green Energy",
      href: "/green-energy",
    },
    {
      display: "Merchaindise",
      href: "/merchaindise",
    },
    {
      display: "Commodity",
      href: "/commodity",
    },
  ];

  console.log(navs);

  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        {navs.map(({ display, href }, idx) => (
          <Link
            key={idx}
            className="nav-item nav-link link-body-emphasis active"
            to={href}
          >
            {display}
          </Link>
        ))}
      </nav>
    </div>
  );
}
