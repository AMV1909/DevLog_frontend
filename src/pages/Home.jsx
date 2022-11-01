import React from 'react'
import {Navbar} from '../componentes/Navbar'
import {Carousel} from '../componentes/Carousel'
import {Cards} from '../componentes/Cards'

 export const Home = () => {
  return (
    <div>
      
        <Navbar/>
        <Carousel/>

        <div className='divHome'>

        <Cards/>
        </div>
        
      
    </div>
  );
};

export default Home;
