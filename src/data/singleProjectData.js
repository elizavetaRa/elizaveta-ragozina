// Import images
import Steuero from '../images/steuero.png'
import HundeZauber from '../images/hundezauber-website.png';
import Cernbox from '../images/cernbox/cernbox-framed.png';
import IADashboard from '../images/ia-dashboard.png';
import IAWebsite from '../images/ia-website.png';
import IADemonstrator from '../images/ia-demonstrator.png';
import BleibLokal from '../images/bleiblokal-app.png';
import Kunstform from '../images/kunstform-wissenschaft.png';
import ParityWeb from '../images/parity-website.png';
import Vatten from '../images/vattenfall-dashboard.png';
import Geekly from '../images/Geekly.png';
import Harvester from '../images/harverster.png';
import Whatext from '../images/whattext.png';
import Graphs from '../images/graphs.png';
import Skd from '../images/skd.png';

export const singleProjectData = {
	0: {
		ProjectHeader: {
			title: 'Steuero: Tax Consulting Workflows App',
			publishDate: '2024 (in progress)',
			tags: 'Web Application / UI/UX Design',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Steuero App Workflow',
				img: Steuero,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Trier Steuerberatung',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Tax Consulting & Workflow Management',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://www.trier-steuerberatung.de',
				},
			],
			Website: 'https://www.trier-steuerberatung.de',
			ObjectivesHeading: 'Objective',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'TypeScript',
						'React',
						'Java Spring Boot',
						'Postgres',
						'Figma',
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details:
						'The project aims to manage workflows, display task statuses, assign employees, and connect data to DATEV for essential links within the app.',
				},
				{
					id: 1,
					details:
						'The primary challenge is to create a seamless integration with DATEV, ensuring data consistency and security while efficiently managing client workflows.',
				},
			],
			ProjectRoleHeading: 'My Role as Lead Developer',
			ProjectRole: [
				{
					id: 1,
					details:
						'Requirements Analysis: Conducted a thorough requirements analysis to understand the client’s needs and project goals. Engaged with stakeholders to gather detailed requirements, ensuring clarity on project objectives. Documented and validated these requirements, ensuring they aligned with business goals and were technically feasible.',
				},
				{
					id: 2,
					details:
						'Management: Developed a comprehensive project plan outlining key milestones and deliverables, establishing a detailed project roadmap to track progress.',
				},
				{
					id: 3,
					details:
						'Cost Estimations: Performed detailed cost estimations for project resources, including personnel, software, and hardware. Created and managed the project budget, ensuring efficient resource allocation and cost control. Monitored and managed expenses to ensure adherence to the budget and financial goals.',
				},
				{
					id: 4,
					details:
						'Design Architecture: Designed the overall architecture of the application, ensuring scalability, reliability, and performance. Defined the technical stack, including frontend, backend, deployment technologies, databases, and third-party integrations. Created architectural diagrams and documentation to guide development efforts.',
				},
				{
					id: 5,
					details:
						'Team Building and Management: Identified skill gaps and hired two additional developers to complement the project team. Provided mentorship and guidance to the development team, fostering a collaborative and productive work environment.',
				},
				{
					id: 6,
					details:
						'Design: Using Figma, provided mockups and refined them through cooperation and user studies with the employees of Trier Steuerberatung.',
				},
				{
					id: 7,
					details:
						'Development: Contributed to the development of both the frontend and backend of the application.',
				},
			],
		},
	},

	1: {
		ProjectHeader: {
			title: "Hundezauber: Online Shop for Dogs' Equipment",
			publishDate: '2024 (in progress)',
			tags: 'E-commerce / Web Development',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Hundezauber Online Shop',
				img: HundeZauber,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Hundezauber GmbH',
				},
				{
					id: 2,
					title: 'Services',
					details: 'E-commerce / Pet Products',
				},
				{
					id: 3,
					title: 'Contact',
					details: 'Svetlana Warkus',
				},
				{
					id: 4,
					title: 'Telephone Number',
					details: '+49 17639618154',
				},
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'TypeScript',
						'React',
						'Python Flask',
						'Postgres',
						'Figma',
						'AWS',
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details:
						'The project is an online shop for a private client, specializing in pet products. The shop offers a wide range of products, including food, toys, and accessories.',
				},
				{
					id: 1,
					details:
						'The main challenge is to develop a user-friendly and secure e-commerce platform that ensures a seamless shopping experience for customers and easy administration for the client.',
				},
			],
			ProjectRoleHeading: 'My Role as Sole Developer and Project Manager',
			ProjectRole: [
				{
					id: 1,
					details:
						'Requirements Analysis: Conducted thorough requirements analysis to understand the client’s needs and project goals.',
				},
				{
					id: 2,
					details:
						'Management: Developed a comprehensive project plan outlining key milestones and deliverables, and established a detailed project roadmap to track progress.',
				},
				{
					id: 3,
					details:
						'Cost Estimations: Performed detailed cost estimations for project resources, including software and hardware. Created and managed the project budget, ensuring efficient resource allocation and cost control. Monitored and managed expenses to ensure adherence to the budget and financial goals.',
				},
				{
					id: 4,
					details:
						'Design Architecture: Designed the overall architecture of the application, ensuring scalability, reliability, and performance according to the client’s needs. Defined the technical stack, including frontend and backend technologies, databases, and third-party integrations. Created architectural diagrams and documentation to guide development efforts.',
				},
				{
					id: 5,
					details:
						'Development: Solely responsible for developing both the frontend and backend of the application.',
				},
				{
					id: 6,
					details:
						'Design: Using Figma, created detailed mockups and prototypes for the online shop. Conducted user studies to refine the design and ensure a user-friendly interface.',
				},
			],
		},
	},

	2: {
		ProjectHeader: {
			title: 'CERNBox: Cloud-Based Storage and Data Management',
			publishDate: 'February 2021 - January 2024',
			tags: 'Cloud Storage / Web Development',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'CERNBox Project Overview',
				img: Cernbox,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'CERN',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://cern.ch',
				},
				{
					id: 4,
					title: 'Project Website',
					details: 'https://cernbox.cern.ch',
				},
			],
			Website: 'https://cern.ch',
			ObjectivesHeading: 'Objective',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Vue.js',
						'TypeScript',
						'Playwright',
						'Golang',
						'Puppet',
						'ServiceNow',
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details:
						'CERNBox is a cloud-based service by CERN for storing, sharing, and synchronizing data across various devices and users, serving over 37,000 users and managing vast amounts of data.',
				},
			],
			ProjectRoleHeading: 'My Role as a Co-Developer and UI/UX Designer',
			ProjectRole: [
				{
					id: 1,
					details:
						'Design and Development: I was co-responsible for both the design and development of the CERNBox user interface using Vue.js and TypeScript.',
				},
				{
					id: 2,
					details:
						'Collaboration: Worked closely with CERNBox and ownCloud developers to integrate new features and ensure seamless communication between the frontend and backend systems.',
				},
				{
					id: 3,
					details:
						'Automation: Implemented automated testing using Playwright to ensure the reliability and performance of the application.',
				},
				{
					id: 4,
					details:
						'Documentation: Maintained comprehensive documentation for both the development process and user guidelines.',
				},
			],
		},
	},


	3: {
		ProjectHeader: {
			title: 'Dashboard for Industrial Plants',
			publishDate: '2020',
			tags: 'IoT / Predictive Maintenance / Web Development',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'IADashboard',
				img: IADashboard,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Industrial Analytics',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://www.linkedin.com/company/industrial-analytics-berlin',
				},
			],
			Website: 'https://industrial-analytics.io',
			ObjectivesHeading: 'Objective',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'TypeScript',
						'ClojureScript',
						'InfluxDB',
						'AWS',
						'Adobe XD'
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'The Industrial Analytics AI-IoT service features anomaly detection using first principle models together with machine learning to assess machine health and maintenance conditions. The AI-assisted event management and specialized dashboard provide actionable insights and recommendations.',
				},
			],
			ProjectRoleHeading: 'My Role as a Web Developer and UI/UX Designer',
			ProjectRole: [
				{
					id: 1,
					details: 'Requirements Engineering: Conducted a thorough analysis to understand the client’s needs and project objectives.',
				},
				{
					id: 2,
					details: 'UI/UX Design: Developed an Adobe XD prototype based on the gathered requirements.',
				},
				{
					id: 3,
					details: 'Development: Set up a React application for the dashboard and implemented the underlying design system.',
				},
			],
		},
	},

	4: {
		ProjectHeader: {
			title: 'Business Dashboards for Vattenfall',
			publishDate: '2019-2020',
			tags: 'Data Visualization / Data Warehouse',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Example Vattenfall Dashboard',
				img: Vatten,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Vattenfall',
				},
				{
					id: 2,
					title: 'Website',
					details: 'https://www.vattenfall.de',
				},
			],
			Website: 'https://www.vattenfall.de',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Microsoft Power BI',
						'SVG',
						'ETL',
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'Provided services in creating dashboards using Power BI for Vattenfall, enabling effective data visualization and data management.',
				},
			],
			ProjectRoleHeading: 'My Role as a Developer and UI/UX Designer',
			ProjectRole: [
				{
					id: 1,
					details: 'Requirements Engineering: Defined the requirements for various dashboards by participating in weekly meetings with Vattenfall representatives.',
				},
				{
					id: 2,
					details: 'UI/UX Design: Developed high-level SVG images of various plants for use in the dashboards.',
				},
				{
					id: 3,
					details: 'Development: Connected the necessary data (such as plant states and statistics) to create comprehensive, high-level dashboards in Power BI.',
				},
			],
		},
	},

	5: {
		ProjectHeader: {
			title: 'Demonstrator for Industrial Plants',
			publishDate: '2019-2020',
			tags: 'Web Application / UI/UX Design',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'IA Demonstrator',
				img: IADemonstrator,
			},
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'TypeScript',
						'React',
						'Node.js',
						'Postgres',
						'WebRTC',
						'Socket.io'
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'Development of an Industrial Analytics Demonstrator for potential clients, showcasing various features and capabilities.',
				},
			],
			ProjectRoleHeading: 'My Role as a Developer and UI/UX Designer',
			ProjectRole: [
				{
					id: 0,
					details: 'Code Migration: Migrated the application from JavaServer Pages to React.',
				},
				{
					id: 1,
					details: 'Requirements Engineering: Defined requirements for various demonstration features.',
				},
				{
					id: 2,
					details: 'UI/UX Design: Improved the existing design and developed a design system with reusable components.',
				},
				{
					id: 3,
					details: 'Development: In addition to migrating the codebase, developed features such as an editor for creating machine schemas, text and audio chat, and a gamified version for learning purposes.',
				},
			],
		},
	},


	6: {
		ProjectHeader: {
			title: 'Industrial Analytics Home Website',
			publishDate: '2019-2020',
			tags: 'Web Application / UI/UX Design',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'IA Website',
				img: IAWebsite,
			},
		],
		ProjectInfo: {
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'TypeScript',
						'React',
						'WordPress'
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'Developed the landing webpage for Industrial Analytics, showcasing their services and expertise.',
				},
			],
			ProjectRoleHeading: 'My Role as a Developer and UI/UX Designer',
			ProjectRole: [
				{
					id: 2,
					details: 'UI/UX Design: Created the design concept and developed the design system.',
				},
				{
					id: 3,
					details: 'Development: Developed React components and organized pages and sections of the website.',
				},
			],
		},
	},

	7: {
		ProjectHeader: {
			title: 'Kunstform Wissenschaft Website',
			publishDate: '2020',
			tags: 'Web Application / UI/UX Design',
			role: 'Sole Developer',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kunstform Wissenschaft Website',
				img: Kunstform,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Humboldt University of Berlin',
				},
				{
					id: 3,
					title: 'Project Website',
					details: 'https://kunstform-wissenschaft.org',
				},
			],
			Website: 'https://kunstform-wissenschaft.org/',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'TypeScript',
						'React',
						'WordPress',
						'Figma',
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'Developed a website for presenting and managing exhibitions for the artist society at Humboldt University of Berlin.',
				},
			],
			ProjectRoleHeading: 'My Role as Sole Web Developer and UI/UX Designer',
			ProjectRole: [
				{
					id: 2,
					details: 'UI/UX Design: Developed the concept according to the given requirements and created the visual design.',
				},
				{
					id: 3,
					details: 'Development: Created React components and organized pages and sections of the website using WordPress.',
				},
				{
					id: 4,
					details: 'Deployment and Maintenance: Managed the deployment and ongoing maintenance of the website.',
				},
			],
		},
	},

	8: {
		ProjectHeader: {
			title: 'Bleib Lokal: Lockdown Pickup App',
			publishDate: '2020',
			tags: 'Web Application / UI/UX Design',
			role: 'Sole Developer',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Bleib Lokal App',
				img: BleibLokal,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 3,
					title: 'Website',
					details: 'https://www.instagram.com/bleib_lokal',
				},
			],
			Website: 'https://www.instagram.com/bleib_lokal',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'TypeScript',
						'React',
						'Node.js',
						'Figma',
						'Postgres',
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'Developed during the #WirVsVirus hackathon and selected as one of the top 10 solutions, this app aimed to connect local shops with customers during the COVID-19 lockdown. It registered 12 local businesses and over 500 customers before being shut down due to changes in lockdown regulations.',
				},
			],
			ProjectRoleHeading: 'My Role as a Co-Developer and UI/UX Designer',
			ProjectRole: [
				{
					id: 2,
					details: 'UI/UX Design: Developed the concept and visual design based on the provided requirements.',
				},
				{
					id: 3,
					details: 'Development: Built the React interface and implemented authentication using the Passport.js library for Node.js.',
				},
			],
		},
	},


	9: {
		ProjectHeader: {
			title: 'Accessible SKD: A Mobile Museum App',
			publishDate: '2020',
			tags: 'Mobile Application / UI/UX Design',
			role: "Sole Developer"
		},
		ProjectImages: [
			{
				id: 1,
				title: 'SKD App Interface',
				img: Skd,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Staatliche Kunstsammlungen Dresden',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://www.skd.museum',
				},
				{
					id: 4,
					title: 'Project Website',
					details: 'https://guide-barrierefrei.skd.museum (version 2024)'
				}
			],
			Website: 'https://guide-barrierefrei.skd.museum',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Java',
						'Adobe XD',
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'Developed a mobile guide for the Dresden Gallery, specifically designed for persons with disabilities, including the visually impaired, blind, and deaf, as well as those with cognitive limitations.',
				},
			],
			ProjectRoleHeading: 'My Role as a Web Developer and UI/UX Designer (student developer position at TU Dresden)',
			ProjectRole: [
				{
					id: 2,
					details: 'UI/UX Design: Developed the initial concept according to the given requirements and created the visual design.',
				},
				{
					id: 3,
					details: 'Development: Created an Android prototype using Java.',
				},
			],
		},
	},

	10: {
		ProjectHeader: {
			title: 'Parity: Multiplayer Desktop Game',
			publishDate: '2020',
			tags: 'Desktop Application / UI/UX Design',
			role: "Co-Developer"
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Parity Game',
				img: ParityWeb,
			},
		],
		ProjectInfo: {
			CompanyInfo: [
				{
					id: 3,
					title: 'Project Website',
					details: 'https://www.parity-game.com',
				},
			],
			Website: 'https://www.parity-game.com',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'C#',
						'Unity',
						'Adobe Illustrator'
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'Developed a 2D multiplayer Ball Arcade game initially implemented for the GameJam hackathon. The game is available for download on Steam.',
				},
			],
			ProjectRoleHeading: 'My Role as a Co-Developer',
			ProjectRole: [
				{
					id: 1,
					details: 'UI/UX Design: Co-developed the game design elements.',
				},
				{
					id: 2,
					details: 'Development: Co-developed the app and solely developed the webpage.',
				},
			],
		},
	},

	11: {
		ProjectHeader: {
			title: 'E-shop for Geeks: Prototype for EPAM',
			publishDate: '2019',
			tags: 'Web Application / UI/UX Design',
			role: "Sole Developer"
		},
		ProjectImages: [
			{
				id: 1,
				title: 'E-shop Interface',
				img: Geekly,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'EPAM',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://www.epam.com',
				},
			],
			Website: 'https://www.epam.com',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Java',
						'React',
						'Oracle DB',
						'Microservices',
						'Selenium'
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'Developed a classical e-commerce prototype solution with a seller backend, used for a real shop offering products for geeks.',
				},
			],
			ProjectRoleHeading: 'My Role as Sole Web Developer and UI/UX Designer (internship)',
			ProjectRole: [
				{
					id: 2,
					details: 'UI/UX Design: Developed the initial concept according to the given requirements and created the visual design.',
				},
				{
					id: 2,
					details: 'System Design: Developed the system design according to the given requirements.',
				},
				{
					id: 3,
					details: 'Development: Implemented the frontend using React, the backend using Java Spring Boot, and the database with Oracle, populated with example data. In addition set up the Selenium test environment.',
				},
			],
		},
	},

	12: {
		ProjectHeader: {
			title: 'Microsoft Hololens WHATText: Text Recognition',
			publishDate: '2018',
			tags: 'Desktop Application / UI/UX Design',
			role: "Co-Developer"
		},
		ProjectImages: [
			{
				id: 1,
				title: 'WHATText Interface',
				img: Whatext,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'TU Dresden',
				},
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'C#',
						'Unity',
						'Microsoft Optical Character Recognition (OCR)',
						'Figma'
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'As part of an obligatory internship program at TU Dresden in collaboration with Microsoft, this project aimed to create a Hololens app with text-recognition features. The app focused on product marking, implementing functionality to save and unsave recognized words.',
				},
			],
			ProjectRoleHeading: 'My Role as a Co-Developer and UI/UX Designer (internship)',
			ProjectRole: [
				{
					id: 1,
					details: 'UI/UX Design: Co-developed the initial concept according to the given requirements and created the visual design.',
				},
				{
					id: 2,
					details: 'Development: Co-developed the application.',
				},
			],
		},
	},



	13: {
		ProjectHeader: {
			title: 'Harvester Dashboard Prototype',
			publishDate: '2017',
			tags: 'Web Application / UI/UX Design',
			role: "Sole Developer"
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Harvester Control Interface',
				img: Harvester,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Hydrive',
				},
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Angular',
						'Figma'
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'Developed a user-friendly interface for harvester control units as part of an obligatory internship at TU Dresden.',
				},
			],
			ProjectRoleHeading: 'My Role as Sole Web Developer and UI/UX Designer (internship)',
			ProjectRole: [
				{
					id: 2,
					details: 'UI/UX Design: Developed the initial concept (Figma) according to the given requirements and created the visual design.',
				},
				{
					id: 3,
					details: 'Development: Implemented the frontend using Angular.',
				},
			],
		},
	},

	14: {
		ProjectHeader: {
			title: 'GEMS: Graph Exploration and Manipulation',
			publishDate: '2016',
			tags: 'Desktop Application / UI/UX Design',
			role: "Co-Developer"
		},
		ProjectImages: [
			{
				id: 1,
				title: 'App Interface',
				img: Graphs,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Interactive Media Lab Dresden',
				},
				{
					id: 4,
					title: 'Project Website',
					details: 'https://imld.de/en/research/research-projects/gems-2-0'
				}
			],
			Website: 'https://imld.de/en/research/research-projects/gems-2-0',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'Android Studio',
						'Java'
					],
				},
			],
			ProjectDetailsHeading: 'About Project',
			ProjectDetails: [
				{
					id: 0,
					details: 'Research Project: Visual Editing and Comparison of Multivariate Graphs Using Multiple Interactive Displays.',
				},
			],
			ProjectRoleHeading: 'My Role as Co-Developer (Bachelor Thesis)',
			ProjectRole: [
				{
					id: 2,
					details: 'UI/UX Design: Developed the initial concept according to the given requirements.',
				},
				{
					id: 3,
					details: 'Development: Implemented the "time-travel" feature for graph snapshots, allowing historical walkthroughs of the graphs.',
				},
			],
		},
	},
	


};