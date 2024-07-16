import facebookIcon from "./assets/icons/facebook.png"
import linkedinIcon from "./assets/icons/linkedin.png"
import pinterestIcon from "./assets/icons/pinterest.png"

function Footer(){
return (
    <footer>
  <div className="sites">
  <div className="site">
    <a href=""><img className="ax" src={facebookIcon} /> </a>
  </div>
  <div className="site">
    <a href=""><img className="ax" src={linkedinIcon} /> </a>
  </div>
  <div className="site">
    <a href=""><img  className="ax" src={pinterestIcon} /> </a>
  </div>
</div>
<div className="section__middle">
    <div className="middle__container">
        <ul>
            <li><a href="">ARTICLE</a></li>
            <li><a href="">ABOUT -US</a></li>
        
        <div className="button__container">
           <button className="footer__btn">SUBSCRIBE</button>
        
     
      </div>
      </ul>
    </div>
   
  
</div>
</footer>
);

}
export default Footer