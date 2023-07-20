import notfound from "@assets/notfound.png";
import footer from "@assets/footer.png";

function NotFound() {
  return (
    <div className="notfound">
      <div className="inside-notfound">
        <img src={notfound} alt="not found" />
        <div className="text-notfound">
          <span>404</span>
          <p>Not Found</p>
        </div>
      </div>
      <div className="footer">
        <div className="bgFooter-top">
          <img src={footer} alt="background footer" />
        </div>
        <div className="bgFooter-bot" />
      </div>
    </div>
  );
}

export default NotFound;
