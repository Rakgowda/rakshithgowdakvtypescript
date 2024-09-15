// Experiance.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Experiance from "./experiance";

jest.mock("./job-data.json", () => [
  {
    title: "Infosys",
    subTitle: "Software Engineer",
    from: "08/2019",
    to: "10/2021",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    title: "Infosys(Internship)",
    subTitle: "MERN developer (Internship)",
    from: "01/2019",
    to: "06/2019",
    technologies: [
      "nx"
    ],
  },
]);

describe("Experiance Component", () => {
  test("renders correctly", () => {
    render(<Experiance />);

    // Check page title
    expect(screen.getByText("Work Experience")).toBeInTheDocument();

    // Check if job titles are rendered
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("MERN developer (Internship)")).toBeInTheDocument();

    // Check if experience durations are rendered
    expect(screen.getByText("2 years and 2 months")).toBeInTheDocument();
    expect(screen.getByText("0 years and 5 months")).toBeInTheDocument();

    // Check if technologies are rendered
    expect(screen.getByText("HTML")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
    expect(screen.getByText("JS")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
    expect(screen.getByText("nx")).toBeInTheDocument();
  });
});
