import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  height: 100vh;
  padding: 3rem;

  > div h1 {
    margin-top: 7rem;
    text-align: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 3rem 8rem;
  }

  @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
    display: flex;

    padding: 0;

   
    > div {
      background-color: ${({ theme }) => theme.COLORS.GRAY_800};
      height: 100%;

      width: 60%;

      h1 {
        margin-top: 23rem;
      }
    }
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin-top: 6rem;

  > h2 {
    margin-bottom: 2rem;
  }

  > a {
    margin-top: 2rem;
    font-size: 0.8rem;
  }

  > a:hover {
    color: ${({ theme }) => theme.COLORS.GOLD_300}
  }

  @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
   margin: 0 auto;

   padding: 15rem 3rem;
  }

  @media (min-width: ${ DEVICE_BREAKPOINTS.XL }) {
    min-width: 30rem;
  }

`;