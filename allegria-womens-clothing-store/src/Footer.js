import React from 'react';
import './css/footer.css';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__body'>
				<div className='footer__body-up containerM'>
					<h2>Будьте в курсе событий</h2>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control type="email" placeholder="E-mail" />
						</Form.Group>
					</Form>
					<nav className='footer__body-navigation'>
						<ul>
							{/* <li className='router-link'><Link to="/about">О&nbsp;нас</Link></li> */}
							<li className='router-link'>О&nbsp;нас</li>
							<li>Распространенные вопросы</li>
							<li>Бренды</li>
						</ul>
					</nav>
				</div>
				<div className='footer__body-subfooter'>
					<div className='footer__body-subfooter-imfo containerM'>
						<span>Все права защищены  © 2020 Allegria.com</span>
						<span>Дизайн и разработка:</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
