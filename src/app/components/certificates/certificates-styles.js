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

  div.carrossel{
    min-height: 600px;
    position: relative;
    padding-top: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .active{
      z-index: 1;
    }
    
    div.item{
      position: absolute;
      width: ;

      @media screen and (max-width: 1750px){   
        width: 65%;
        height: 90%;
      }

      @media screen and (max-width: 1250px){   
        width: 65%;
        height: 90%;
      }

      @media screen and (max-width: 1250px){   
        width: 65%;
        height: 90%;
      }

      @media screen and (max-width: 1250px){   
        width: 65%;
        height: 90%;
      } 

      @media screen and (max-width: 1000px){      
        width: 70%;
        height: 80%;
      }

      @media screen and (max-width: 850px){      
        height: 80%;
      }

      @media screen and (max-width: 700px){      
      }
      
      img{
        width: 100%;
        height: 85%;
      }
    }
  }
`