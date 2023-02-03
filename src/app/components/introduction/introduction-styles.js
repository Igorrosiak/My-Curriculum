import styled from "styled-components"
import { themes } from "../../../utils/theme"

export const Introduction = styled.div `
  background-color: ${themes.colors.background_strong};
  width: 83vw;
  height: 90vh;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 13vh;

  div.left-container{
    width: 33%;

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
      width: 50%;
      height: 50px;
      font-size: 1.3rem;
      font-weight: bold;
    }
  }

  div.center-container{
    width: 33%;

    div.circle{

    }

    img{

    }
  }

  div.right-container{
    width: 33%;

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
  }
`