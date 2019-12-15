import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Searchbar from '../components/Searchbar/Searchbar';
import MobileSearchbar from '../components/Searchbar/MobileSearchbar';
import PictureGrid from '../components/PictureGrid/PictureGrid';
import SiteDescription from '../components/SiteDescription/Sitedescription'


const HomePage = (props) => {
  const matches = useMediaQuery('(min-width:600px)');
  const searchbar = matches ? <Searchbar /> : <MobileSearchbar />
  return (
    <div>
      <Navbar />
      <Banner />
      {searchbar}
      <PictureGrid title="Africa" />
      <PictureGrid title="Europe" />
      <SiteDescription />
    </div>
  )
}

export default HomePage;