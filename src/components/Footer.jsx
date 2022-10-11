import FooterStyle from "../scss/footer.module.scss";

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <p className={FooterStyle.title}>
        Copyright by Yakup {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
