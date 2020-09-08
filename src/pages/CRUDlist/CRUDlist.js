import React, { useState } from "react";
import CRUDtop from "./CRUDtop";
import arrowLeft from "./img/arrowLeft.svg";
import arrowRight from "./img/arrowRight.svg";
import CRUDcard from "./CRUDcard";
import { dataList } from "./datalist";

const CRUDlist = () => {
  const [datalist, setDatalist] = useState(dataList);

  return (
    <div className="crud">
      <CRUDtop />

      <div className="crud__list">
        {/* CRUD LIST HEADER */}
        <div className="crud__list--header">
          <div className="crud__list--header crud__list--header-left">
            <p className="header__title">Provider</p>
            <p className="header__title">Fuel Type</p>
            <p className="header__title">Fuel Name</p>
            <p className="header__title">Price</p>
            <p className="header__title">Date Created</p>
          </div>
          <div className="crud__list--header crud__list--header-right ">
            <img src={arrowLeft} style={{ cursor: "pointer" }} />

            <p>1</p>
            <p>2</p>
            <p>3</p>
            <img src={arrowRight} style={{ cursor: "pointer" }} />
          </div>
        </div>

        {/* CRUD LIST CONTENT*/}
        <div className="crud__list-content">
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
