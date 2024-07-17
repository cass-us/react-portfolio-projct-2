import img1 from "./assets/tr1.jfif";
import img2 from "./assets/tr2.jfif";
import img3 from "./assets/tr3.jfif";
import img4 from "./assets/tr4.jfif";
import  './MiddleSection.css';
function  MiddleSection(){
return ( 
    <section  className="middle__section">  
         <div className="sub__header">
    <div className="sub__header__">
        <h2 className="latest">LATEST ARTICLES</h2>
        <br/><br/><br/><br/><br/><br/>
    </div>
    <div className="header__table">
        <div className="card__content">
           <img  src={img1} alt="Article 1 Image" />
           <p className="card__p"> </p>
          <div className="card__container"> <br/>
            <p>How to automate surveillance drone</p>
        </div>
        </div>
        
        <div className="card__content">
            <img  src={img2} alt="Article 2 Image"/>
            <p className="card__p"> </p><br/>
            <div className="card__container">
            <p>Robotics and Artificial intelligence</p>
            </div>
        </div>
        <div className="card__content">
            <img  src={img4} alt="Article 3 Image" />
            <p className="card__p"> </p><br/>
            <div className="card__container">
            <p>improving lives through artificial prospects</p>
            </div>
        </div>
        <div className="card__content">
            <img   src={img3} alt="Article 4 Image" />
            <p className="card__p"> </p><br/>
            <div className="card__container">
        <p>power of robotics in agriculture</p>
        </div>
        </div>
        </div>
     </div>

<div className="last__section">
<div className="section__image">
    <img className="last__section__image"  src={img1} />
</div>

<div className="last__section">
<div className="section__image">
    </div>
   <div className="section___content">
    <br/><br/><br/>
        <h3>ABOUT US</h3>
        <br/>
        <div className="content__section ">
            <p>Wecome to our dronoticz ,where innovation and technology converge to to shape the 
             future. We revolutionize industries and improve lives worldwide
               through our passion for pushing the boundaries of what robots can do. With 
               expertise in AI ,computer visison, mechanical engineering , and automation, We
               lead the way in robotics revolution. Our brilliant team creates intelligent
               machines that seanlessly integgrate into daily life, enhancing productivity,
               safety, and efficiency.Join us on this exciting journey as we unlock new 
               frontiers,solve complex challenges,and shape a future where intelligent
               machines work hand-in-hand with humans. Discover the power of robotics 
               and be part of the revolution.
               </p>

        </div>
   
 </div>
</div>
</div>

<div className="last__section__header">
        <div className="header1">
            <h2>SUBSCRIBE</h2>
            <p>sign-up to our newsletter</p>
        </div>
        <div className="text__input">
           <input className="input__text" type="text" name="" id="" placeholder="        your email" />
           <br/>
           <br/>
           <input  className="button" type="button" value="SUBMIT" />
        </div>
    </div>
    </section>
   
    );
}
export default  MiddleSection;