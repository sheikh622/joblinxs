import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export const About = (props) => {
  return (

    <div id="joblinxs">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-lg-6 py-3 discover_class">
          <Fade left>
          <div className="about-text">
              <h2> How Joblinxs can help you?</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                 
                </div>
              </div>
            </div>
        </Fade>

           
          </div>

          <div className="col-lg-6 py-3 ">
            <div className="img-place">
            <Zoom>
            <img src="img/howItWork.png" alt="" />
        </Zoom>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
