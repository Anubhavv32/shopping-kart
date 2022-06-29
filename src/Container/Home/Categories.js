import React, { useEffect } from "react";
import BasicCard from "./BasicCard";
import { connect } from "react-redux";

import { getCategoriesList } from "../../redux/action";

function Categories({ getCategoriesList, categoriesList }) {
  useEffect(() => {
    getCategoriesList();
  }, []);
  return (
    <div className="category-banner">
      {Array.isArray(categoriesList) && categoriesList.length
        ? categoriesList.map((category, index) => {
            return <BasicCard category={category} key={category.id} index={index}/>;
          })
        : null}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    categoriesList: state.categoriesList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesList: () => dispatch(getCategoriesList()),
  };
};
export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(Categories)
);
