import "./card.css";
import Button from "../button";
import { IoCartSharp } from "react-icons/io5";

export default function Card(product) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={product.image} alt={product.alt} />
      </div>

      <div className="card-content">
        <p className="price">${product.price}</p>

        <div className="btn">
          <p>{product.title}</p>
          <Button text={<IoCartSharp size={22} />} />
        </div>
      </div>
    </div>
  );
}
