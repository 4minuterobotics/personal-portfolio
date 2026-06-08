import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import ExperienceCard from './ExperienceCard';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import luxuryPicnics from '../assets/img/luxuryPicnics.webp';
import heardso from '../assets/img/heardso.webp';
import schooltreasure from '../assets/img/schooltreasure.webp';
import coursecreator from '../assets/img/coursecreator.webp';
import camcorderrescue from '../assets/img/camcorderrescue.webp';
import altech from '../assets/img/altech.webp';
import inteled from '../assets/img/inteled.webp';
import drewit from '../assets/img/drewit.jpeg';

import ali from '../assets/img/ali.webp';
import startupwebsites from '../assets/img/startupwebsites.webp';
import wildcat from '../assets/img/wildcat.webp';
import broward from '../assets/img/broward.webp';
import keypair from '../assets/img/keypair.svg';

import colorSharp2 from '../assets/img/color-sharp2.webp';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import React from 'react';

// Inline-SVG placeholder for projects without screenshots yet.
// Swap imgUrl for a real screenshot import once a capture is available.
const ph = (initials, accent) => {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><rect width="400" height="250" fill="#0F172A"/><rect y="240" width="400" height="10" fill="${accent}"/><text x="200" y="135" text-anchor="middle" font-family="ui-monospace, Consolas, monospace" font-size="76" font-weight="700" fill="#E8EBF0">${initials}</text><text x="200" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" letter-spacing="3" fill="#94A0B5">SCREENSHOT COMING</text></svg>`;
	return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

const Projects = () => {
	const projects = [
		{
			title: 'SchoolTreasure',
			description:
				"A FERPA-aware student work showcase platform. Teachers run public galleries of student projects with optional donor campaigns; students get classroom-appropriate logins. Built on React + Express + PostgreSQL with role-based JWT/session auth, Stripe donations across nine configurable campaigns, and Cloudinary media handling with sharp/ffmpeg metadata stripping for student privacy. Chose teacher-controlled redaction over public student profiles because FERPA-aware schools won't adopt anything that exposes student data by default.",
			imgUrl: schooltreasure,
			tags: [
				{ name: 'react + express', color: 'blue-text-gradient' },
				{ name: 'postgreSQL · stripe · cloudinary', color: 'green-text-gradient' },
				{ name: 'FERPA-aware · K-12', color: 'orange-text-gradient' },
			],
			source_code_link: '',
			website_link: 'https://example.schooltreasure.com',
		},
		{
			title: 'StudyPerch',
			description:
				"In active development. A white-label online course platform for independent instructors to build, sell, and deliver courses without renting someone else's brand. Next.js App Router, Supabase (Postgres + Auth + Storage), Drizzle ORM, Cloudinary for video, drag-and-drop lesson reordering with @dnd-kit. Shipped Phase 1 as a deliberately single-tenant MVP so instructors could launch faster than competitors who force a marketplace model; multi-tenancy is a Phase 3 decision once the activation funnel is proven.",
			imgUrl: coursecreator,
			tags: [
				{ name: 'next.js · app router', color: 'blue-text-gradient' },
				{ name: 'supabase · drizzle · stripe', color: 'green-text-gradient' },
				{ name: 'white-label SaaS · in development', color: 'orange-text-gradient' },
			],
			source_code_link: '',
			website_link: 'https://studyperch.com',
		},
		{
			title: 'heardso — Multi-Tenant Streaming',
			description:
				'A Netflix-style multi-tenant streaming platform any creator can spin up under their own subdomain to monetize a media library — churches, schools, niche creators, SMB OTT. Same codebase, isolated tenants. Cloudflare Stream video pipeline with tus uploads and ffmpeg metadata strip, Stripe Connect destination charges for per-tenant payouts, multi-profile + kids gate, HLS quality picker, admin moderation. Originally scoped to schools then pivoted to vertical-agnostic when the same architecture cleanly served three other ICPs.',
			imgUrl: heardso,
			tags: [
				{ name: 'next.js · supabase', color: 'blue-text-gradient' },
				{ name: 'cloudflare stream · stripe connect', color: 'green-text-gradient' },
				{ name: 'multi-tenant SaaS', color: 'orange-text-gradient' },
			],
			source_code_link: '',
			website_link: 'https://heardso.com',
		},
		{
			title: 'CamcorderRescue',
			description:
				'In active development. Recovers footage from dying camcorder media — MTS, AVCHD, Mini-DV, Hi8 — and converts it into modern formats families can actually watch. Next.js + Supabase + Cloudflare R2 storage, ffmpeg/sharp server-side conversion, credit-based billing with atomic credit accounting. Started life as a generalist file converter; pivoted to the camcorder niche after search-volume analysis showed clearer SEO leverage in a specific archival vertical with a real story.',
			imgUrl: camcorderrescue,
			tags: [
				{ name: 'next.js · supabase', color: 'blue-text-gradient' },
				{ name: 'ffmpeg · cloudflare R2 · stripe', color: 'green-text-gradient' },
				{ name: 'credit-based billing · in development', color: 'orange-text-gradient' },
			],
			source_code_link: '',
			website_link: 'https://camcorderrescue.com',
		},
		{
			title: 'Luxury Picnics',
			description:
				'A booking site for a luxury picnic business in South Florida. Customers browse picnic packages and request bookings online; the proprietor handles confirmations through EmailJS. React + Tailwind + Framer Motion, designed to feel as premium as the service it promotes.',
			imgUrl: luxuryPicnics,
			tags: [
				{ name: 'react', color: 'blue-text-gradient' },
				{ name: 'tailwind · framer motion', color: 'green-text-gradient' },
				{ name: 'emailJS', color: 'orange-text-gradient' },
			],
			source_code_link: 'https://github.com/4minuterobotics/luxurypicnics2',
			website_link: 'https://luxurypicnics2-git-main-4minuterobotics-projects.vercel.app/',
		},
		{
			title: 'AL-tech',
			description:
				"In active development. Mobile-first request routing for assisted-living facility staff: residents' meal, maintenance, transportation, housekeeping, and salon requests get consolidated into one routed system, replacing paper menus and hallway shouts. Next.js admin web + Expo mobile app, Supabase realtime, role-based access for floor nurses / supervisors / admin. Pilot facility lined up.",
			imgUrl: altech,
			tags: [
				{ name: 'next.js · expo', color: 'blue-text-gradient' },
				{ name: 'supabase realtime', color: 'green-text-gradient' },
				{ name: 'mobile-first · in development', color: 'orange-text-gradient' },
			],
			source_code_link: '',
			website_link: '',
		},
		{
			title: 'RestedTeacher',
			description:
				'In active development. AI-assisted lesson planning for high-school STEM teachers, rolling out subject-by-subject (chemistry first, then physics, biology, and high school math). Per-subject the workflow scans free CC-licensed visual material before falling back to AI generation, so commercial-safety is built in. React + Vite + AI pipeline. Co-built with a co-founder.',
			imgUrl: inteled,
			tags: [
				{ name: 'react · vite', color: 'blue-text-gradient' },
				{ name: 'AI / LLM pipeline', color: 'green-text-gradient' },
				{ name: 'edtech · in development', color: 'orange-text-gradient' },
			],
			source_code_link: '',
			website_link: 'https://restedteacher.com',
		},
		{
			title: 'Drew-It',
			description:
				"In loving memory of my little brother Drew, Drew-It turns a prompt into an AI-generated image and lets users share it to a public gallery. MERN stack: React + Vite client, Express + MongoDB + Mongoose server, Stability AI for image generation, Cloudinary for image storage. Originally gated behind sign-in; I rewrote the server to be open AND safe — per-IP rate limits on the generation endpoint (Stability AI calls cost real money), MongoDB operator sanitization, strict input validation, CORS lockdown, helmet headers, and a tightened body-size cap so a curl loop can't run up the bill.",
			imgUrl: drewit,
			tags: [
				{ name: 'react + express', color: 'blue-text-gradient' },
				{ name: 'mongoDB · stability AI · cloudinary', color: 'green-text-gradient' },
				{ name: 'public · rate-limited', color: 'orange-text-gradient' },
			],
			source_code_link: 'https://github.com/4minuterobotics/MERN-AI-image-generator',
			website_link: 'https://drew-it.vercel.app',
		},
	];

	const experiences = [
		{
			title: 'Founder',
			company_name: 'Keypair Software LLC',
			icon: keypair,
			iconBg: '#F8FAFC',
			date: 'May 2026 – Present',
			points: [
				'Founded Keypair Software LLC as the umbrella entity for a focused portfolio of education and creator software products.',
				'Own end-to-end product, engineering, growth, and security across a multi-tenant streaming platform with Stripe Connect payouts, a white-label course platform on Next.js + Supabase, a FERPA-aware student work showcase, and a credit-billed file-conversion service.',
				'Lead an ISO 27001-aligned information security management system covering all in-scope products: policies, gap analyses, control deviations, vendor management, and per-project annexes.',
				'Make and document every product decision myself — scope cuts, vertical pivots (school-only → multi-vertical streaming), and pricing/positioning across the portfolio.',
			],
		},
		{
			title: 'STEM & Software Development Instructor',
			company_name: 'Pompano Beach High School',
			icon: broward,
			iconBg: '#383E56',
			date: 'Sep 2023 – Present',
			points: [
				'Teach full-stack web development (HTML / CSS / JavaScript, React) and 2D game development with the Canvas API, sprite-sheet animation, and parallax scrolling.',
				'Teach CompTIA Security+ to certifying students — OWASP Top 10, network fundamentals, threat modeling, and applied cybersecurity practice.',
				'Teach 3D modeling (Autodesk Fusion 360) and Arduino-based robotics — ESP32 / ESP8266 microcontrollers, RFID modules, sensors, motors, and integrating embedded hardware into capstone projects.',
				'Sponsor the school robotics program; mentor students through team-based engineering projects from concept to working build.',
				'Maintain a self-built class website at pghsgames.com used by all students as the curriculum hub.',
			],
		},
		{
			title: 'React.js Developer',
			company_name: 'Ali Web Solutions',
			icon: ali,
			iconBg: '#383E56',
			date: 'March 2023 – July 2023',
			points: [
				'Built and maintained client-facing React.js applications and supporting ecosystem tooling.',
				'Collaborated with designers, product managers, and other engineers to ship features end-to-end.',
				'Implemented responsive, accessible UI and cross-browser-tested every release.',
				'Participated in code review with constructive, peer-level feedback to other developers.',
			],
		},
		{
			title: 'Freelance Full-Stack Developer',
			company_name: 'Startup Websites',
			icon: startupwebsites,
			iconBg: '#E6DEDD',
			date: 'June 2021 – Present',
			points: [
				'Designed and delivered interactive SPAs using React, TypeScript, and modular UI components.',
				'Built 2D animations with the Canvas API and JavaScript, including flipbook sprite-sheet character animation for client video-game work.',
				'Developed financial and compliance-related interfaces supporting user-specific logic, secure sessions, and role-based access.',
				'Created responsive, cross-browser interfaces optimized for speed and accessibility.',
				'Collaborated directly with clients to prototype and iterate based on real user workflows.',
				'Built and customized SaaS websites for clients using Wix tooling when budget or timeline ruled out a custom build.',
				'Owned SEO, analytics, and content strategy on engagements where it was part of the scope.',
			],
		},
		{
			title: 'Arduino & Robotics Instructor',
			company_name: 'Thornton Township High School',
			icon: wildcat,
			iconBg: '#383E56',
			date: 'Aug 2014 – May 2021',
			points: [
				'Taught fundamentals of the C programming language through Arduino microcontroller projects.',
				'Guided students through circuit design, wiring, soldering, and embedded programming.',
				'Mentored project-based learning where students built integrated Arduino projects from spec to working demo.',
				'Helped students troubleshoot hardware and code together, building the diagnostic habits engineering work requires.',
			],
		},
	];

	return (
		<section className='project' id='projects'>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility partialVisibility once>
							{({ isVisible }) => (
								<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
									<h2>Projects & Experience</h2>
									<p>Click either tab to view my projects and work experience.</p>
									<Tab.Container id='projects-tabs' defaultActiveKey='first'>
										<Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
											<Nav.Item>
												<Nav.Link eventKey='first'>Projects</Nav.Link>
											</Nav.Item>
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
											<Tab.Pane eventKey='third'>
												<p>10+ years in education and 7+ years building software.</p>
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
