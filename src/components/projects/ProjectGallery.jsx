import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import SingleProjectContext from '../../context/SingleProjectContext';

Modal.setAppElement('#root'); // Set the root element for accessibility

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const { projectId } = useParams();
	const singleProjectDataPiece = singleProjectData[projectId];
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const openModal = (image) => {
		setSelectedImage(image);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		setSelectedImage(null);
	};

	return (
		<div>
			<div className="grid grid-cols-1 mb-7">
				{singleProjectDataPiece.ProjectImages.map((project) => (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
							onClick={() => openModal(project.img)}
						/>
					</div>
				))}
			</div>
			{selectedImage && (
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					contentLabel="Full Size Image"
					className="flex justify-center items-center"
					style={{
						overlay: {
							backgroundColor: 'rgba(0, 0, 0, 0.75)',
						},
						content: {
							border: 'none',
							background: 'none',
							overflow: 'auto',
							WebkitOverflowScrolling: 'touch',
							borderRadius: '10px',
							outline: 'none',
							padding: '0',
							position: 'relative', // To ensure relative positioning for the close button
						},
					}}
				>
					<div className="relative">
						<img src={selectedImage} alt="Full Size" className="rounded-lg max-w-full max-h-screen" />
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 text-white text-3xl bg-black rounded-full p-2"
							style={{
								backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
								border: 'none', // Remove any default border
								color: 'white', // White color for the text
								cursor: 'pointer', // Pointer cursor on hover
								fontSize: '24px', // Font size for the close icon
								lineHeight: '1', // Line height to ensure icon fits well
								padding: '0.5rem', // Padding around the icon
								textAlign: 'center', // Center the icon text
								borderRadius: '5pt', // Circular button
								position: 'absolute',
								right:'10px',
								top:'10px'
							}}
						>
							&times;
						</button>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default ProjectGallery;


