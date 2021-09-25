import React from 'react'
import styled from 'styled-components';
import TopHeader from './TopHeader';
// import GithubCenter from './GithubCenter/GithubCenter';
import CenterBuild from './GithubCenter/CenterBuild';
import TopBottom from './TopBottom';
import FooterTop from "./Footer/FooterTop";




const GithubApp = () => {
    return (
        <container>
           <TopHeader />
           <TopBottom />
           <CenterBuild />
           <FooterTop />
        </container>
    )
}
// https://desktop.github.com/images/star-bg.svg

export default GithubApp


const container = styled.div``;