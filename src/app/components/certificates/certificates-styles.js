import styled from "styled-components"
import { themes } from "../../../utils/theme"

export const Certificates = styled.div`
  background-color: ${themes.colors.background_strong};
  width: 100vw;
  height: 80vh;
  padding: 5vh;
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

  div{
    margin: auto;
    padding-top: 1rem;
  }
  div.carousel-caption{
    h3{
      color: black !important;
    }
    p{
      color: black !important;
    }
  }
`