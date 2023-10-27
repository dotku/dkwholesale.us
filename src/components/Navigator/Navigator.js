import { Link, useLocation } from "react-router-dom";
import cx from "classnames";

export default function Navigator() {
  const location = useLocation();
  console.log(location);
  const navs = [
    {
      paths: ["/", "/kiosk-vending-machine", "/vending-machine"],
      display: "Vending Machines",
      href: "/vending-Machine",
    },
    {
      paths: ["/green-energy"],
      display: "Green Energy",
      href: "/green-energy",
    },
    {
      paths: ["/merchaindise"],
      display: "Merchaindise",
      href: "/merchaindise",
    },
    {
      paths: ["/commodity"],
      display: "Commodity",
      href: "/commodity",
    },
    {
      paths: ["/lunar-new-year-festival-products"],
      display: "Lunar New Year Festival Products",
      href: "/lunar-new-year-festival-products",
    },
  ];

  console.log(navs);

  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        {navs.map(({ display, href }, idx) => (
          <Link
            key={idx}
            className={cx("nav-item nav-link link-body-emphasis", {
              active: navs[idx].paths.includes(location.pathname),
              "text-danger": navs[idx].href.includes("lunar"),
            })}
            to={href}
          >
            {display}
          </Link>
        ))}
      </nav>
    </div>
  );
}
