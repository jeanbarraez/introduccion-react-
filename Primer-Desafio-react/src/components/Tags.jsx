import Button from "react-bootstrap/Button";

const Tags = ({colorButton, raza}) => {
  return (
    <>
      <Button variant={colorButton}>{raza}</Button>
    </>
  );
};

export default Tags;