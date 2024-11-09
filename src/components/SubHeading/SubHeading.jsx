import images from "../../constants/images";
import PropTypes from "prop-types"


const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom:"1rem"}}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" />
    </div>
  );
};


SubHeading.propTypes = {
  title: PropTypes.string
}


export default SubHeading;