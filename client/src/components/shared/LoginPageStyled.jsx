import React from "react";
import styled from "styled-components";

const LoginPageStyled = styled.div`
  height: 100vh;
  > .formContainerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  > .formContainerContainer > .formContainer {
    /* height: 70vh; */
    /* width: 50rem; */
    margin-top: 5rem;

    border: 1px solid #333;
    padding: 0 8rem;
    background-color: var(--white);
    opacity: 0.9;
    border-radius: 10px;
  }
  > .formContainerContainer > .formContainer > .wholeForm {
  }
  > .formContainerContainer > .formContainer > .wholeForm > .labelInputDiv {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  > .formContainerContainer > .formContainer > .wholeForm > .topLabel {
    padding-top: 3rem;
  }
  > .formContainerContainer
    > .formContainer
    > .wholeForm
    > .labelInputDiv
    > input {
    width: 13rem;
    padding: 0.7rem;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  > .formContainerContainer
    > .formContainer
    > .wholeForm
    > .labelInputDiv
    > label {
    color: var(--black);
    font-size: 1.2rem;
    font-weight: 700;
  }
  > .formContainerContainer > .formContainer > .accountSwitchBtn {
    margin-bottom: 2rem;
    background: none;
    border: none;
    font-size: 1rem;
  }
  /* > .formContainerContainer
    > .formContainer
    > .wholeForm
    > .labelInputDiv
    > input
    &:focus {
    border: 5px solid var(--blue);
  } */
`;

export { LoginPageStyled };
