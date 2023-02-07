import styled from "styled-components"
import { themes } from "../../../utils/theme"

export const Introduction = styled.div`
  background-color: ${themes.colors.background_strong};
  width: 83vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 17vh;

  @media screen and (max-width: 741px){      
    padding-top: 5vh;
  } 

  & > div {
    flex: 1 0 22.5%;
  }

  div.left-container{

    h2{
      font-size: 3rem;
      font-weight: bolder;

      strong{
        color: ${themes.colors.purple_light};
      }
    }

    hr{
      width: 30%;
      color: ${themes.colors.purple_very_light};
      border: 1.5px solid ${themes.colors.purple_very_light};
      margin: 0 0 4vh 10px;
    }

    p{
      font-weight: 600;
      font-size: 1.25rem;
      margin-bottom: 7vh;
    }

    button{
      background-color: ${themes.colors.purple_strong};
      border: none;
      width: 70%;
      height: 50px;
      font-size: 1.3rem;
      font-weight: bold;

      @media screen and (max-width: 1280px){      
        width: 80%;
      } 

      @media screen and (max-width: 800px){      
        width: 90%;
      } 

      @media screen and (max-width: 741px){      
        width: 60%;
      } 
    }
  }

  div.center-container{
    margin-top: auto;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 741px){      
      padding-top: 3vh;
    } 

    div.circle{

    }

    img{
      width: calc(450px + 16 * ((100vw - 280px) / (2560 - 280)))
    }
  }

  div.right-container{
    padding-bottom: 1em;
    
    div{
      h3{
        text-align: center;
        font-weight: bolder;
      }

      hr{
        color: ${themes.colors.purple_light};
        border: 1.75px solid ${themes.colors.purple_very_light};
      }

      p{
        text-align: center;
        font-weight: 600;
      }
    }

    @media screen and (max-width: 1280px){      
      margin-top: 2rem;
    } 
  }
`