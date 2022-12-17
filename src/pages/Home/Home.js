import React from 'react'
import TopMenu from '../../components/topmenu/TopMenu';
import Slider from '../../components/slider/Slider';
import Banner from '../../components/banner/Banner';
import New_Ar from '../../components/contents/New_Ar';
import Deals from '../../components/contents/Deals';
import Best_Seller from '../../components/contents/Best_Seller';
import Benefits from '../../components/contents/Benefits';
import Blog from '../../components/contents/Blog';
import Sus from '../../components/contents/Sus';
const Home = () => {
  return (
    <div className ="Home">
        <TopMenu/>
        <Slider/>
        <Banner/>
        <New_Ar/>
        <Deals/>
        <Best_Seller/>
        <Benefits/>
        <Blog/>
        <Sus/>
      </div>	
  )
}

export default Home