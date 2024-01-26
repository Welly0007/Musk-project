import Insta from "../assets/insta_icon.png"
import Insta2 from "../assets/insta_icon2.png"
import linked from "../assets/linked_icon.png"
import Facebook from "../assets/facebook_icon.png"
import {Link, NavLink} from "react-router-dom"
import "../styles/footer.css"

export default function Header(){
    
    return(
       <footer>
        <div id="cln-footer">
            <h4>Connect</h4>
            <div className="icons">
                <a href="#" id="bdan"  className="icon"><img src={Insta2}></img><img src={Insta} alt="" /></a>
                <a href="#" className="icon"><img src={linked}></img></a>
                <a href="#" className="icon"><img src={Facebook}></img></a>
            </div>
        </div>
        <div id="cln-footer">
            <h4>Email</h4>
            <span>CONTACT@musk.com</span>
            <h4>Phone</h4>
            <span>+20 109 320 4749</span>
        </div>
        <div id="cln-footer">
            <Link to="/">home</Link>
            <Link to="/programs">programs</Link>
            <Link to="/courses">courses</Link>
            <Link to="/ourteam">our team</Link>
            <Link to="/blog">blog</Link>
        </div>
        <div id="cln-footer">
            <a href="#">privacy policy</a>
            <a href="#">legal terms</a>
            <a href="#">fags</a>
        </div>
        <span id="copy-right">All Rights reserved to MUSK.</span>
       </footer>
    )
}