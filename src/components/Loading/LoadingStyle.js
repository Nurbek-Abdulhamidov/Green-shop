import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:100vh ;
`;

export const LoadingSpinner = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 50px;
  height: 50px;
  border: 10px solid #46a358;
  border-top: 10px solid #fff; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`;
