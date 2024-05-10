import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  padding: 0 1rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  border-radius: 8px;

  > input {
    height: 3.2rem;

    padding: 1rem 0.8rem;

    background: transparent;
    border: none;

    font-size: 1rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > svg {
    font-size: 1.2rem;
  }
`;