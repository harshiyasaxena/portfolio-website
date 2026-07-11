import planeIcon from "../../assets/plane.png";
import planeVerticalIcon from "../../assets/plane_vertical.png"; // <--- Add your vertical plane asset here

const PlaneIcon = ({ vertical }) => { // <--- Receive the vertical prop here
  return (
    <img 
      src={vertical ? planeVerticalIcon : planeIcon} // <--- Swaps based on layout direction
      alt='plane' 
      className='h-12 w-12 object-contain' 
    />
  );
};

export default PlaneIcon;