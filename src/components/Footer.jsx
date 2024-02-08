import React from "react";

function Footer() {
  return (
    <div className="relative top-10 text-center">
      <div className="footer-content">
        <p>
          Feel free to contact us at{" "}
          <a href="mailto:info@example.com">info@example.com</a>
        </p>
        <p>Follow us on social media:</p>
        <ul className="social-media-links">
          <li>
            <a href="https://www.facebook.com/example">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com/example">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/example">Instagram</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Planto Project. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
