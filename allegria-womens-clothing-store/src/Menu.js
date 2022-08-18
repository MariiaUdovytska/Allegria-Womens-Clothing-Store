import React from 'react';
import './css/menu.css';
import a from './image/logo/a.png';
import l from './image/logo/l.png';
import e from './image/logo/e.png';
import g from './image/logo/g.png';
import r from './image/logo/r.png';
import i from './image/logo/i.png';

class Menu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='menu containerM'>
				<div className='menu__logo'>
					<img src={a} alt="logo" />
					<img src={l} alt="logo" />
					<img src={l} alt="logo" />
					<img src={e} alt="logo" />
					<img src={g} alt="logo" />
					<img src={r} alt="logo" />
					<img src={i} alt="logo" />
					<img src={a} alt="logo" />
				</div>
				<nav className='menu__navigate'>
					<ul>
						<li>Женщины</li>
						<li>Мужчины</li>
						<li className='menu__navigate-search'>
							поиск
							<input className='menu__navigate-search-input' type='text'></input>
						</li>
					</ul>
				</nav>
				<div className='menu__lang'>
					<ul>
						<li className='menu__lang-active'>ru</li>
						<li>ua</li>
						<li>en</li>
					</ul>
				</div>
				<div className='menu__icons'>
					<i className="bi bi-person" style={{ fontSize: '23px' }}></i>
					<i className="bi bi-heart" style={{ fontSize: '19px' }}></i>
					<i className="bi bi-bag" style={{ fontSize: '20px' }}></i>
				</div>
				<div className='menu__burger'>
					<span></span>
				</div>
			</div>
		)
	}
}

export default Menu;