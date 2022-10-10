import styled from "styled-components";

const Flex = styled.div`
  align-items: center;
  display: flex;

  & > div,
  & > ul {
    flex: 1;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
  flex-direction: column;
  text-align: center;
`

export default Flex;