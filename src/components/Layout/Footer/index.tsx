import React from "react";
import footerstyles from "./footer.module.scss";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from 'assets/images/frty 2.png'

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className={footerstyles["upper-container"]}>
        <div className={footerstyles["contact-column"]}>
          <h3>Reach Us</h3>
          <a href='tel:+917668344298'> <PhoneAndroidIcon className={footerstyles['contact-outer']}/> +917668344298 </a>
          <a href="mailto:support@xombus.com">
            <LanguageIcon className={footerstyles['contact-outer']}/> support@xombus.com
          </a>
          <div className={footerstyles['social']}>
            <h2>Follow Us</h2>
            <div className={footerstyles['social-tags']}>
              <LinkedInIcon className={footerstyles['social-outer']} />
              <InstagramIcon className={footerstyles['social-outer']} />
            </div>
          </div>
        </div>
        <div className={footerstyles["text-column"]}>

          <h3>Useful Links</h3>
          <div className={footerstyles['texts']}>
            <a href="/" >Privacy Policy</a>
            <a href="/" >Terms of Service</a>
          </div>
          <div className={footerstyles['texts']}>
            <a href="/" >Disclaimer</a>
            <a href="/">Cookie Policy</a>

          </div>
          <div className={footerstyles['logo']}>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={footerstyles["address-column"]}>
          <h3>Address</h3>
          <p>
            Augusta Point, Sector 53, Golf Course Road, Gurugram,122002 India.
          </p>
          <p>Prabhavee Tech Park, 4th Floor, Baner Road, Pune, 411045 India.</p>
        </div>
      </div>

      <div className={footerstyles["lower-container"]}>
        <h5 className={footerstyles["lower-container-text"]}>
          Empowering Education, Enabling Innovation.A product of Doux Labs
          Private Limited
        </h5>
        <h5 className={footerstyles["lower-container-text"]}>
          A product of Doux Labs Private Limited <br />© 2024 Xombus.com. All
          Rights Reserved
        </h5>
      </div>
    </div>
  );
};

export default Footer;
