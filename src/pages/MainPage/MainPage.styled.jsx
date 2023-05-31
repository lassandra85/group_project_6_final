import styled from "styled-components";

import mobile1t2x  from '../../image/main_img/1mobile2x.png'
import tablet1t2x  from '../../image/main_img/1tablet2x.png'
import desktop1t2x from '../../image/main_img/1desktop2x.png'
import mobile2t2x  from '../../image/main_img/2mobile2x.png'
import tablet2t2x  from '../../image/main_img/2tablet2x.png'
import desktop2t2x from '../../image/main_img/2desktop2x.png'
import mobile3t2x  from '../../image/main_img/3mobile2x.png'
import tablet3t2x  from '../../image/main_img/3tablet2x.png'
import desktop3t2x from '../../image/main_img/3desktop2x.png'

export const MainContainer  = styled.div`
  display: flex;
    flex-direction: column;
    width:100%;
    min-height: 100vh;
    @media(min-width: 1280px){
        flex-direction: row; 
    }
`;

export const MainTitle = styled.h1`
     max-width: 280px;
    height: 88px;
    margin-top: 32px;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.38;
    color:var(--text-color-primary);
    @media(min-width: 768px){
        max-width: 588px;
        height: 200px;
        margin-top: 80px;
        font-size: 68px;
        line-height: 1.47;
    }
    @media(min-width: 1280px){
        max-width: 501px;
        height: 264px;
        margin-top:175px;
        line-height: 1.3;  
    }
`;

export const ImageContainer = styled.div`
      position: relative;
    overflow: visible;
    margin-top: 30px;
    margin-left: -20px;
    width: 320px;
    height: 390px;
    @media(min-width: 768px){
        height: 820px;
        width: 768px;
        margin-top: 20px;
        margin-left: -30px;
    }
    @media(min-width: 1280px){
        right: 0;
        width: 917px;
        height: 570px;
        top: 180px;
    }
`;

export const ImageOne = styled.img`
   display: block;
    position:absolute;
    width: 183px;
    height: auto;
    left: -60px;
    bottom: 55px;
    content: url(${mobile1t2x});

    @media(min-width: 768px){
        width:380px;
        bottom: 112px;
        left: -45px;
        content:url(${tablet1t2x});
    }
    @media(min-width: 1280px){
        width: 380px;
        bottom: -25px;
        left: -140px;
        content: url(${desktop1t2x});
    }
`;

export const ImageTwo = styled.img`
   position: absolute;
    width: 235px;
    height: auto;
    right: -45px;
    bottom: 131px;
    content: url(${mobile2t2x});

    @media(min-width: 768px){
        bottom: 280px;
        width: 490px;
        right: -74px;
        content: url(${tablet2t2x});
    
    }    
    @media(min-width: 1280px){
        bottom: 130px;
        right:30px;
        width: 490px;
        content: url(${desktop2t2x});
    }
`;

export const ImageThree = styled.img`
    position: absolute;
    width: 165px;
    height: auto;
    bottom: -5px;
    right: 1px;
    content: url(${mobile3t2x});

    @media(min-width: 768px){
        bottom: 12px;
        right: 12px;
        width: 332px;
        content: url(${tablet3t2x});
    }
    @media(min-width: 1280px){
        bottom: -140px;
        right: 112px;
        width: 336px;
        content: url(${desktop3t2x});  
    }
`;
