import PropTypes from 'prop-types';

function HeroBanner({banner, heading, intro}) {
    return (
        <div style={{backgroundColor: '#000',padding: "20px", display: "flex"}}>
            <div style={{flexBasis: "50%"}}>
                <img style={{width: "100%"}} src={banner} alt="" />
            </div>
            <div style={{color: "#fff", textAlign: "left", paddingLeft: "20px"}}>
                <h1>{heading} </h1>
                <p>{intro}</p>
            </div>
        </div>
    );
}

HeroBanner.propTypes = {
    banner: PropTypes.string,
    heading: PropTypes.string,
    intro: PropTypes.string
};

export default HeroBanner;