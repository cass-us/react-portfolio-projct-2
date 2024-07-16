

function Header(){
   return (
    
        <nav>
            {/* <div style={{
                background-size: '50%';
            }

            }
            
            </div> */}
          <div className="nav-header">
          
           <div className="logo"><a href="#">DZ</a></div>
           <ul>
            <div className="center--nav">
            <div className="move--center">
            <li><a href="#">ARTICLE</a></li>
            <li><a href="#">ABOUT</a></li>
            </div>
            <button  className="btn">SUBSCRIBE</button>
            </div>
          </ul>
          </div>
    </nav>
    
   );

}

export default Header