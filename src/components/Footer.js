import React from "react";
import "../styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
      <p>Tüm Hakları Saklıdır | Burger Yiyelim</p>
    </div>
  );
}

export default Footer;
