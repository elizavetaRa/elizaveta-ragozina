import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState(projectsData);
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');


// Select projects by project category
const selectProjectsByCategory = projects.filter((item) => {
	// Ensure selectProject is capitalized correctly
	let selectCategory =
		selectProject.charAt(0).toUpperCase() + selectProject.slice(1);

	// If category is an array, check if selectCategory is in the array
	if (Array.isArray(item.category)) {
		return item.category.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).includes(selectCategory);
	}

	// If category is a string, check if it matches selectCategory
	let category =
		item.category.charAt(0).toUpperCase() + item.category.slice(1);
	return category.includes(selectCategory);
});


	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				searchProject,
				setSearchProject,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
