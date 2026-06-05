import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.webp';

// Certifications (real images in repo)
import securityPlusCert from '../assets/img/ComptiaSecurityPlus.webp';
import ccstCert from '../assets/img/CCST.webp';
import PMICert from '../assets/img/PMIProjectManagementReady.webp';
import javascriptCert from '../assets/img/ITSpecialistJavascript.webp';
import pythonCert from '../assets/img/ITSpecialistPython.webp';
import htmlcssCert from '../assets/img/ITSpecialistHTMLandCSS.webp';
import fusionCert from '../assets/img/Autodeskfusion360.webp';

// Tools with brand images bundled in the repo
import reactjs from '../assets/img/reactjs.webp';
import nodejs from '../assets/img/nodejs.webp';
import typescript from '../assets/img/typescript.webp';
import tailwind from '../assets/img/tailwind.webp';
import sql from '../assets/img/sql.webp';
import mongodb from '../assets/img/mongodb.webp';
import docker from '../assets/img/docker.webp';
import git from '../assets/img/git.webp';
import figma from '../assets/img/figma.webp';
import arduino from '../assets/img/arduino.webp';

import React from 'react';

// Inline-SVG monogram badge for technologies without a bundled brand asset.
// Drop a real SVG/WebP into src/assets/img/ and swap the <img src> when a
// proper logo is available.
const tech = (monogram, bg = '#0F172A', fg = '#FFFFFF') => {
	const size = monogram.length > 2 ? 56 : monogram.length === 2 ? 68 : 92;
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" rx="24" fill="${bg}"/><text x="100" y="100" text-anchor="middle" dy="0.35em" font-family="ui-monospace, Consolas, monospace" font-size="${size}" font-weight="700" fill="${fg}">${monogram}</text></svg>`;
	return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

// Placeholder badges — replace with real brand logos when assets are added.
const nextjsImg = tech('N', '#000000', '#FFFFFF');
const supabaseImg = tech('Sb', '#3ECF8E', '#0F172A');
const postgresImg = tech('PG', '#336791', '#FFFFFF');
const stripeImg = tech('St', '#635BFF', '#FFFFFF');
const cloudinaryImg = tech('Cl', '#3448C5', '#FFFFFF');
const drizzleImg = tech('Dz', '#C5F74F', '#0F172A');
const vercelImg = tech('V', '#000000', '#FFFFFF');

const Technologies = () => {
	const responsive = {
		superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
		desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
		tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
		mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
	};

	return (
		<section className='skill' id='technologies'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<div className='skill-bx wow zoomIn'>
							<h2>Skills</h2>
							<p>
								These are the technologies I use regularly &mdash; they've become second nature. I'm always learning new ones.<br></br>
								Click <a href='https://www.credly.com/users/william-lawrence.1a74efab'>here</a> to view my verified certifications on Credly.
							</p>

							<Carousel responsive={responsive} infinite={true} className='owl-carousel owl-theme skill-slider'>
								{/* Certifications */}
								<div className='item'>
									<img src={securityPlusCert} alt='CompTIA Security+' />
									<h5>CompTIA Security+</h5>
								</div>
								<div className='item'>
									<img src={ccstCert} alt='Cisco CCST' />
									<h5>Cisco CCST</h5>
								</div>
								<div className='item'>
									<img src={PMICert} alt='PMI Project Management Ready' />
									<h5>PMI PM Ready</h5>
								</div>
								<div className='item'>
									<img src={javascriptCert} alt='IT Specialist JavaScript' />
									<h5>JavaScript Certified</h5>
								</div>
								<div className='item'>
									<img src={pythonCert} alt='IT Specialist Python' />
									<h5>Python Certified</h5>
								</div>
								<div className='item'>
									<img src={htmlcssCert} alt='IT Specialist HTML & CSS' />
									<h5>HTML &amp; CSS Certified</h5>
								</div>
								<div className='item'>
									<img src={fusionCert} alt='Autodesk Fusion 360' />
									<h5>Fusion 360 Certified</h5>
								</div>

								{/* Frontend */}
								<div className='item'>
									<img src={reactjs} alt='React' />
									<h5>React</h5>
								</div>
								<div className='item'>
									<img src={nextjsImg} alt='Next.js' />
									<h5>Next.js</h5>
								</div>
								<div className='item'>
									<img src={typescript} alt='TypeScript' />
									<h5>TypeScript</h5>
								</div>
								<div className='item'>
									<img src={tailwind} alt='Tailwind CSS' />
									<h5>Tailwind CSS</h5>
								</div>

								{/* Backend & data */}
								<div className='item'>
									<img src={nodejs} alt='Node.js' />
									<h5>Node.js</h5>
								</div>
								<div className='item'>
									<img src={postgresImg} alt='PostgreSQL' />
									<h5>PostgreSQL</h5>
								</div>
								<div className='item'>
									<img src={supabaseImg} alt='Supabase' />
									<h5>Supabase</h5>
								</div>
								<div className='item'>
									<img src={drizzleImg} alt='Drizzle ORM' />
									<h5>Drizzle ORM</h5>
								</div>
								<div className='item'>
									<img src={mongodb} alt='MongoDB' />
									<h5>MongoDB</h5>
								</div>
								<div className='item'>
									<img src={sql} alt='SQL' />
									<h5>SQL</h5>
								</div>

								{/* Payments & infrastructure */}
								<div className='item'>
									<img src={stripeImg} alt='Stripe' />
									<h5>Stripe</h5>
								</div>
								<div className='item'>
									<img src={cloudinaryImg} alt='Cloudinary' />
									<h5>Cloudinary</h5>
								</div>
								<div className='item'>
									<img src={vercelImg} alt='Vercel' />
									<h5>Vercel</h5>
								</div>
								<div className='item'>
									<img src={docker} alt='Docker' />
									<h5>Docker</h5>
								</div>

								{/* Tools */}
								<div className='item'>
									<img src={git} alt='Git' />
									<h5>Git</h5>
								</div>
								<div className='item'>
									<img src={figma} alt='Figma' />
									<h5>Figma</h5>
								</div>
								<div className='item'>
									<img src={arduino} alt='Arduino' />
									<h5>Arduino</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className='background-image-left' src={colorSharp} alt='background' />
		</section>
	);
};

export default Technologies;
