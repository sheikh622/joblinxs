export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              style={{ width: "63px", marginTop: "-18px" }}
              src="img/Joblinxs-blue.png"
              alt=""
            />
            {/* SMART */}
          </a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-navbar-collapse-1'
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#aboutus" className="page-scroll">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                how it works
              </a>
            </li>
            <li>
              <a href="#joblinxs" className="page-scroll">
                Joblinxs
              </a>
            </li>
            <li>
              <a href="#feature" className="page-scroll">
                Features
              </a>
            </li>
            {/* <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li> */}
            <li>
              <a href="#review" className="page-scroll">
                Reviews
              </a>
            </li>

            {/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
