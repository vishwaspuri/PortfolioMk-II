import React from "react";

import HomePhoto from "./HomePhoto";
import Introduction from "./Introduction";
import Skills from "./Skills";

import './home.css';


function Home() {
    return <>
        <HomePhoto/>
        <Introduction/><br/>
        <Skills/>
    </>;
}


export default Home;
