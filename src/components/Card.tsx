import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  img,
  title,
  linkTo,
}: {
  img: string;
  title: string;
  linkTo: string;
}) => {
  return (
    <div className="card">
      <Link style={{ textDecoration: "none" }} to={linkTo}>
        <h2>{title}</h2>
        <img src={img} alt="busca"></img>
      </Link>
    </div>
  );
};

export default Card;
