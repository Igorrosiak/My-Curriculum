import * as S from "./footer-styles";
import github from "../../../assets/github-sign.png"
import linkedin from "../../../assets/linkedin.png"
import instagram from "../../../assets/instagram.png"
import email from "../../../assets/email.png"

export const FooterComponent = props => {
  return (
    <S.Footer id="contact">
      <h2>Contact</h2>
      <hr />

      <div className="network">
        <div onClick={() => {window.open("https://github.com/igorrosiak", "_blank")}}>
          <div>
            <img src={github} alt="" />
          </div>
          <p>github.com/Igorrosiak</p>
        </div>
        <div onClick={() => {window.open("https://www.linkedin.com/in/igor-rosiak/", "_blank")}}>
          <div>
            <img src={linkedin} alt="" />
          </div>
          <p>linkedin.com/in/igor-rosiak/</p>
        </div>
        <div onClick={() => {window.open("https://www.instagram.com/igor.rosiak/", "_blank")}}>
          <div>
            <img src={instagram} alt="" />
          </div>
          <p>@igor.rosiak</p>
        </div>
        <div onClick={() => {window.open("mailto:igorluizbelterrosiak@gmail.com", "_blank")}}>
          <div>
            <img src={email} alt="" />
          </div>
          <p>igorluizbelterrosiak@gmail.com</p>
        </div>
      </div>
    </S.Footer>
  );
}