import styled from "styled-components";

const Button = styled.button`
 background-color: ${({bg}) => bg || 'fff'}; 
 border-radius: 3.125rem;
 border: none;
 box-shadow: 0 0 0.625rem rgba(0,0,0,0.15);
 color: ${({color}) => color || '#333'};
 cursor: pointer;
 font-size: 1rem;
 font-weight: 700;
 padding: 0.938rem 3.75rem;

 &:hover {
  opacity: 0.9;
  transform: scale(0.98);
}
`
export default Button;
