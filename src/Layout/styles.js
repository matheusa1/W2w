import styled from "styled-components";

export const LayoutFixHeight = styled.div`
  /* height: 50vh;
  background:white; */
`;
export const Separator = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1px;
  background: #272176;
  margin: 0.5rem 0;
`;

export const Logo = styled.h2`
  font-family: 'Margarine', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: #FFF;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  text-align: center;
  padding-top: 1rem;
`;