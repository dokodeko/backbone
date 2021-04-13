import styleLayout from "./layout.module.css";

const Footer = () => {
  return (
    <footer className={styleLayout.footer}>
      <div className={styleLayout.cont_logo}>
        <img src="/png/b.png" />
      </div>
      <div className={styleLayout.cont_texto}>
        <a href="mailto:info@backbonesystems.io">info@backbonesystems.io</a>
        <p className="mb-0 ">© 2021 Backbone Systems. All Rights Reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
