import * as S from "./skills-styles"
import reactIcon from "../../../assets/react-icon.png"
import jsIcon from "../../../assets/js-icon.png"
import javaIcon from "../../../assets/java-icon.png"
import postgreSqlIcon from "../../../assets/postgreSQL-icon.png"
import mySqlIcon from "../../../assets/mysql-icon.png"
import gitIcon from "../../../assets/git-icon.png"
import dockerIcon from "../../../assets/docker-icon.png"
import dBeaverIcon from "../../../assets/dbeaver-icon.png"
import cssIcon from "../../../assets/css-icon.png"
import htmlIcon from "../../../assets/html-icon.png"
import slackIcon from "../../../assets/slack-icon.png"
import bitBucketIcon from "../../../assets/bitbucket-icon.png"
import postmanIcon from "../../../assets/postman-icon.png"
import trelloIcon from "../../../assets/trello-icon.png"
import notionIcon from "../../../assets/notion-icon.png"

export const SkillsComponent = props => {
  return (
    <S.Skills>
      <h2>Skills</h2>
      <hr />
      
      <div className="row">
        <div>
          <img src={reactIcon} alt="Icon React" />
          <h4>ReactJS</h4>
        </div>
        <div>
          <img src={jsIcon} alt="Icon Javascript" />
          <h4>Javascript</h4>
        </div>
        <div>
          <img src={javaIcon} alt="Icon Java" />
          <h4>Java</h4>
        </div>
        <div>
          <img src={postgreSqlIcon} alt="Icon PostgreSQL" />
          <h4>PostgreSQL</h4>
        </div>
        <div>
          <img src={mySqlIcon} alt="Icon MySQL" />
          <h4>MySQL</h4>
        </div>
        <div>
          <img src={gitIcon} alt="Icon Git" />
          <h4>Git</h4>
        </div>
        <div>
          <img src={dockerIcon} alt="Icon Docker" />
          <h4>Docker</h4>
        </div>
        <div>
          <img src={dBeaverIcon} alt="Icon Node" />
          <h4>DBeaver</h4>
        </div>
        <div>
          <img src={cssIcon} alt="Icon CSS" />
          <h4>CSS</h4>
        </div>
        <div>
          <img src={htmlIcon} alt="Icon HTML" />
          <h4>HTML</h4>
        </div>
        <div>
          <img src={slackIcon} alt="Icon Slack" />
          <h4>Slack</h4>
        </div>
        <div>
          <img src={bitBucketIcon} alt="Icon Bitbucket" />
          <h4>Bitbucket</h4>
        </div>
        <div>
          <img src={postmanIcon} alt="Icon Postman" />
          <h4>Postman</h4>
        </div>
        <div>
          <img src={trelloIcon} alt="Icon Trello" />
          <h4>Trello</h4>
        </div>
        <div>
          <img src={notionIcon} alt="Icon Notion" />
          <h4>Notion</h4>
        </div>
      </div>
    </S.Skills>
  );
}