import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export const AboutUs = (props) => {
  return (
    <div id="aboutus">
      <div className="container h-100">
        <div className="row align-items-center h-100">
        <div className="col-lg-6 py-3 ">
            <div className="img-place">
              <Zoom>
                <img src="img/aboutUs.png" alt="" />
              </Zoom>
            </div>
          </div>
          <div className="col-lg-6 py-3 discover_class">
            <Fade left>
              <div className="about-text">
                <h2>About Us:</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </div>
            </Fade>
          </div>

         
        </div>
      </div>
    </div>
  );
};
