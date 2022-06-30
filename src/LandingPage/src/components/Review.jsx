import Zoom from "react-reveal/Zoom";
import Rotate from 'react-reveal/Rotate';
import ParticlesBg from "particles-bg";

export const Review = (props) => {
  return (
    <div id="review" className="text-center">
       {/* <ParticlesBg color="#12499C" type="cobweb" bg={true} />    */}

      <div className="container h-100">
     
        <div className="row align-items-center h-100">
          <div className="col-lg-6 py-3 discover_class">
          <Rotate top left>
          <div className="port-text">
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Johanna S. Richardson</h3>
              <span>CEO Essentials</span>
            </div>
        </Rotate>
           
          </div>
          <div className="col-lg-6 py-3 ">
          <Zoom><div className="img-place">
              <img src="img/6.png" alt="" />
            </div></Zoom>
            
          </div>
        </div>
      </div>
    </div>
  );
};
