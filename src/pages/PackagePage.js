import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Navbar from '../components/Navbar/Navbar';
import ImageBanner from '../components/ImageBanner/ImageBanner';
import PackageDescription from '../components/PackageDescription/PackageDescription';
import BookingCard from '../components/Card/BookingCard';

const pageStyle = {
  display: 'flex',
}

const responsiveStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const descriptionStyle = {
  width: '70%'
}

const responsiveDescriptionStyle = {
  width: '100%'
}

const PackagePage = (props) => {
  const matches = useMediaQuery('(min-width:600px)');
  const style = matches ? pageStyle : responsiveStyle
  const description = matches ? descriptionStyle : responsiveDescriptionStyle

  return (
    <div>
      <Navbar />

      <ImageBanner />
      <div style={style}>
        <div style={description}>
          <PackageDescription />
        </div>
        <div style={{ marginTop: '5%' }}>
          <BookingCard />
        </div>
      </div>
    </div>
  )
}

export default PackagePage;