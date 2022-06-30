import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
export const Features = (props) => {
  return (
    <div id="feature">
      <div className="container">
        <div className="section-title text-center">
          <Fade bottom>
            <h2>Amazing Features</h2>
          </Fade>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                   <Zoom>
                   <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <h4>{d.heading}</h4>
                      <p>{d.text}</p>
                    </div>
                  </div>
        </Zoom>
                 
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
