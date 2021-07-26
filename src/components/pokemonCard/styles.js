import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  background: rgb(0 0 0 / 10%);
  margin-top: 20px;
  border-radius: 5px;
  transition: ease all 0.2s;
  padding: 10px;
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: 0px 0px 10px 5px #0000000a;
    margin-left: 5px;
    cursor: pointer;
  }

  p {
    margin: 0px;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .pokemon-info {
    margin-left: 20px;
  }
`;
