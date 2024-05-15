import styled from "styled-components";

export const Container = styled.div`
  
  > div button {
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 8px;

    padding: 0.6rem;

    font-size: 0.8rem;
  }

  > div button:hover {
    background-color: ${({ theme }) => theme.COLORS.GOLD_300};
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  }
`;

export const Section = styled.section`
  
`;