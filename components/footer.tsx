const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        <p>© {currentYear} NodeByte LTD. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  