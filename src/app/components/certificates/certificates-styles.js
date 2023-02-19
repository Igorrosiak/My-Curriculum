import styled from "styled-components"
import { themes } from "../../../utils/theme"

export const Certificates = styled.div`
  background-color: ${themes.colors.background_strong};
  width: 100vw;
  min-height: 40vh;
  max-height: 100vh;
  padding: 5vh 0;
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

  div.carousel{
    padding-top: 3vh;

    div{
      img{
        margin: auto;
      
        @media screen and (max-width: 650px){      
          width: 60% !important;
        }

        @media screen and (max-width: 500px){      
          width: 70% !important;
        }
      }
    }
  }  
`