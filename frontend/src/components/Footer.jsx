import footer from "@assets/footer.png";

function Footer() {
  return (
    <div className="footer">
      <div className="bgFooter-top">
        <img src={footer} alt="background footer" />
      </div>
      <div className="bgFooter-bot" />
    </div>
  );
}

export default Footer;
