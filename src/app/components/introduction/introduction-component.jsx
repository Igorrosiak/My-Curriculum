import "./introduction-styles"
import * as S from "./introduction-styles";

export const IntroductionComponent = props => {
  return (
    <S.Introduction>
      <div className="left-container">
        <h2>Igor <br /> Rosiak<strong>.</strong></h2>
        <hr />
        <p>17 anos, Estudante</p>
        <button>Contact Me</button>
      </div>

      <div className="center-container">
        <div className="circle">

        </div>
        <img src="#" alt="Imagem de Igor Rosiak" />
      </div>

      <div className="right-container">
        <div>
          <h3>Desenvolvedor FullStack</h3>
          <hr />
          <p>ReactJS | Java | Javascript</p>
        </div>
        <div className="mt-5">
          <h3>Sobre Mim</h3>
          <hr />
          <p>Apaixonado por tecnologia, aspirante em estar entre os melhores e ser referência.</p>
        </div>
      </div>
    </S.Introduction>
  );
}