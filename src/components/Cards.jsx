import { Col } from "react-bootstrap";

export const Cards = ({ titulo, descripcion, imgUrl }) => {
  return (
    
    <Col size={12} sm={10} md={3}>
      <div className="card-imgbx">
        <img src={imgUrl} />
        <div className="card-txtx">
          <h4>{titulo}</h4>
          <span>{descripcion}</span>
        </div>
      </div>
    </Col>
  )
}
