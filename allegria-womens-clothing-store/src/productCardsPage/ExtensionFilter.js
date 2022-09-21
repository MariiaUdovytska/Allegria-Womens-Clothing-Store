import React from 'react';
import '../css/productCardsPage/extensionFilter.css';
import { Accordion } from 'react-bootstrap';

function ExtensionFilter() {
	return (
		<div className='extension-filter'>
			<div className='extension-filter__accordion ext-fil__acc1 menu-detailed__accordion'>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Размер</Accordion.Header>
						<Accordion.Body >
							<ul>
								<li>XS</li>
								<li>s</li>
								<li>m</li>
								<li>l</li>
								<li>xl</li>
								<li>xp</li>
							</ul>
							<button className='extension-filter__accordion-btn' type='submit'>Применить</button>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
			<div className='extension-filter__accordion ext-fil__acc2 menu-detailed__accordion'>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Цена</Accordion.Header>
						<Accordion.Body >
							<ul>
								<li>0-500</li>
								<li>500-100</li>
								<li>1000-2000</li>
								<li>2000-4000</li>
								<li>4000-8000</li>
							</ul>
							<button className='extension-filter__accordion-btn' type='submit'>Применить</button>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
			<div className='extension-filter__accordion ext-fil__acc3 menu-detailed__accordion'>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Цвет</Accordion.Header>
						<Accordion.Body >
							<ul>
								<li>белый</li>
								<li>серый</li>
								<li>черный</li>
							</ul>
							<button className='extension-filter__accordion-btn' type='submit'>Применить</button>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
			<div className='extension-filter__accordion ext-fil__acc4 menu-detailed__accordion'>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Бренд</Accordion.Header>
						<Accordion.Body >
							<ul>
								<li>American vintage</li>
								<li>george gina lucy</li>
								<li>DEHA</li>
								<li>birkenstock</li>
							</ul>
							<button className='extension-filter__accordion-btn' type='submit'>Применить</button>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	);
}

export default ExtensionFilter;