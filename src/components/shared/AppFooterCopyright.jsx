function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				
				<a
					href="https://www.linkedin.com/in/elizaveta-ra"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-rosa-600 dark:hover:text-rosa-300 ml-1 duration-500"
				>
					Elizaveta Ragozina
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
