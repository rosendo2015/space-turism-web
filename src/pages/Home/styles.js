import styled from "styled-components"
import imgMobile from "../../assets/nasaQ1p7bh3SHj8unsplash.jpg"
import imgDesktop from "../../assets/background-home-desktop.jpg"

export const Container = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position:  center 250px;
  background-image: url(${imgMobile});
  
  body {
  text-align: center;  
  max-width: 100%;
  max-height: 100vh;  
}
.app { 
  margin: 0 auto;
  min-width: 380px;
  padding: 0 0 3rem;
  
}

.main {
  padding: 0 5rem;   
}
.main h1 {
  color: #fff;
  
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
}
.description{
  margin: 0 auto;
  max-width: 380px;
}
.description span {
  color: #d0d6f9;
  font-family: Barlow;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  
}
.button {
  margin-top: 81px;
  width: 150px;
  height: 150px;
  padding: 64px 27.5px 59px 29.5px;
  border-radius: 50%;
  border: none;
  color: #0b0d17;
  
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.25px;
  cursor: pointer;
}

@media (min-width: 1050px) {
background-size: cover;
  background-position: top center;
  background-image: url(${imgDesktop});
  .bodyApp{
    
   
    
  }
  
  
  .app {    
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    margin-top: 251px;
    position: relative;
  }
  
  .main{
    max-width: 444px;    
    text-align: center;
    width: 100%;
    
  }
  .main p{
    font-size: 28px;
  }
  .main h1{
    margin: 1.5rem 0;
    font-size: 150px;
  }
  .description span{
    color: #D0D6F9;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 177.778% */
    text-align: justify;
  }
  .button{
    width: 274px;
    height: 274px;
    font-size: 32px;
  }
  .app::after{
    display: none;
    border: 1px solid red;
  }
}

`