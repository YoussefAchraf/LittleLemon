import { Link } from "react-router-dom";
import logowhite from "./assets/logo-white.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
const Footer = ( ) => {
    return(
      <footer className="w-full h-[auto] bg-[#495e57] flex items-center justify-around flex-col text-center py-[3dvh] gap-[2dvh] md:flex-row">
        <div>
          <img
            src={logowhite}
            width="100px"
            heigh="50px"
            alt="little lemon logo footer"
          />
        </div>
        <div>
          <h3 className="text-[white] text-lg font-bold">Sitemap</h3>  
          <Link to="/" className="text-[#e0e0e0] block text-base"> Home</Link>
          <Link to="/menu" className="text-[#e0e0e0] block text-base">Menu</Link>
          <Link to="/reservations" className="text-[#e0e0e0] block text-base">Reservations</Link>
          <Link to="/orders" className="text-[#e0e0e0] block text-base">Orders</Link>
          <Link to="/identification" className="text-[#e0e0e0] block text-base">Identification</Link>
        </div>
        <div>
          <h3 className="text-[white] text-lg font-bold">Contact us</h3> 
          <p className="text-[rgb(224,224,224)] block text-base"><span className="material-symbols-outlined text-[#e0e0e0] text-base">location_on</span> 678 Pisa Ave, Chicago, IL 60611</p>
          <p className="text-[#e0e0e0] block text-base"><span className="material-symbols-outlined text-[#e0e0e0] text-base">call</span> (312) 593-2744</p>
          <p className="text-[#e0e0e0] block text-base"><span className="material-symbols-outlined text-[#e0e0e0] text-base">mail</span> customer@littlelemon.com</p>
        </div>
        <div>
          <h3 className="text-[white] text-lg font-bold">Follow us</h3> 
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} style={{ color: "#e0e0e0" ,paddingInline:"1dvw"}} /></a>
          <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} style={{ color: "#e0e0e0",paddingInline:"1dvw" }} /></a>
          <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} style={{ color: "#e0e0e0",paddingInline:"1dvw" }} /></a>
        </div>
      </footer>
    );
  }
  export default Footer;