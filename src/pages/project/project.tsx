import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import ModalPopUp from "../../components/modal/modalPopUp";
import projectData from "./project-data.json";
import "./projectStyle.css";

const Project = () => {
  return (
    <>
    <h1 className="pageTile">Projects</h1>
    <div className="project-container">
      <Row gutter={16} justify="center">
        {projectData.map((project) => (
          <Col xs={24} sm={12} md={8} lg={6} key={project.project}>
            <Card
              hoverable
              className="project-card"
              cover={
                <img
                  alt={project.imgSrc}
                  src={require("../../image/projectImage/" + project.imgSrc)}
                  className="project-image"
                />
              }
            >
              <Meta title={project.project} description={project.overview} />
              <br />
              <ModalPopUp
                title={project.project}
                description={project.description}
                link={project.link}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </>
    
  );
};

export default Project;
