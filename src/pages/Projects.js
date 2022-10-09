import React from 'react';
import Card from '../components/Card'
import GithubInfo from '../components/GithubInfo'


const Projects = () => {
  return ( 
    <>
    <div className='project-cards'>
      <Card details={GithubInfo}/>
    </div>
    </>
   );
}
 
export default Projects;