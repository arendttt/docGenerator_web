import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.GOLD_300};

  border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  border-radius: 8px;

  font-weight: 700;
  font-size: 1rem;

`;