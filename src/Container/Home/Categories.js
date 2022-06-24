import React, {useEffect} from "react";
import BasicCard from "./BasicCard";
import { connect } from 'react-redux';

import { getCategoriesList } from '../../redux/action';

function Categories({getCategoriesList, categoriesList}) {
  useEffect(() => {
    getCategoriesList();
  }, []);
  console.log(categoriesList);
  return (
    <div>
    { Array.isArray(categoriesList) && categoriesList.length ?
    categoriesList.map(category => {
      return (
        <div key={category.id} style={{height: "400px"}}>
          <BasicCard category={category} />
        </div>
      )
    })
    :null}
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    categoriesList: state.categoriesList
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesList: () => dispatch(getCategoriesList()),
  };
};
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Categories));
