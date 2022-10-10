import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color:#ebfbff;
  padding: 2.5rem 0;
  
  &:hover {
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
align-items: center;
display:flex;
justify-content: space-between;
margin-bottom: 2.5rem;

@media(max-width: ${({ theme }) => theme.mobile}) {
  flex-direction: column;
}
`

export const Logo = styled.img`
@media(max-width: ${({ theme }) => theme.mobile}) {
  margin-bottom: 2.5rem;
`

export const Image = styled.img`
width: 23.438rem;
margin-left: 2.5rem;

@media(max-width: ${({ theme }) => theme.mobile}) {
  margin: 2.5rem 0 1.875rem;
`