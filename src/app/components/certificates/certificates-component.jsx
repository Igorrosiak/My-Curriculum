import { Carousel } from "react-bootstrap";
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

      <Carousel slide={false} variant="dark" className="w-50">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={javascript}
            alt="Diploma Javascript"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={html}
            alt="Certificado "
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={html2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={algoritmos}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </S.Certificates>
  );
}