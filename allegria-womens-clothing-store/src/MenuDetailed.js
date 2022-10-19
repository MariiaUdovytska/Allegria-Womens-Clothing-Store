import React from 'react';
import './css/menuDetailed.css';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MenuDetailed(props) {
	return (
		<div className={((props.openAccordion === true) ? 'menu-detailed' : 'menu-detailed__tablet')}>
			<div className={((props.openAccordion === true) ? 'menu-detailed__choise' : ' menu-detailed__phone')}>
				<div className='menu-detailed__accordion'>
					<Accordion defaultActiveKey={(props.openAccordion === true) ? '0' : ''}>
						<Accordion.Item eventKey="0">
							<Accordion.Header>ОДЕЖДА</Accordion.Header>
							<Accordion.Body style={(props.openAccordion !== true) ? { 'textAlign': 'center' } : {}}>
								<ul className='router-link'>
									<Link to="/productCardsPage" ><li onClick={props.onHide}>Свитшоты и худи</li></Link>
									<li>Платья юбки</li>
									<li>Футболки и топы</li>
									<li>Брюки и шорты</li>
									<li>Рубашки</li>
									<li>Комбинезоны</li>
									<li>Леггинсы</li>
									<li>Куртки</li>
									<li>Пальто</li>
									<li>Плащи</li>
									<li>Желетки</li>
									<li>Ветровки</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
				<div className='menu-detailed__accordion'>
					<Accordion defaultActiveKey={(props.openAccordion === true) ? '0' : ''}>
						<Accordion.Item eventKey="0">
							<Accordion.Header>ОБУВЬ</Accordion.Header>
							<Accordion.Body style={(props.openAccordion !== true) ? { 'textAlign': 'center' } : {}}>
								<ul>
									<li>Кроссовки</li>
									<li>Шлепанцы</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
				<div className='menu-detailed__accordion'>
					<Accordion defaultActiveKey={(props.openAccordion === true) ? '0' : ''}>
						<Accordion.Item eventKey="0">
							<Accordion.Header>СУМКИ</Accordion.Header>
							<Accordion.Body style={(props.openAccordion !== true) ? { 'textAlign': 'center' } : {}}>
								<ul>
									<li>Сумки</li>
									<li>Рюкзаки</li>
									<li>Кроссбоди</li>
									<li>Поясные</li>
									<li>Спортивные</li>
									<li>Шопперы</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
				<div className='menu-detailed__accordion'>
					<Accordion defaultActiveKey={(props.openAccordion === true) ? '0' : ''}>
						<Accordion.Item eventKey="0">
							<Accordion.Header>АКСЕСУАРИ</Accordion.Header>
							<Accordion.Body style={(props.openAccordion !== true) ? { 'textAlign': 'center' } : {}}>
								<ul>
									<li>Головные уборы</li>
									<li>Перчатки</li>
									<li>Шарфы и платки</li>
									<li>Носки </li>
									<li>Гетры</li>
									<li>Др</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
				<div className='menu-detailed__accordion'>
					<Accordion defaultActiveKey={(props.openAccordion === true) ? '0' : ''}>
						<Accordion.Item eventKey="0">
							<Accordion.Header>БЕЛЬЕ</Accordion.Header>
							<Accordion.Body style={(props.openAccordion !== true) ? { 'textAlign': 'center' } : {}}>
								<ul>
									<li>Разное</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
			<div className='menu-detailed__info'>
				<ul>
					<span>DEHA</span>
					<span>American&nbsp;vintage</span>
					<span>george&nbsp;gina&nbsp;lucy</span>
					<span>birkenstock</span>
				</ul>
			</div>
		</div>
	);
}

export default MenuDetailed;
