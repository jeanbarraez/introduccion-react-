//import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';
const Tags = ({colorButton, raza}) => {
  return (
    <>
      <Badge bg={colorButton} className='boton'>{raza}</Badge>
    </>
  );
};

export default Tags;