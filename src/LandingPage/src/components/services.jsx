import Fade from "react-reveal/Fade";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container h-100">
        <div className="row  h-100">
         
          <div className="col-lg-6  py-3 discover_class">
          <Fade left> <div>
              <h2>How It Works</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>

              <div className="icons_Align">
                <div className="col-lg-6 col-md-6  service_imag_playstore">
                  <img
                    src={props.data ? props.data.PlayStore : "loading..."}
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-6  service_imag_appstore">
                  <img
                    src={props.data ? props.data.AppStore : "loading..."}
                    alt=""
                  />
                </div>
              </div>
            </div></Fade>
           
          </div>
          <div className="col-lg-6 col-md-12 py-3 ">
            <Fade left>
              <div className=" collapse_data ">
                <a
                  href="#collapse1"
                  className="btn btn-info  butn_data "
                  data-toggle="collapse"
                >
                  {" "}
                  <i className="fa fa-pencil colp-icon"></i>Create Account
                </a>
                <div id="collapse1" className="collapse collapse_text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className=" collapse_data ">
                <a
                  href="#collapse2"
                  className="btn btn-info  butn_data "
                  data-toggle="collapse"
                >
                  <i className="fa fa-database colp-icon"></i>Choose Package
                </a>
                <div id="collapse2" className="collapse collapse_text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className=" collapse_data ">
                <a
                  href="#collapse3"
                  className="btn btn-info  butn_data "
                  data-toggle="collapse"
                >
                  {" "}
                  <i className="fa fa-thumbs-up colp-icon"></i>Enjoy Data
                </a>
                <div id="collapse3" className="collapse collapse_text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
