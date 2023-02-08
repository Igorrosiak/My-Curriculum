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

        <Carousel variant="dark" className="w-50">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={javascript}
              alt="Diploma Javascript"
            />
            <Carousel.Caption>
              <h3>Certificado Javascript</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={html}
              alt="Certificado "
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={html2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={algoritmos}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </S.Certificates>
  );
}