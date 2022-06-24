import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../Home/Header";
import "./product.css";
import { getCategoriesList, getProductsList } from "../../redux/action";
import Logo from '../../images/logo.png';
export const Products = ({ getCategoriesList, categoriesList, getProductsList, productsList }) => {
  useEffect(() => {
    if (!categoriesList.length) getCategoriesList();
    getProductsList();
  }, []);
  console.log(productsList);
  return (
    <div className="conteainer">
      <Header />
      <div className="row product">
        <div className="col-3 sidebar px-0">
          <div className="category">All Products</div>
          {categoriesList.length
            ? categoriesList.map((category) => {
                console.log(category);
                return <div className="category">{category.name}</div>;
              })
            : null}
        </div>
        <div className="col-9">
          <div className="row">
            {
              productsList.length ?
              productsList.map(product => {
                console.table(product);
                return (
            <div className="col-sm-4">
            <div className="card">
            <img src={require(`../../${product.imageUrl}`)} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to
                  additional content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>)
              })
              :null
            }
            <div className="col-sm-4">
              <div className="card">
              <img src={Logo} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
              <img src={Logo} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categoriesList: state.categoriesList,
    productsList: state.productsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesList: () => dispatch(getCategoriesList()),
    getProductsList: () => dispatch(getProductsList()),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
