import React from 'react';
import CardsGrid from '../components/CardsGrid';
import './Projects.css';

// Importing Data 
import githubInfo from '../Data/githubInfo';

const Projects = () => {
  document.title = "Projects"
  
  return ( 
    <div className='projects'>
<div className="projects-header">
  <h1>These are some of the projects I have completed</h1>
</div>

      <CardsGrid cards={githubInfo} />
      </div>

   );
}
 
export default Projects;