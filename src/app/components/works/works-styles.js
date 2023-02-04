import styled from "styled-components"
import { themes } from "../../../utils/theme"

export const Works = styled.div`
  width: 100vw;
  min-height: 65vh;
  background-color: ${themes.colors.background_strong};
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

  div.box{
    width: 100%;
    display: flex;
    padding-top: 5vh;

    div.img{
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      
      img{
        width: 40px;
        height: 40px;  
      }

      img.left-image{
        rotate: 180deg;
      }
    }

    div.works{
      width: 80%;

      div.work{
        margin-top: 1rem;
        width: 100%;
        background-color: ${themes.colors.background_light};
        border-radius: 10px;
        display: flex;
        justify-content: space-between;

        div.left-section{
          display: flex;
          flex-direction: column;
          padding-left: 1.5em;

          div.content{
            padding-top: 1em;
            display: flex;

            img{
              margin: 0.3rem;
              width: 100px;
              background-color: purple;
            }

            div{
              padding-left: 1em;
              display: flex;
              flex-direction: column;
              h5{
                font-size: 2rem;
              }
              p{
                font-size: 1rem;
              }
            }
          }

          ul.tags{
            display: flex;
            padding: 0;

            li{
              margin: 0.3rem;
              padding: 0.2rem 0.75rem;
              border: 1px solid ${themes.colors.gray};
              border-radius: 10px;
            } 
          }
        }

        div.center-section{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        div.right-section{
          padding-right: 1.5em;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`