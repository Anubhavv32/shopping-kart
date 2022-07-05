import React, { useEffect } from "react";
import { connect } from "react-redux";

import BasicCard from "./BasicCard";
import { fetchList } from "../../redux/action";

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
    getCategoriesList: () => dispatch(fetchList('categoriesJSON', 'GET_CATEGORIES_LIST')),
  };
};
export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(Categories)
);
