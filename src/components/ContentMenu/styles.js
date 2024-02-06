import styled from "styled-components"
export const Ul = styled.ul`
padding: 1rem 167px 1rem 123px;
background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 50px;
  list-style: none;
  flex-flow: row nowrap;
  position: fixed;
  top: 0;
  right: 0;
  li{
    padding: 0;
  }
  
  li a{
    display: flex;
    align-items: center;
    gap: 0.6875rem;
    color: #fff;  
  }
  li a strong{
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.7px;
  }
  li a p{
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
}

&&::before{
  content:"";
  width: clamp(10%, 30vw, 20%);
  border: 1px solid #FFF;
  opacity: 0.2515;
  background: #FFF;
  position: absolute;
  right: 800px;
}

@media (max-width: 1050px){
  padding: 3.5rem 10rem 3rem 1.5rem;
  display: flex;
  justify-content: start;
  align-items: start;
  
  margin-top: 0;
  flex-flow: column nowrap;
  background-color: #0d2538;
  position: fixed;
  transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
  top: 0;
  right: 0;
  height: 100vh;
  width: 50px;
  gap: 15px;
  
  transition: transform 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  li{
    padding: 0 1rem;
  }
  &&::before{
    display: none;
  }
}
`