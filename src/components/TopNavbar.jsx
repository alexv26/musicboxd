import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import React, { useEffect } from "react"; // Add useEffect here

const navItems = [
  { label: "Dashboard", href: "#" },
  { label: "Recommendations", href: "#" },
  { label: "About Us", href: "#" },
];

function TopNavbar() {
  useEffect(() => {
    initMDB({ Dropdown, Collapse });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          backgroundColor: "#121212",
        }}
      >
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a
            className="navbar-brand me-2"
            href="/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4101/4101358.png"
              height={25}
              alt="Musicboxd Logo"
              loading="lazy"
            />
            <p
              style={{
                margin: 0,
                marginLeft: "8px",
                fontSize: "18px",
              }}
            >
              Musicboxd
            </p>
          </a>
          {/* Toggle button */}
          <button
            data-mdb-collapse-init=""
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Right links */}
            <div className="d-flex align-items-center">
              <a
                href="/login"
                className="navbar-nav me-auto mb-2 mb-lg-0 nav-item nav-link me-2"
                style={{
                  paddingRight: "15px",
                }}
              >
                Login
              </a>
              <button
                data-mdb-ripple-init=""
                type="button"
                className="btn btn-primary me-3"
              >
                Sign up for free
              </button>
              <img
                src="https://www.bc.edu/content/bc-web/offices/rec/outdoor-adventures/Current-Trip-Leaders/Alex-Velsmid/_jcr_content/profileImage.img.jpg/1740163378628.jpg"
                className="rounded-circle"
                height="35"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
}

export default TopNavbar;
