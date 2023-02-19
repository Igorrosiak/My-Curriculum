import * as S from "./certificates-styles";
import { Carousel } from "react-bootstrap";
import javascript from "../../../assets/certificadoJavascript.png"
import html from "../../../assets/certificadoHtml.png"
import html2 from "../../../assets/certificadoHtml2.png"
import algoritmos from "../../../assets/certificadoAlgoritmos.png"

export const CertificatesComponent = props => {

  
  return (
    <S.Certificates id="certificates">
      <h2>Certificates</h2>
      <hr />

      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={javascript}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={html}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={html2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={algoritmos}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </S.Certificates>
  );
}