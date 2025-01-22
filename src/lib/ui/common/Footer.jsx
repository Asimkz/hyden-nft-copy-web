import Images from "../../global/images";

const Footer = () => {

  return (
    <div className="footer-main">
      <a href="https://telegram.org/" target="_blank" className="footer-icons">
        <img src={Images.telegram} alt="" width={100} height={100}/>
      </a>
      <a href="https://x.com/" target="_blank" className="footer-icons">
        <img src={Images.twitter} alt="" width={100} height={100} />
      </a>
    </div>
  );
};

export default Footer;
