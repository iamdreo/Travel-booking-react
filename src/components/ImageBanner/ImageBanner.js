import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Test from '../../assets/test.jpg';

//page styles
const bannerContainer = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto'
}

const imageSize = {
  width: 510,
  height: 400
}

const responsiveImageSize = {
  width: 120,
  height: 180
}

/**
 * 
 * @param {ImageBanner} props - handles image banner styling for details page
 * @returns images that will display when app is set up, image content should be dynamic and come from database
 */

const ImageBanner = (props) => {
  const matches = useMediaQuery('(min-width:600px)');
  const style = matches ? imageSize : responsiveImageSize
  return (
    <div style={bannerContainer} >
      <img src={Test} alt="package banner" style={style} />
      <img src={Test} alt="package banner" style={style} />
      <img src={Test} alt="package banner" style={style} />
    </div>
  )
}

export default ImageBanner;