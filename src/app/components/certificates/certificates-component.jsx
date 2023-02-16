import * as S from "./certificates-styles";
import javascript from "../../../assets/certificadoJavascript.png"
import html from "../../../assets/certificadoHtml.png"
import html2 from "../../../assets/certificadoHtml2.png"
import algoritmos from "../../../assets/certificadoAlgoritmos.png"

export const CertificatesComponent = props => {

  
  return (
    <S.Certificates id="certificates">
      <h2>Certificates</h2>
      <hr />

      <div className="carrossel">
        <div className="item">
          <img src={javascript} alt="Diploma Javascript" />
        </div>
        <div className="item">
          <img src={html} alt="Certificado " />
        </div>
        <div className="item">
          <img src={html2} alt="Third slide" />
        </div>
        <div className="item">
          <img src={algoritmos} alt="Third slide" />
        </div>
      </div>
    </S.Certificates>
  );
}