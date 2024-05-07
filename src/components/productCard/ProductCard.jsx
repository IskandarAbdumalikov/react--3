import "./productCard.scss";
import star from "../../assets/star.svg";
import CardModule from "../../components/modules/CardModule";
import { productData } from "../../static/productData";
import React, { useState } from "react";

const ProductCard = ({ name, img, unit, info, size, rating, price }) => {
  let [bool, showModule] = useState(false);
  let moduleData = productData.slice(0, 4).map((el) => (
    <div key={el.id} className="module__card">
      <div className="module__img">
        <img src={el.img} alt="" />
      </div>
      <div className="module__title">
        <h1>{el.name}</h1>
        <div className="unit">
          {el.size}
          {el.unit}
        </div>
        <p className="modul__card__title">{el.info}</p>
      </div>
    </div>
  ));
  return (
    <>
      <div className="product__card">
        <img src={img} alt="" />
        <div className="product__card__info">
          <h2>{name}</h2>
          <h3>
            {size} {unit}
          </h3>
          <p className="product__card__desc">{info}</p>
          <div className="card__rating">
            <h3>{price}</h3>
            <div className="rating">
              {rating} <img src={star} alt="" />
            </div>
          </div>
          <button onClick={() => showModule(true)} className="add-btn">
            Add
          </button>
        </div>
      </div>
      <div className={bool?"add":"remove"}>
        <CardModule close={showModule} bool={bool}>
          {moduleData}
        </CardModule>
      </div>
    </>
  );
};

export default ProductCard;
