import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import github from '../assets/img/github.webp';

function MyVerticallyCenteredModal(props) {
	return (
		<Modal {...props} size='sm' className='my-modal' aria-labelledby='contained-modal-title-vcenter' centered>
			<Modal.Header className='modal-header'>
				<Modal.Title id='contained-modal-title-vcenter'>{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{props.description}</p>

				<div className='tech-used'>
					{props.tags.map((tag) => (
						<span key={`${props.title}-${tag.name}`} className={` ${tag.color}`}>
							#{tag.name}
						</span>
					))}
				</div>

				<div className='github-div'>
					<div onClick={() => window.open(props.source_code_link, '_blank')} className='github-link black-gradient'>
						<img src={github} alt='source code' className='github-icon' />
					</div>
					<div className='website-link' onClick={() => window.open(props.website_link, '_blank')}>
						<p>Visit Website</p>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='light' onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export const ProjectCard = ({ title, description, imgUrl, tags, source_code_link, website_link }) => {
	const [modalShow, setModalShow] = useState(false);

	return (
		<>
			<Col size={12} sm={12} md={6}>
				<div className='proj-imgbx' onClick={() => setModalShow(true)}>
					<img src={imgUrl} />

					<div className='proj-txtx'>
						<h4 className='project-card-title'>{title}</h4>
					</div>
				</div>
			</Col>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				title={title}
				description={description}
				tags={tags}
				source_code_link={source_code_link}
				website_link={website_link}
			/>
		</>
	);
};
//vs code installed extensions
//prettier, arduino, auto rename tag, babel javascript, c/c++, ES7+ React/Redux/React-Native snippets, ESLint, vscode-icons
//Git Graph, indent-rainbow, javascript (ES6) code snippets, live Sass compiler, material icon theme, serial monitor

// dont need
//HTML CSS Support, jupyter, jupyter cell tags, juppyter keymap, jupyter notebook renderers, jupyter slide show,
//live server, pylance, python, rainbow tags
