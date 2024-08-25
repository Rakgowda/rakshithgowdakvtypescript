import { Badge, Card, Col, Row, Space } from "antd";
import "./experiance.css";
import React from "react";
import jobExperience from "./job-data.json";

const Experiance = () => {
  const actions = (technologies: string[]): React.ReactNode[] => {
    return technologies.map((tech, i) => (
      <Badge key={i} count={tech} className="badge" color="var(--primary)" />
    ));
  };

  return (
    <>
      <Row gutter={16} align="middle" justify="center">
        <Col xs={24} sm={20} md={16}>
          <Space direction="vertical" size={16} style={{ width: "100%" }}>
            {jobExperience.map((job) => (
              <Card
                actions={actions(job.technologies)}
                className="card"
                title={job.title}
                extra={
                  <div className="card-extra">
                    <div className="card-sub-title">{job.subTitle}</div>
                    <div className="card-sub-title-from">
                      {job.from} - {job.to}
                    </div>
                  </div>
                }
              >
                {job.achievement.map((achievement, i) => (
                  <Badge key={i} color="var(--primary)" text={achievement} />
                ))}
              </Card>
            ))}
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Experiance;
