import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Project from "./project"
import {modalPopupProp} from "../../components/modal/modalPopUp"
interface MetaData {
    title : string,
    description : string
 }


jest.mock('../../image/projectImage/b2b.jpg', () => 'mocked-project1-image.png');
jest.mock('../../image/projectImage/bank.png', () => 'mocked-project2-image.png');
jest.mock('./project-data.json',()=>[
          {
            project: 'Project 1',
            imgSrc: 'b2b.jpg',
            overview: 'Overview of project 1',
            description: 'Detailed description of project 1',
          }
])

jest.mock('../../components/modal/modalPopUp', () => ({ title, description, link }:modalPopupProp) => (
    <div>
        <button role={`${title.replace(" ","").toLowerCase()}${"-readButton"}`}>
        Read more
      </button>
      {link && (
        <a href={link} target="_blank">
          link
        </a>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>More Info</a>
    </div>
  ));

  jest.mock('antd/es/card/Meta', () => ({ title, description } : MetaData ) => (
    <div>
      <h2 title={title}>{title}</h2>
      <p title={description}>{description}</p>
    </div>
  ));

  describe('Project Component', () => {

      test('renders the Projects page title', () => {
        render(<Project />);
        const titleElement = screen.getByText('Projects');
        expect(titleElement).toBeInTheDocument();
      });

      test('render project card with image, title, description and button', () => { 
        render(<Project/>);
        // title
        const project1Title = screen.getByTitle('Project 1');
        expect(project1Title).toBeInTheDocument();
        // descriptio
        const project1Des = screen.getByTitle('Overview of project 1');
        expect(project1Des).toBeInTheDocument();

        // image
        const project1CoverImage = screen.getByAltText('b2b.jpg');
        expect(project1CoverImage).toBeInTheDocument();
        expect(project1CoverImage).toHaveAttribute('src','mocked-project1-image.png')

        // read button should proesent
        const project1Button = screen.getByRole('project1-readButton')
        expect(project1Button).toBeInTheDocument();

        // link shouldn't present
        const project1link = screen.queryByText('project1');
        expect(project1link).not.toBeInTheDocument()
        
       })

  })