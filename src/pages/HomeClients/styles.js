import styled from "styled-components";

export const Container = styled.div`

  > h1 {
    font-size: 1.5rem;
    text-align: center;
    margin: 4.6rem 0 4rem;
  }
  
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
  padding: 1.5rem;

  > div + div {
    margin-top: 1rem;
  }

  > button {
    margin-top: 2.5rem;
  }
`;