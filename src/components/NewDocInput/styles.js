import styled from "styled-components";

export const Container = styled.div`
  > div {
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_800};
    border-radius: 8px;
    height: 4rem;

    display: flex;
    align-items: center;
    padding-left: 1rem;

    line-height: 1.5rem;

    input {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
    }

    label {
      display: flex;
      align-items: center;

      background: none;
    }
  }

  > div label .radio {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.GOLD_300};
    display: block;
    margin-right: 1rem;
  }

  > div input[type="radio"]:checked + label .radio {
    background: ${({ theme }) => theme.COLORS.GOLD_300};
  }
`;