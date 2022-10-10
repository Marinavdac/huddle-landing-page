import styled from 'styled-components';

export const StyledCard = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 0.938rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: ${({ layout }) => layout || 'row'};
  margin: 2.5rem 0;
  padding: 2.75rem;
  gap: 5rem;

  img {
    width: 60%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
