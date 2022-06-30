import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export const Header = (props) => {
  return (
    <header id="header">
     
      <div className="page-banner home-banner">
        <div className="container h-100">
          <div className="row align-items-center h-100">
          <Fade top>
          <div className="col-lg-6 py-3 wow fadeInUp">
              <h1 className="mb-4">
              {props.data ? props.data.title : 'Loading'}
              </h1>
              <p className="page-text">
              {props.data ? props.data.paragraph : 'Loading'}
              </p>
              <form>
                <div className="info">
                  <input type="email" placeholder="Your Email" />
                </div>
                <input
                  type="submit"
                  className=" btn-email-button "
                  value="Subscribe"
                />
              </form>
            </div>
        </Fade>

          
            <div className="col-lg-6 py-3 wow zoomIn">
              <div className="img-place ">
                <Zoom>
                  <img src={props.data ? props.data.smallImage : 'Loading'} alt="" />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
