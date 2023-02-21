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
        display: none;
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
        padding: 1.3em;
        margin: 1rem auto 0 auto;
        width: 100%;
        background-color: ${themes.colors.background_light};
        border-radius: 10px;
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 1000px){      
          flex-direction: column;
          width: 70%;
          align-items: center;

          div.left-section{
            padding: 0 0 1rem 0 !important;
          }
          
          div.right-section{
            padding: 1rem 0 0 0 !important;
            
            ul{
              padding: 0;
              text-align: center;
            }
          }
        }

        @media screen and (max-width: 650px){      
          width: 90%;
        }

        div.left-section{
          display: flex;
          flex-direction: column;

          div.content{
            display: flex;

            img{
              margin: 0.3rem;
              height: 70px;
              width: 70px;
            }

            div{
              padding-left: 0.75em;
              display: flex;
              flex-direction: column;

              h5{
                font-size: 2rem;
                margin-bottom: 0.1rem;
              }
              p{
                font-size: 1rem;
                font-weight: lighter;
              }
            }
          }

          ul.tags{
            display: flex;
            padding: 0;
            margin: 0;

            li{
              font: normal 400 0.75rem 'Rowdies';
              margin: 0.3rem 0.2rem;
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

          span{
            font-weight: bold;
          }
        }

        div.right-section{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
          ul{
            padding: 0;
            margin: 0;
          }
        }
      }
    }
  }
`