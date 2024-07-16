import './BackgroundComponent.css'; // CSS file
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
// import "@fontsource/inter/400-italic.css"; // Specify weight and style

const BackgroundComponent = () => {
  return (
    <div className="background--container">
      <div className="background--image"></div>
      <nav>
        <div className="nav-header">
          <div className="logo"><a href="#">DZ</a></div>
          <ul className="nav-links">
            <div className="center--nav">
              <div className="move--center">
              <li><a href="#">ABOUT</a></li>
                <li><a href="#">ARTICLES</a></li>
              </div>
                
              <button type="button" className="btn">SUBSCRIBE</button>
            </div>
          </ul>
        </div>
      </nav>

      <div className="middle--container">
        <h1 className="title">DRONOTICZ</h1>
        <p className="title--text">THE ERA OF DRONEZ</p>
        </div>
      </div>
    
  );
}

export default BackgroundComponent;