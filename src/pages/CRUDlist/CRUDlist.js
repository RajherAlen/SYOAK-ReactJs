import React, { useState } from "react";
import CRUDtop from "./CRUDtop";
import arrowLeft from "./img/arrowLeft.svg";
import arrowRight from "./img/arrowRight.svg";
import CRUDcard from "./CRUDrow";
import { dataList } from "./datalist";

const CRUDlist = () => {
  const [datalist, setDatalist] = useState(dataList);

  return (
    <div className="crud">
      <CRUDtop />

      <div className="crud__content">
        {/* CRUD CONTENT HEADER */}
        <div className="crud__content__header">
          <div className="crud__content__header crud__content__header__info">
            <p className="crud__content__info-header crud__content__info-header--title">
              Provider
            </p>
            <p className="crud__content__info-header crud__content__info-header--title">
              Fuel Type
            </p>
            <p className="crud__content__info-header crud__content__info-header--title">
              Fuel Name
            </p>
            <p className="crud__content__info-header crud__content__info-header--title">
              Price
            </p>
            <p className="crud__content__info-header crud__content__info-header--title">
              Date Created
            </p>
          </div>

          <div className="crud__content__header crud__content__header__navigation ">
            <img src={arrowLeft} style={{ cursor: "pointer" }} />
            <p className="crud__content__info-header--num">1</p>
            <p className="crud__content__info-header--num">2</p>
            <p className="crud__content__info-header--num">3</p>
            <img src={arrowRight} style={{ cursor: "pointer" }} />
          </div>
        </div>

        {/* CRUD CONTENT LIST */}
        <div className="crud__content__list">
          {datalist.slice(0, 8).map((data, index) => (
            <CRUDcard
              key={index}
              id={index}
              provider={data.provider}
              type={data.type}
              fuelName={data.fuelName}
              price={data.price}
              dateCreated={data.dateCreated}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CRUDlist;
