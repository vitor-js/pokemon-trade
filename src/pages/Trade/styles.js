import styled from "styled-components";

export const Container = styled.div`
  .container-team {
    width: 100%;

    margin-top: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    .team {
      width: 100%;
      min-height: 450px;
      margin: 20px;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0px 0px 10px 5px #00000012;
      cursor: pointer;
    }
    .blue {
      background: rgb(75 156 195 / 57%);
    }
    .red {
      background: #c34b4b87;
    }

    button {
      background-color: rgb(255 99 25);
      padding: 10px 25px;
      border-radius: 5px;
      border: none;
      color: #fff;

      &:disabled {
        background-color: #ff631987;
      }
    }
  }
`;
