import { Col, Row, Image, Divider } from "antd";
import { ownerName } from "../../components/util/constant";
import "./home.css";
import profilePic from "../../image/rakshithgowdakv.png";
import BadgeList from "../../components/BadgeList/badgeList";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { skillList } from "./homeType";

const Home = () => {
  const frontEndCore: skillList = ["HTML", "CSS", "JavaScript", "TypeScript"];
  const FrontEndlibrariesAndFrameworks: skillList = [
    "React.js",
    "Next.js",
    "Polymer.js",
    "jQuery",
    "Redux",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "Kendo UI",
    "Ant design",
  ];
  const FrontEndTestingLib: skillList = ["Jest", "React testing librabry"];
  const toolingBuildSystems: skillList = ["webpack", "nx", "lighthouse"];
  const backend: skillList = ["Node.js", "Express.js", "MongoDB", "SQL"];
  const languages: skillList = [
    "JavaScript",
    "TypeScript",
    "Java(Basic)",
    "Python(Basic)",
  ];

  return (
    <>
      <Row gutter={16} align="middle" justify="center">
        <Col xs={24} sm={12} md={8}>
          <Image
            alt="rakshithgowdakv"
            width="100%"
            height="auto"
            src={profilePic}
            id="profileId"
          />
        </Col>
        <Col xs={24} sm={12} md={16}>
          <div id="summary">
            <div>
              Hello! I'm <span id="ownerName">{ownerName}</span>, Senior
              Software Engineer with 5 years of expertise in full-stack
              development, specializing in React.js, Redux, and Java-based
              RESTful APIs. Proven ability to lead cross-functional teams,
              drive process improvements, and mentor junior engineers.
              Passionate about leveraging cutting-edge technologies to solve
              complex problems and deliver high-quality software solutions.
            </div>
            <div className="social-icons">
              <MailOutlined className="connectIcon" />
              <LinkedinOutlined className="connectIcon" />
              <GithubOutlined className="connectIcon" />
              <WhatsAppOutlined className="connectIcon" />
            </div>
          </div>
        </Col>
      </Row>
      <Divider />
      <div className="skills-section">
        <h2>Skills</h2>
        <h4 className="skill">Front-End</h4>
        <div className="skillList">
          <span>Core Technologies: </span>
          <BadgeList skills={frontEndCore} />
        </div>

        <div className="skillList">
          <span>Framework / Library: </span>
          <BadgeList skills={FrontEndlibrariesAndFrameworks} />
        </div>

        <div className="skillList">
          <span>Testing Library: </span>
          <BadgeList skills={FrontEndTestingLib} />
        </div>

        <div className="skillList">
          <span>Tooling & Build Systems: </span>
          <BadgeList skills={toolingBuildSystems} />
        </div>

        <div className="skillList">
          <h4 className="skill">Back-End</h4>
          <span>Back-End Development: </span>
          <BadgeList skills={backend} />
        </div>

        <div className="skillList">
          <h4 className="skill">Programming Languages</h4>
          <span>Languages: </span>
          <BadgeList skills={languages} />
        </div>
      </div>
    </>
  );
};

export default Home;
