// home.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./home";
import {BadgeListProps} from "../../components/BadgeList/badgeListType"

jest.mock('../../image/rakshithgowdakv.png', () => 'mocked-profile-pic.png');

// Mocking the image and BadgeList component
jest.mock('../../components/BadgeList/badgeList', () => ({ skills } : BadgeListProps) => (
  <div>{skills.join(', ')}</div>
));

describe("Home Component", () => {
  test("renders profile image with correct alt text", () => {
    render(<Home />);
    const profileImage = screen.getByAltText("rakshithgowdakv");
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', 'mocked-profile-pic.png');
  });

  test("renders social media icons with correct links", () => {
    render(<Home />);
    const mailLink = screen.getByRole("link", {
      name : "Gmail",
    });
    expect(mailLink).toHaveAttribute(
      "href",
      "mailto:rakshithgowdakv@gmail.com"
    );

    const linkedInLink = screen.getByRole("link", {
      name : "LinkedIn",
    });
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rakshithgowda-kv/"
    );

    const gitHubLink = screen.getByRole("link", {
      name : "GitHub",
    });
    expect(gitHubLink).toHaveAttribute(
      "href",
      "https://github.com/Rakgowda"
    );

    const whatsappLink = screen.getByRole("link", {
      name : "Whatsapp",
    });
    expect(whatsappLink).toHaveAttribute(
      "href",
      "https://wa.me/7026906475"
    );
  });

  test("renders skills section properly", () => {
    render(<Home />);
    // Checking Front-End skills
    expect(screen.getByText('Front-End')).toBeInTheDocument();
    expect(screen.getByText('Core Technologies:')).toBeInTheDocument();
    expect(screen.getByText('HTML, CSS, JavaScript, TypeScript')).toBeInTheDocument();
    
    expect(screen.getByText('Framework / Library:')).toBeInTheDocument();
    expect(screen.getByText('React.js, Next.js, Polymer.js, jQuery, Redux, Bootstrap, Tailwind CSS, Material UI, Kendo UI, Ant design')).toBeInTheDocument();
    
    expect(screen.getByText('Testing Library:')).toBeInTheDocument();
    expect(screen.getByText('Jest, React testing librabry')).toBeInTheDocument();

    expect(screen.getByText('Tooling & Build Systems:')).toBeInTheDocument();
    expect(screen.getByText('webpack, nx, lighthouse')).toBeInTheDocument();

    // Checking Back-End and Languages
    expect(screen.getByText('Back-End')).toBeInTheDocument();
    expect(screen.getByText('Back-End Development:')).toBeInTheDocument();
    expect(screen.getByText('Node.js, Express.js, MongoDB, SQL')).toBeInTheDocument();

    expect(screen.getByText('Programming Languages')).toBeInTheDocument();
    expect(screen.getByText('JavaScript, TypeScript, Java(Basic), Python(Basic)')).toBeInTheDocument();
  });
});
