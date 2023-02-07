import styled from "styled-components"
import { themes } from "../../../utils/theme"

export const AboutMe = styled.div`
  background-color: ${themes.colors.background_light};
  width: 100vw;
  min-height: 80vh;
  padding: 5vw;
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

  div.row{
    height: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 3.5rem 20px 0 20px;
    
    div{
      background-color: transparent;
      border: 1px solid ${themes.colors.light};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      min-width: 200px;
      height: 225px;
      border-radius: 16px;
      
      img{
        width: calc(30px + 16 * ((100vw - 280px) / (2560 - 280)));
        padding-top: 2.5rem;
        padding-bottom: 1rem;
      }

      p{
        text-align: center;
        padding-bottom: 1.5rem;
        width: 90%;
      }
    }

    /* @media screen and (max-width: 1280px) {
      & {
        grid-template-columns: repeat(4, 1fr);
      }
    } */
    @media screen and (max-width: 1024px) {
      & {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media screen and (max-width: 768px) {
      & {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media screen and (max-width: 480px) {
      & {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`