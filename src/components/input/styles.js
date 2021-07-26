import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  input {
    height: 45px;
    width: 100%;
    background-color: #f8f9fa;
    padding-left: 40px;
    border-radius: 5px;
    font-size: 15px;
    border-width: 1px;
    border-color: ${(props) => (props.error ? "#e91e63" : "#E4E7EB")};

    &:focus {
      transition: ease all 0.3s;
      outline: none;
      box-shadow: 0px 0px 1px 0.5px #b3b3b373;
    }
  }

  label {
    font-weight: 500 !important ;
    font-size: 15px !important;
  }

  .containerLabel {
    margin-top: 20px;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .containerInput {
    flex-direction: row;
  }
  .icon {
    position: absolute;
    left: 10px;
    top: 64px;
  }
`;
