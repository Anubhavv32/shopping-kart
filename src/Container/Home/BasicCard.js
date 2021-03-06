import { Link } from "react-router-dom";
import React from "react";

export default function BasicCard({ category, index }) {
  if (category) {
    return (
      <div
        className="card mb-3"
        key={category.id}
        //  style={{backgroundImage: `url(${img})`,
        // backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}
      >
        <div className="card-body">
          <div
            className="row w-100"
            style={
              index % 2
                ? { flexDirection: "row-reverse" }
                : { flexDirection: "unset" }
            }
          >
            <div className="col-4 col-sm-6 ">
              <img src={require(`../../${category.imageUrl}`).default} alt="" />
            </div>
            <div
              className="col-8 col-sm-6 text-center"
              style={{ alignSelf: "center" }}
            >
              <h5>{category.name}</h5>
              <p>{category.description}</p>
              <Link to="/products">
                <button className="btn btn-kart">Shop Online</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
