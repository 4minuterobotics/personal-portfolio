import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import headerImg from "../assets/img/header-img.svg";
import cartoonMe from '../assets/img/cartoon-me1.webp';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

import React from 'react';

const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className='banner' id='home'>
			<Container>
				<Row className='align-items-center'>
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility partialVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
									<span className='tagline'>Welcome to my Portfolio</span>
									<h1>
										{`Hi! I'm Will - `} <br />{' '}
										<span className='txt-rotate' dataPeriod='1000' data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
											<span className='wrap'>{text}</span>
										</span>
									</h1>
									<p>
										I'm an experienced software developer with a passion for web development. I have extensive experience in JavaScript and specialize
										in popular frameworks such as React, Node.js, MongoDB, and Three.js. I'm a team player who loves learning new technologies and
										working closely with clients to create efficient, user-friendly solutions that solve real-world problems while scaling
										effectively.
									</p>
									<HashLink to='#connect' className='connectLink'>
										<button onClick={() => console.log('connect')}>
											Let’s Connect <ArrowRightCircle size={25} />
										</button>
									</HashLink>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility partialVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
									<img src={cartoonMe} alt='Header Img' />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
