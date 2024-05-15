import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_800};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1rem 4rem;

  font-size: 1rem;

  > .user {
    display: flex;
    align-items: center;
    gap: 1rem;

    text-align: end;

    span {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.COLORS.GOLD_300};
      font-weight: 500;

    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.8px;
    }
  }


  > div img {
    width: 3.8rem;
    height: 3.8rem;

    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.COLORS.WHITE};

    outline: 3px solid ${({ theme }) => theme.COLORS.GOLD_300};

    object-fit: cover;
    box-sizing: initial;

    display: none;
  }


  @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
    padding: 2rem 2rem 4rem;
    
    > div img {
      display: block;
    }
  }

  @media (min-width: ${ DEVICE_BREAKPOINTS.LG  }) {
    padding: 2rem 3rem 4rem;
    
  }

`;