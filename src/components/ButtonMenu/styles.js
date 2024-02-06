import styled from "styled-components";
export const Container = styled.div`

position: fixed;
top: 35px;
right: 20px;

z-index: 4;
>svg{
  cursor: pointer;
}
@media (min-width: 1050px){
  display: none;
}
`