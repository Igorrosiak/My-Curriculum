import * as S from "./works-styles";
import seta from "../../../assets/seta.png"
import logoDibba from "../../../assets/logo-dibba.png"
import logoWint from "../../../assets/logo-wint.png"

export const WorksComponent = props => {
  return (
    <S.Works id="works">
      <h2>Works</h2>
      <hr />

      <div className="box">
        <div className="img">
          <img src={seta} className="left-image" alt="" />
        </div>
        <div className="works">
          <div className="work">
            <div className="left-section">
              <div className="content">
                <img src={logoDibba} alt="Logo Dibba" />
                <div>
                  <h5>Dibba</h5>
                  <p>Florianópolis, SC</p>
                </div>
              </div>
              <ul className="tags">
                <li>React</li>
                <li>Javascript</li>
              </ul>
            </div>
            <div className="center-section">
              <span>2022</span>
              <span>-</span>
              <span>Atualmente</span>
            </div>
            <div className="right-section">
              <ul>
                <li>- Desenvolvimento Web</li>
                <li>- Infra</li>
                <li>- Comunicação com time técnico</li>
              </ul>
            </div>
          </div>
          <div className="work">
            <div className="left-section">
              <div className="content">
                <img src={logoWint} alt="Logo Dibba" />
                <div>
                  <h5>Wint</h5>
                  <p>Florianópolis, SC</p>
                </div>
              </div>
              <ul className="tags">
                <li>React</li>
                <li>Java</li>
                <li>Javascript</li>
              </ul>
            </div>
            <div className="center-section">
              <span>2022</span>
              <span>-</span>
              <span>2022</span>
            </div>
            <div className="right-section">
              <ul>
                <li>- Liderança</li>
                <li>- Desenvolvimento Fullstack</li>
                <li>- Comunicação com equipe escolar</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={seta} alt="" />
        </div>
      </div>
    </S.Works>
  );
}