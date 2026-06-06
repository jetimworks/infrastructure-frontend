import { createContext, useContext, useState, useEffect } from 'react';
import { projects, STORAGE_KEY } from './projectConstants';

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [selectedProject, setSelectedProject] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && projects.includes(stored) ? stored : 'Jetimworks';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, selectedProject);
  }, [selectedProject]);

  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject, projects }}>
      {children}
    </ProjectContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}