import { Link, useLocation } from "react-router-dom";
import cx from "classnames";

export default function Navigator() {
  const location = useLocation();
  console.log(location);
  const navs = [
    {
      paths: ["/", "/merchaindise"],
      display: "日用商品",
      href: "/merchaindise",
    },
    {
      paths: ["/kiosk-vending-machine", "/vending-machine"],
      display: "自動販售機",
      href: "/vending-Machine",
    },
    {
      paths: ["/green-energy"],
      display: "綠色能源",
      href: "/green-energy",
    },

    {
      paths: ["/commodity"],
      display: "大宗貿易",
      href: "/commodity",
    },
    {
      paths: ["/logistics"],
      display: "货运服务",
      href: "/logistics",
    },
  ];

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
