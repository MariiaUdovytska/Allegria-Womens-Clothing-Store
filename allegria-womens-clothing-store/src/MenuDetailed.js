import React from 'react';
import './css/menuDetailed.css';
import { Accordion } from 'react-bootstrap';


class MenuDetailed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className={((this.props.openAccordion === true) ? 'menu-detailed' : 'menu-detailed__tablet')}>
				<div className={((this.props.openAccordion === true) ? 'menu-detailed__choise' : ' menu-detailed__phone')}>
					<div className='menu-detailed__clothes'>
						<Accordion defaultActiveKey={(this.props.openAccordion === true) ? '0' : ''}>
							<Accordion.Item eventKey="0">
								<Accordion.Header>ОДЕЖДА</Accordion.Header>
								<Accordion.Body style={(this.props.openAccordion !== true) ? { 'text-align': 'center' } : {}}>
									<ul>
										<li>Свитшоты и худи</li>
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
					<div className='menu-detailed__shoes'>
						<Accordion defaultActiveKey={(this.props.openAccordion === true) ? '0' : ''}>
							<Accordion.Item eventKey="0">
								<Accordion.Header>ОБУВЬ</Accordion.Header>
								<Accordion.Body style={(this.props.openAccordion !== true) ? { 'text-align': 'center' } : {}}>
									<ul>
										<li>Кроссовки</li>
										<li>Шлепанцы</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='menu-detailed__bags'>
						<Accordion defaultActiveKey={(this.props.openAccordion === true) ? '0' : ''}>
							<Accordion.Item eventKey="0">
								<Accordion.Header>СУМКИ</Accordion.Header>
								<Accordion.Body style={(this.props.openAccordion !== true) ? { 'text-align': 'center' } : {}}>
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
					<div className='menu-detailed__accessories'>
						<Accordion defaultActiveKey={(this.props.openAccordion === true) ? '0' : ''}>
							<Accordion.Item eventKey="0">
								<Accordion.Header>АКСЕСУАРИ</Accordion.Header>
								<Accordion.Body style={(this.props.openAccordion !== true) ? { 'text-align': 'center' } : {}}>
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
					<div className='menu-detailed__underwear'>
						<Accordion defaultActiveKey={(this.props.openAccordion === true) ? '0' : ''}>
							<Accordion.Item eventKey="0">
								<Accordion.Header>БЕЛЬЕ</Accordion.Header>
								<Accordion.Body style={(this.props.openAccordion !== true) ? { 'text-align': 'center' } : {}}>
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
		)
	}
}

export default MenuDetailed;