import * as S from "./about-me-styles";
import airplane from "../../../assets/airplane.png"
import basketball from "../../../assets/basketball-ball.png"
import certificado from "../../../assets/certificado.png"
import endereco from "../../../assets/endereco.png"
import habilidades from "../../../assets/habilidades.png"
import inteligencia from "../../../assets/inteligencia.png"
import work from "../../../assets/work.png"
import tecnologia from "../../../assets/tecnologia.png"

export const AboutMeComponent = props => {
  return (
    <S.AboutMe id="aboutMe">
      <h2>About-Me</h2>
      <hr />

      <div className="row">
        <div>
          <img src={endereco} alt="Icon React" />
          <p>Sou nascido e fui criado em Florianópolis-SC, onde resido até os dias atuais.</p>
        </div>
        <div>
          <img src={basketball} alt="Icon React" />
          <p>Sou apaixonado por esportes desde muito novo, sendo o Basketball minha maior preferência.</p>
        </div>
        <div>
          <img src={tecnologia} alt="Icon React" />
          <p>Aos 12 anos tive meu primeiro contato com tecnologia, o que me trouxe até aqui.</p>
        </div>
        <div>
          <img src={work} alt="Icon React" />
          <p>Comecei a trabalhar aos 14 anos de idade, graças a isso obtive muita experiência em lidar com pessoas.</p>
        </div>
        <div>
          <img src={inteligencia} alt="Icon React" />
          <p>Aos 15 anos comecei a estudar Análise e Desenvolvimento de Sistemas no SENAI.</p>
        </div>
        <div>
          <img src={certificado} alt="Icon React" />
          <p>Além do curso técnico no Senai, tenho outros diversos certificados (veja abaixo).</p>
        </div>
        <div>
          <img src={habilidades} alt="Icon React" />
          <p>Sou uma pessoa muito proativa e um pouco ansiosa.</p>
        </div>
        <div>
          <img src={airplane} alt="Icon React" />
          <p>Tenho conhecimento nas linguagens estrangeiras Inglês e Espanhol.</p>
        </div>
      </div>
    </S.AboutMe>
  );
}