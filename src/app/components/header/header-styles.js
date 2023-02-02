import styled from "styled-components"
import { Navbar } from "react-bootstrap"
import { themes } from "../../../utils/theme"

export const Header = styled.header`
  background-color: ${themes.colors.background_strong};
`

export const NavbarStyled = styled(Navbar)`
  background-color: ${themes.colors.background_strong};
  color: ${themes.colors.light};

  div.container{
    a.navbar-brand{
      color: ${themes.colors.light};
      font-family: 'Rowdies', cursive;
      font-size: 2rem;

      strong{
        color: ${themes.colors.purple_light};
        font-family: 'Rowdies', cursive;
      }
    }

    button.navbar-toggler{
      border-color: ${themes.colors.light};
    }

    div.navbar-collapse{
      div.me-auto{
        margin-left: auto;
        margin-right: 0 !important;

        a{
          color: ${themes.colors.light} !important;
          font-weight: normal;
          font-size: 1rem;
        }
      }
    }
  }
`