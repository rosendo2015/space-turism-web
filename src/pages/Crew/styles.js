import styled from "styled-components";
import imgSky from "../../assets/sky-stars.jpg"
export const Container = styled.div`

.crew {
  margin: 0 auto;
  width: 380px;
  height: 100vh;
  height: 100vh;
}
header {
}

main {
  background-image: url(${imgSky});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top -100px;
  padding: 1.4rem;
}
.wrapperImg {
  border-bottom: 3px solid #383b4b;
}
.wrapperImg img {
  margin-bottom: -4px;
  width: 177.123px;
  height: 222px;
  flex-shrink: 0;
}
.wrapperCircle {
  margin: 32px 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  opacity: 0.174363;
}
.wrapperCircle svg:first-child {
  color: #fff;
}

h3 {
  color: #fff;
  text-align: center;
  font-family: Bellefair;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  opacity: 0.4951;
}
h1 {
  color: #fff;
  text-align: center;
  font-family: Bellefair;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}
p {
  color: #d0d6f9;
  text-align: center;
  font-family: Barlow;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
}
@media (min-width: 1050px){
  main{
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
    display: flex;
    justify-content: space-around;    
    padding: 0 165px;
    gap: 144px;
  }
  main .info{
    width: 500px;
  }
  main .info h1,
  main .info h3,
  main .info p{
    text-align: left;
  }
  main .info h1{
    color: #FFF;
    font-family: Bellefair;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
  main .info h3{
    color: #FFF;
    font-family: Bellefair;
    font-size: clamp(1rem, 2vw, 2rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    opacity: 0.5042;
  }
  main .info p{
    width: 444px;
    color: #D0D6F9;
    font-family: Barlow;
    font-size: clamp(0.5rem, 1.5vw, 1.125rem);
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 177.778% */
  }
  main .wrapperImg{
     width: 350px;
  }
  main .wrapperImg img{    
    width: clamp(300px, 4vw, 350px);
    min-width: 100%;

      height: 100%;
  }
 
}
` 
