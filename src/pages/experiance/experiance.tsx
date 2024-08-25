import { Badge, Card, Col, Flex, Row, Space } from "antd";
import "./experiance.css";
import React from "react";
import jobExperience from "./Jobdata.json";
const Experiance = () => {
  const actions: (technologies: string[]) => React.ReactNode[] = (
    technologies: string[]
  ) => {
    let actions: React.ReactNode[] = [];
    technologies.forEach((tech: string, i: number) => {
      actions.push(
        <Badge key={i} count={tech} className="badge" color="var(--primary)" />
      );
    });
    return actions;
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <Flex align="start" justify="center">
            <Space direction="vertical" size={16}>
              {jobExperience.map((job) => (
                <Card
                  actions={actions(job.technologies)}
                  className="card"
                  title={job.title}
                  extra={
                    <>
                      <div className="card-sub-title">{job.subTitle}</div>
                      <div className="card-sub-title-from">
                        {job.from} - {job.to}
                      </div>
                    </>
                  }
                >
                  {job.achievement.map((achievement) => (
                    <Badge color="var(--primary)" text={achievement} />
                  ))}
                </Card>
              ))}
            </Space>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default Experiance;
