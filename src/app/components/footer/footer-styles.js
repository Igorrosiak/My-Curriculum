import styled from "styled-components"
import { themes } from "../../../utils/theme"

export const Footer = styled.main`
  width: 100vw;
  min-height: 30vh;
  background-color: ${themes.colors.background_light};
  padding: 2vw;
  margin: auto;
  align-items: center;

  h2{
    text-align: center;
    font-size: 2rem;
  }

  hr{
    width: 10%;
    color: ${themes.colors.purple_very_light};
    border: 1.5px solid ${themes.colors.purple_very_light};
    margin: auto;
  }

  div.network{
    padding-top: 5vh;
    display: grid;
    margin: auto;
    width: 80%;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 150px;
      width: 100%;
      min-width: 200px;
      background-color: #333333;
      border-radius: 15px;
      cursor: pointer;
      
      div{
        height: 75%;
      }

      p{
        background-color: ${themes.colors.purple_strong};
        height: 25%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        border-end-end-radius: 15px;
        font-size: 0.8rem;
      }
    }

    @media screen and (max-width: 1250px) {
      & {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media screen and (max-width: 600px) {
      & {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`