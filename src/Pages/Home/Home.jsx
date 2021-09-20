import React from 'react';
import './Home.scss';

//Components
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserChannel from '../../Components/UserChannel/UserChannel';
import Recommendations from '../../Components/Recommendations/Recommendations';
import FoodAndDrink from '../../Components/FoodAndDrink/FoodAndDrink';

function Home(){

    

    return <> 
    <nav className="home__navbar">
        <Navbar />
    </nav>

    <main className="home__main">
        <Sidebar />  
        <div className="main__center-wrapper">
            <UserChannel />
            <Recommendations />
            <FoodAndDrink />
        </div>
    </main>
    
    </>
}

export default Home;