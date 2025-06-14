import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import ExperienceCard from './ExperienceCard';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import will from '../assets/img/will.webp';
import startup from '../assets/img/startup.webp';
import shockfat from '../assets/img/shockfat.webp';
import monster from '../assets/img/monster.webp';
import drewit from '../assets/img/drewit.webp';
import amazona from '../assets/img/amazona.webp';
import wallstreetblast from '../assets/img/wallstreetblast.webp';
import igHoldings from '../assets/img/igHoldings.webp';
import luxuryPicnics from '../assets/img/luxuryPicnics.webp';
import rightDirection from '../assets/img/rightDirection.webp';
import beatEmUp from '../assets/img/beatemup.webp';
import sideScroller from '../assets/img/sideScroller.webp';

import ali from '../assets/img/ali.webp';
import startupwebsites from '../assets/img/startupwebsites.webp';
import wildcat from '../assets/img/wildcat.webp';

import colorSharp2 from '../assets/img/color-sharp2.webp';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import React from 'react';

const Projects = () => {
	const projects = [
		// {
		// 	title: 'Gambling App',
		// 	description:
		// 		'Currently in developement and only viewbale on mobile, users will be able to place 3 simultaneous bets using various currencies. Back end utilizes web sockets for multiplayer.',
		// 	imgUrl: wallstreetblast,
		// 	tags: [
		// 		{
		// 			name: 'react',
		// 			color: 'blue-text-gradient',
		// 		},
		// 		{
		// 			name: 'MySQL, Web Sockets, World Pay',
		// 			color: 'green-text-gradient',
		// 		},
		// 		{
		// 			name: 'SASS',
		// 			color: 'orange-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: 'https://github.com/4minuterobotics/wall-street-blast',
		// 	website_link: 'https://wall-street-blast.vercel.app/',
		// },
		// {
		// 	title: 'E-commerce Store',
		// 	description:
		// 		'Currentlly in development, users can create an account, search for items, and make payment using PayPal or Stripe. Includes an admin dashboard.',
		// 	imgUrl: amazona,
		// 	tags: [
		// 		{
		// 			name: 'react',
		// 			color: 'blue-text-gradient',
		// 		},
		// 		{
		// 			name: 'mongodb, PayPal, Stripe',
		// 			color: 'green-text-gradient',
		// 		},
		// 		{
		// 			name: 'react bootstap',
		// 			color: 'orange-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: 'https://github.com/4minuterobotics/amazonClone',
		// 	website_link: 'https://wills-store-git-main-4minuterobotics.vercel.app/',
		// },
		{
			title: '2D Animated Game',
			description:
				'This game is proof of concept of being able to import real people into video games. The guy in dress clothes is admin at the school where  I teach. This site displays my capabilities using the Canvas element and its animations. The character was animated using timed, customs cropped sprite sheets. The background shows parallax motion, to give depth. Best played on a computer. Attack with b, s, and space. Move with D-Pad.',
			imgUrl: beatEmUp,
			tags: [
				{
					name: 'react',
					color: 'blue-text-gradient',
				},
				{
					name: 'Canvas, 2D animation, game dev',
					color: 'green-text-gradient',
				},
				{
					name: ' Move with directional buttons. Attack with b, s, and space',
					color: 'orange-text-gradient',
				},
			],
			source_code_link: 'https://github.com/4minuterobotics/scalable-2d-game-beat-em-up',
			website_link: 'https://mr-lawrence-the-township.vercel.app/#',
		},
		{
			title: 'AI Image Generator',
			description:
				'A tribute to my late younger brother Drew, this web app takes prompts from users, converts it to an image, and uses cloud storage to save and re-access photos.',
			imgUrl: drewit,
			tags: [
				{
					name: 'react',
					color: 'blue-text-gradient',
				},
				{
					name: 'mongodb, openAI, cloudinary',
					color: 'green-text-gradient',
				},
				{
					name: 'tailwind',
					color: 'orange-text-gradient',
				},
			],
			source_code_link: 'https://github.com/4minuterobotics/MERN-AI-image-generator',
			website_link: 'https://drew-it-git-main-4minuterobotics.vercel.app/',
		},
		{
			title: 'Luxury Picnics',
			description: 'A website for booking luxury picnics in southern Florida. This website allows customers to view prodcucts and request bookings online.',
			imgUrl: luxuryPicnics,
			tags: [
				{
					name: 'reactjs',
					color: 'blue-text-gradient',
				},
				{
					name: 'emailjs',
					color: 'green-text-gradient',
				},
				{
					name: 'tailwind, framer motion, react-bootstrap',
					color: 'orange-text-gradient',
				},
			],
			source_code_link: 'https://github.com/4minuterobotics/luxurypicnics2',
			website_link: 'https://luxurypicnics2-git-main-4minuterobotics-projects.vercel.app/',
		},
		{
			title: 'Another 2D Animated Game',
			description:
				'This game is of the side scroller genre and shows my abilites to create multiple types of 2D animate games from scratch. Game is best played on a computer. Move with directional buttons. Attack with 1, 2, or 3',
			imgUrl: sideScroller,
			tags: [
				{
					name: 'reactjs',
					color: 'blue-text-gradient',
				},
				{
					name: 'Canvas, 2D animation, game dev',
					color: 'green-text-gradient',
				},
				{
					name: ' Move with directional buttons. Attack with 1, 2, or 3',
					color: 'orange-text-gradient',
				},
			],
			source_code_link: 'https://github.com/4minuterobotics/luxurypicnics2',
			website_link: 'https://luxurypicnics2-git-main-4minuterobotics-projects.vercel.app/',
		},
		{
			title: 'Animated Portfolio',
			description: 'A animation themed portfolio web app, displaying coding capability of 3D animation.',
			imgUrl: will,
			tags: [
				{
					name: 'reactjs',
					color: 'blue-text-gradient',
				},
				{
					name: 'emailjs',
					color: 'green-text-gradient',
				},
				{
					name: 'threejs, tailwind, framer motion ',
					color: 'orange-text-gradient',
				},
			],
			source_code_link: 'https://github.com/4minuterobotics/3d_portfolio/',
			website_link: 'https://williamlawrence.tech',
		},
		{
			title: 'Bouncy House Rental',
			description: 'Users can schedule bookings and make payments. Admin features include complete Saas functionality.',
			imgUrl: monster,
			tags: [
				{
					name: 'WIX',
					color: 'blue-text-gradient',
				},
			],
			source_code_link: '',
			website_link: 'https://www.monsterbouncyhouses.com',
		},
		{
			title: 'Web Dev Agency',
			description: 'My own web development agency website built on WIX using their VELO api.',
			imgUrl: startup,
			tags: [
				{
					name: 'WIX',
					color: 'blue-text-gradient',
				},
			],
			source_code_link: '',
			website_link: 'https://www.startupwebsites.design',
		},
		{
			title: 'Crossfit Gym',
			description: 'An app for a small gym that allows its customers to view changing schedules, order supplements, and watch live stream workouts.',
			imgUrl: shockfat,
			tags: [
				{
					name: 'Wordpress',
					color: 'green-text-gradient',
				},
			],
			source_code_link: '',
			website_link: 'https://www.shockfat.com',
		},

		// {
		// 	title: 'Integrated Health',
		// 	description: 'A website used as the main resource reference for an integrated health company in Arizona.',
		// 	imgUrl: igHoldings,
		// 	tags: [
		// 		{
		// 			name: 'reactjs',
		// 			color: 'blue-text-gradient',
		// 		},
		// 		{
		// 			name: 'emailjs',
		// 			color: 'green-text-gradient',
		// 		},
		// 		{
		// 			name: 'tailwind, framer motion, react-bootstrap',
		// 			color: 'orange-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: 'https://github.com/4minuterobotics/',
		// 	website_link: 'https://delriocenter.org',
		// },
		// {
		// 	title: 'Behavioral Specialists',
		// 	description: 'A website for a life coaching and therapy company in Arizona. Currently under construction.',
		// 	imgUrl: rightDirection,
		// 	tags: [
		// 		{
		// 			name: 'reactjs',
		// 			color: 'blue-text-gradient',
		// 		},
		// 		{
		// 			name: 'emailjs',
		// 			color: 'green-text-gradient',
		// 		},
		// 		{
		// 			name: 'tailwind, framer motion, react-bootstrap',
		// 			color: 'orange-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: 'https://github.com/4minuterobotics/the-right-direction',
		// 	website_link: 'https://www.the-right-direction.vercel.app/',
		// },
	];

	const experiences = [
		{
			title: 'React.js Developer',
			company_name: 'Ali Web Solutions',
			icon: ali,
			iconBg: '#383E56',
			date: 'March 2023 - Present',
			points: [
				'Developing and maintaining web applications using React.js and other related technologies.',
				'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
				'Implementing responsive design and ensuring cross-browser compatibility.',
				'Participating in code reviews and providing constructive feedback to other developers.',
			],
		},
		{
			title: 'Wix Freelance Developer',
			company_name: 'Startup Websites',
			icon: startupwebsites,
			iconBg: '#E6DEDD',
			date: 'June 2021 - Present',
			points: [
				"Use Wix's tools to create websites for clients, either from scratch or by customizing existing templates.",
				'Utilizing Software as a Service (SaaS) tools to meets customer needs and requirements. ',
				'Developing engaging content, selecting relevant images, and optimizing SEO for website growth.',
				'Analyzing data: utilizing analytics and metrics to track user behavior and website performance.',
			],
		},
		{
			title: 'Arduino - C Programming Language Robotics Instructor',
			company_name: 'Thornton Township High School',
			icon: wildcat,
			iconBg: '#383E56',
			date: 'Aug 2014 - May 2021',
			points: [
				'Explaining concepts such as variables, functions and loops in an engaging manner.',
				'Guiding students through the basics of circuitry, wiring and programming.',
				'Helping students troubleshoot any issues they might have and offer advice on how to improve their project.',
				'Guiding students through creating their own projects that integrate Arduino with other components.',
			],
		},
	];

	return (
		<section className='project' id='projects'>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility partialVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
									<h2>Projects & Experience</h2>
									<p>Click either tab to view my projects and work experience.</p>
									<Tab.Container id='projects-tabs' defaultActiveKey='first'>
										<Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
											<Nav.Item>
												<Nav.Link eventKey='first'>Projects</Nav.Link>
											</Nav.Item>
											{/* <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item> */}
											<Nav.Item>
												<Nav.Link eventKey='third'>Experience</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content id='slideInUp' className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
											<Tab.Pane eventKey='first'>
												<Row>
													{projects.map((project, index) => {
														return <ProjectCard key={index} {...project} />;
													})}
												</Row>
											</Tab.Pane>
											{/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
											<Tab.Pane eventKey='third'>
												<p>10 years in high school science education and 7 years in tech.</p>
												<div className='component' id='experience'>
													<div className='mt-20 flex flex-col'>
														<VerticalTimeline>
															{experiences.map((experience, index) => (
																<ExperienceCard key={`experience-${index}`} experience={experience} />
															))}
														</VerticalTimeline>
													</div>
												</div>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className='background-image-right' src={colorSharp2} alt='background'></img>
		</section>
	);
};

export default Projects;
