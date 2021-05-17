import React from 'react';
import MainLayout from '../Component/MainLayout';
import HomeComponent from '../Component/HomeComponent';
import AboutComponent from'../Component/AboutComponent';
import  ResumeComponent from '../Component/ResumeComponent';
const Home=()=>{

    return (
        <MainLayout>
         <HomeComponent/>
         <AboutComponent/>
         < ResumeComponent/>
        </MainLayout>
        

    )
}
export default Home;