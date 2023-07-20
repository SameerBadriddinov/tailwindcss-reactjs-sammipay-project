import React from 'react';
import './App.css';
import {
	Billing,
	Bussines,
	Clients,
	Contract,
	CTA,
	Footer,
	Home,
	Navbar,
	Statistics,
	Testimonials,
} from './components';
import { styles } from './util/style';

const App = () => {
	return (
		<div className='bg-primary w-full overflow-hidden'>
			{/* Navbar */}
			<div className={`${styles.paddingX} ${styles.flexStart} `}>
				<div className={`${styles.container}`}>
					<Navbar />
				</div>
			</div>

			{/* Home */}
			<div className={`${styles.flexStart}`}>
				<div className={`${styles.container}`}>
					<Home />
				</div>
			</div>

			{/* Statistics */}
			<div
				className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}
			>
				<div className={`${styles.container}`}>
					<Statistics />
					<Contract />
					<Billing />
					<Bussines />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
