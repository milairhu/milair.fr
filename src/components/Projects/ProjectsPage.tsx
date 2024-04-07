import React from 'react';
import ProjectCard from './ProjectCard';
import f1Image from './Pictures/f1.jpg'
import quantumImage from './Pictures/quantum.png'

const ProjectsPage = () => {

  const projectsList = [
    {
      title: 'F1 Championship Simulation',
      description: 'This is a project I led at school or on my own',
      link: 'https://github.com/milairhu/Formula1-championship-sim',
      image: f1Image,
      technos: ['Go', 'React', 'TailwindCSS']
    },
    {
      title: 'QuantUT',
      description: 'My own quantum framework to simulate quantum algorithms and quantum circuits',
      link: 'https://github.com/milairhu/quantut',
      image: quantumImage,
      technos: ['Go']
    },
    {
      title: 'Project 3',
      description: 'This is a project I led at school or on my own',
      link: 'https://www.google.com',
      image: f1Image,
      technos: ['Go', 'React', 'TailwindCSS']
    },
    
    {
      title: 'Project 2',
      description: 'This is a project I led at school or on my own',
      link: 'https://www.google.com',
      image: f1Image,
      technos: ['Go', 'React', 'TailwindCSS']
    },
    {
      title: 'Project 3',
      description: 'This is a project I led at school or on my own',
      link: 'https://www.google.com',
      image: f1Image,
      technos: ['Go', 'React', 'TailwindCSS']
    },
    
    {
      title: 'Project 2',
      description: 'This is a project I led at school or on my own',
      link: 'https://www.google.com',
      image: f1Image,
      technos: ['Go', 'React', 'TailwindCSS']
    },
    {
      title: 'Project 3',
      description: 'This is a project I led at school or on my own',
      link: 'https://www.google.com',
      image: f1Image,
      technos: ['Go', 'React', 'TailwindCSS']
    },
    
    {
      title: 'Project 2',
      description: 'This is a project I led at school or on my own',
      link: 'https://www.google.com',
      image: f1Image,
      technos: ['Go', 'React', 'TailwindCSS']
    },
    {
      title: 'Project 3',
      description: 'This is a project I led at school or on my own',
      link: 'https://www.google.com',
      image: f1Image,
      technos: ['Go', 'React', 'TailwindCSS']
    },
    
    {
      title: 'Project 2',
      description: 'This is a project I led at school or on my own',
      link: 'https://www.google.com',
      image: f1Image,
      technos: ['Go', 'React', 'TailwindCSS']
    },
    {
      title: 'Project 3',
      description: 'This is a project I led at school or on my own',
      link: 'https://www.google.com',
      image: f1Image,
      technos: ['Go', 'React', 'TailwindCSS']
    }]

    return (
      <div className='h-full w-full text-white space-y-11'>
        <div className='w-full space-y-8'>
          <h1 className=' text-6xl font-bold text-left'>Projects</h1>
          <h2 className='text-2xl font-semibold text-left'>Here is a list of projects I led at school or on my own.</h2>
        </div>
        <div className='w-full bg-slate-300 py-0.5'/> 
        <div className='flex flex-wrap justify-center items-start h-3/4 w-full overflow-auto'>
          {projectsList.map(project => (
            <div className='flex justify-center w-10/12 lg:w-1/2 h-1/2 mb-4'>
              <div className='w-5/6 h-full'>
                <ProjectCard title={project.title} description={project.description} link={project.link} image={project.image} technos={project.technos} />
              </div> 
            </div>
          ))}
        </div>
      </div>
    );
  }

export default ProjectsPage;