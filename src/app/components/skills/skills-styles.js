import styled from "styled-components"
import { themes } from "../../../utils/theme"

export const Skills = styled.div`
  width: 100vw;
  min-height: 80vh;
  background-color: ${themes.colors.background_light};
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
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 2.5rem 20px 0 20px;
    
    div{
      background-color: ${themes.colors.background_strong};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-width: 200px;
      height: 200px;
      border-radius: 16px;
      
      img{
        width: calc(50px + 16 * ((100vw - 280px) / (2560 - 280)));
        padding-bottom: 1rem;
      }
    }

    @media screen and (max-width: 1280px) {
      & {
        grid-template-columns: repeat(4, 1fr);
      }
    }
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