import React from "react";
import { BadgeListProps } from "./badgeListType";
import { Badge } from "antd";
import "./badgelist.css";
const BadgeList: React.FC<BadgeListProps> = ({ skills }) => {
  return (
    <>
      {skills.map((skill, i) => (
        <Badge key={i} count={skill} className="badge" color="var(--primary)" />
      ))}
    </>
  );
};

export default BadgeList;
