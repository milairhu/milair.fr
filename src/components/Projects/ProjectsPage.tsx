import React from 'react';
import ProjectCard from './ProjectCard';
import f1Image from './Pictures/f1.png'
import quantumImage from './Pictures/quantum.png'
import chatImage from './Pictures/chat.png'
import keyImage from './Pictures/key.png'
import brainImage from './Pictures/brain.png'
import internetImage from './Pictures/internet.png'
import sudokuImage from './Pictures/sudoku.png'
import footballImage from './Pictures/football.png'
import trophyImage from './Pictures/trophy.png'

const ProjectsPage = () => {

  const projectsList = [
    
    {
      title: 'QuantUT',
      description: 'My own quantum framework to simulate quantum algorithms and quantum circuits. Phylosophically based on the Qiskit and Cirq framework and aims to use the best of Go language.',
      link: 'https://github.com/milairhu/quantut',
      image: quantumImage,
      technos: ['Go']
    },
    {
      title: 'F1 Championship Simulation',
      description: 'Multi-agents system simulating Formula 1 races (based on real circuits) and championships to determine the best profile of a driver for winning titles.',
      link: 'https://github.com/milairhu/Formula1-championship-sim',
      image: f1Image,
      technos: ['Go', 'Rest API', 'React', 'TailwindCSS']
    },
    {
      title: 'WebSocketChat',
      description: 'A chat application using WebSockets and CRUD. Backend and admin interface are coded with Spring Boot. User interface is coded with React.',
      link: 'https://github.com/milairhu/WebSocketChat',
      image: chatImage,
      technos: ['Java', 'Spring Boot', 'React', 'Bootstrap']
    },
    
    {
      title: 'Passager',
      description: 'A password manager using Fernet for encryption and decryption. A master password, not stored in files, is required to access the other encrypted passwords.',
      link: 'https://github.com/milairhu/passager',
      image: keyImage,
      technos: ['Python', 'Tkinter']
    },
    {
      title: 'SAToku',
      description: 'Modelising a sudoku problem into a SAT problem. A Sudoku solver using the SAT solver Gophersat. An interface is used for the user to input the Sudoku grid and to vizualise clearly the solution.',
      link: 'https://github.com/milairhu/SAToku',
      image: sudokuImage,
      technos: ['Python', 'SAT', 'Tkinter']

    },
    {
      title: 'Sport Results Notifier',
      description: 'A script that uses an API to check periodically the results of a selected sport game sends audio notification for major events.',
      link: 'https://github.com/milairhu/sport-result-notifier',
      image: trophyImage,
      technos: ['Python', 'API']
    },
    {
      title: 'Helltaker Solver',
      description: 'Several Solvers for the game Helltaker. Functionnal solvers use A* algorithm or ASP representation.',
      link: 'https://github.com/milairhu/helltaker_solver',
      image: brainImage,
      technos: ['Python', 'ASP']
    },
    {
      title: 'Football Expert System',
      description: 'An expert system that gives tactical advice to a football coach based on the current game state.',
      link: 'https://github.com/milairhu/football-se',
      image: footballImage,
      technos: ['Lisp']
    },
    {
      title: 'milairhu.github.io',
      description: 'My portfolio, a React application using TailwindCSS for styling. It is hosted on GitHub Pages.',
      link: 'https://github.com/milairhu/milairhu.github.io',
      image: internetImage,
      technos: ['React', 'TailwindCSS']
    }
  ]

  
    return (
      <div className='h-full w-full text-white space-y-7'>
        <div className='w-full space-y-5'>
          <h1 className='text-4xl md:text-6xl font-bold text-left'>Projects</h1>
          <h2 className='text-xl md:text-2xl  font-semibold text-left'>Here is a list of projects I led at school or on my own.</h2>
        </div>
        <div className='w-full bg-slate-300 pt-0.5'/> 
        <div className='flex flex-wrap justify-center items-start h-3/4 w-full overflow-auto'>
          {projectsList.map(project => (
            <div className='flex justify-center w-10/12 lg:w-1/2 lg:h-2/3 xl:h-3/5 2xl:h-1/2 mb-10'>
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
