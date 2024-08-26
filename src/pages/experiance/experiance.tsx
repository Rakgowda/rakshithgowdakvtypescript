import { Badge, Card, Col, Divider, Row, Space } from "antd";
import "./experiance.css";
import React from "react";
import jobExperience from "./job-data.json";

const Experiance = () => {
  const actions = (technologies: string[]): React.ReactNode[] => {
    return technologies.map((tech, i) => (
      <Badge key={i} count={tech} className="badge" color="var(--primary)" />
    ));
  };

  const getExperience = (
    from: string,
    to: string
  ): { years: number; months: number } => {
    const [fromMonth, fromYear] = from.split("/").map(Number);
    const [toMonth, toYear] = to !== "present" ? to.split("/").map(Number) : [];
    const startDate = new Date(fromYear, fromMonth - 1);
    const endDate =
      to === "present" ? new Date() : new Date(toYear, toMonth - 1);
    let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    totalMonths += endDate.getMonth() - startDate.getMonth();

    // Calculate years and months
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return { years, months };
  };
  return (
    <>
      <h1 className="pageTile">Work Experience</h1>
      <Row gutter={16} align="middle" justify="center">
        <Col xs={24} sm={20} md={16} lg={8} className="experience-col">
          <Space direction="vertical" size={16} style={{ width: "100%" }}>
            {jobExperience.map((job) => (
              <Card className="card flex-center" title={job.title}>
                <div className="flex-center">
                  <div>
                    <b>Role : </b>
                    <span>{job.subTitle}</span>
                  </div>
                  <div>
                    <b>Experience : </b>
                    <span>{`${
                      getExperience(job.from, job.to).years
                    } years and ${
                      getExperience(job.from, job.to).months
                    } months`}</span>
                  </div>
                  <div>
                    <b>From : </b>
                    <span>{job.from}</span>
                  </div>
                  <div>
                    <b>To : </b>
                    <span>{job.to}</span>
                  </div>
                </div>
                <Divider></Divider>
                {actions(job.technologies)}
              </Card>
            ))}
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Experiance;
