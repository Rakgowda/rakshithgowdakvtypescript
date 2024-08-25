import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import ModalPopUp from "../../components/modal/modalPopUp";
import projectData from "./projectData.json";
import "./projectStyle.css";
const Project = () => {
  return (
    <div>
      <Row>
        {projectData.map((project) => (
          <Col span={6}>
            <Card
              hoverable
              className="project-card"
              cover={
                <img
                alt={project.imgSrc}
                  src={require("../../image/projectImage/" + project.imgSrc)}
                />
              }
            >
              <Meta title={project.project} description={project.overview} />
              <br></br>
              <ModalPopUp
                title={project.project}
                description={project.description}
                link={project.link}
              ></ModalPopUp>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Project;
