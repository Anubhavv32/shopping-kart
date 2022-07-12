import React, { useEffect } from 'react'
import Slider from "react-slick";
import { connect } from 'react-redux';

import { fetchList } from '../../redux/action';

function Banner({bannersList, getBannersList}) {
  useEffect(() => {
    getBannersList();
  }, []);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };
  return (
    <div>
      <Slider {...settings}>
        {Array.isArray(bannersList) && bannersList.length ? bannersList.map( banner => {
          return (
          <div key={banner.id}>
            <img src={require(`../../${banner.bannerImageUrl}`).default} alt={banner.bannerImageAlt} />
          </div>
        )}) : null}
        </Slider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    bannersList: state.bannersList
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBannersList: () => dispatch(fetchList('bannersJSON', 'GET_BANNERS_LIST')),
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Banner));