import React from 'react';
import '../css/productCardsPage/filterProdcts.css';
import { Accordion } from 'react-bootstrap';

function FilterProdcts(props) {
	return (
		<div className='filter'>
			<div className='filter__gender menu__navigate'>
				<ul>
					<li className='menu__navigate-active'>
						Женщины
					</li>
					<li>Мужчины</li>
				</ul>
			</div>
			<div className='filter__accordions'>
				<div className='filter__accordion menu-detailed__accordion'>
					<Accordion defaultActiveKey={(props.openAccordion === true) ? '0' : ''}>
						<Accordion.Item eventKey="0">
							<Accordion.Header>ОДЕЖДА</Accordion.Header>
							<Accordion.Body >
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
				<div className='filter__accordion menu-detailed__accordion'>
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>ОБУВЬ</Accordion.Header>
							<Accordion.Body >
								<ul>
									<li>Кроссовки</li>
									<li>Шлепанцы</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
				<div className='filter__accordion menu-detailed__accordion'>
					<Accordion >
						<Accordion.Item eventKey="0">
							<Accordion.Header>СУМКИ</Accordion.Header>
							<Accordion.Body >
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
				<div className='filter__accordion menu-detailed__accordion'>
					<Accordion >
						<Accordion.Item eventKey="0">
							<Accordion.Header>АКСЕСУАРИ</Accordion.Header>
							<Accordion.Body >
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
				<div className='filter__accordion menu-detailed__accordion'>
					<Accordion >
						<Accordion.Item eventKey="0">
							<Accordion.Header>БЕЛЬЕ</Accordion.Header>
							<Accordion.Body >
								<ul>
									<li>Разное</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
		</div>

	);
}

export default FilterProdcts;