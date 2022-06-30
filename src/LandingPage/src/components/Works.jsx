import Fade from 'react-reveal/Fade';

export const Works = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
        <Fade bottom>
        <h2>How It Works</h2>
        </Fade>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className=' col-md-4 '>
                <div className="mainfeatur">
                <img className='icon_image' src={d.img} alt="" />
                  {/* <i className={d.icon}></i> */}
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div></div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
