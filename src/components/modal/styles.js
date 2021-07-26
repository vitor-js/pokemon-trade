import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0000002e;
  box-shadow: 0px 0px 10px 5px #00000012;

  .modal-body {
    max-width: 650px;
    height: 700px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 5px #00000012;
    padding: 20px;
    overflow-x: auto;

    .modal-pokemons-selecteds {
      padding: 20px;
      background: rgb(229 229 229);
      border-radius: 5px;
      .card {
        .button-remove {
          margin-top: 10px;

          button {
            width: 100%;
            background: #c34b4bb3;
            color: #fff;
            border: none;
            padding: 3px;
            font-size: 15px;
            border-radius: 3px;
            transition: ease all 0.3s;

            &:hover {
              background: #ce5b5b;
            }
          }
        }
        img {
          height: 100px;
          width: 100px;
        }
        p {
          margin-bottom: 0px;
        }
      }
    }

    .button-container {
      margin-top: 40px;
      margin-bottom: 20px;
      display: flex;

      align-items: center;
      justify-content: space-between;

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
  }
`;
