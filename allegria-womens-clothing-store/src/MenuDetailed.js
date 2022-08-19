import React from 'react';
import './css/menuDetailed.css';
import { Accordion } from 'react-bootstrap';


class MenuDetailed extends React.Component {
	constructor(props) {
		super(props);
		this.state = { menuDetales: false }
	}

	render() {
		return (
			<div className='menu-detailed'>
				<div className='menu-detailed__clothes'>
					<Accordion alwaysOpen>
						<Accordion.Item>
							<Accordion.Header>ОДЕЖДА</Accordion.Header>
							<Accordion.Body>
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
					<Accordion alwaysOpen>
						<Accordion.Item>
							<Accordion.Header>ОБУВЬ</Accordion.Header>
							<Accordion.Body>
								<ul>
									<li>Кроссовки</li>
									<li>Шлепанцы</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
				<div className='menu-detailed__bags'>
					<Accordion alwaysOpen>
						<Accordion.Item>
							<Accordion.Header>СУМКИ</Accordion.Header>
							<Accordion.Body>
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
					<Accordion alwaysOpen>
						<Accordion.Item>
							<Accordion.Header>АКСЕСУАРИ</Accordion.Header>
							<Accordion.Body>
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
					<Accordion alwaysOpen>
						<Accordion.Item>
							<Accordion.Header>БЕЛЬЕ</Accordion.Header>
							<Accordion.Body>
								<ul>
									<li>Разное</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
		)
	}
}

export default MenuDetailed;