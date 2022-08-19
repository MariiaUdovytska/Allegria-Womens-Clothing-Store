import React from 'react';
import './css/menu.css';
import a from './image/logo/a.png';
import l from './image/logo/l.png';
import e from './image/logo/e.png';
import g from './image/logo/g.png';
import r from './image/logo/r.png';
import i from './image/logo/i.png';
import MenuDetailed from './MenuDetailed';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = { menuDetales: false }
	}

	render() {
		return (
			<header className='menu'>
				<div className='containerM'>
					<div className='menu__body'>
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
						<div className='menu__burger'>
							<span></span>
						</div>
						<nav className='menu__navigate'>
							<ul>
								<li onClick={() => this.setState({ menuDetales: !this.state.menuDetales })}
									className={((this.state.menuDetales === true) ? 'menu__navigate-active' : 'menu__navigate-women')}>
									Женщины
								</li>
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
						<div className={((this.state.menuDetales === true) ? 'munu__detailed munu__detailed-active' : 'munu__detailed')}>
							<MenuDetailed />
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Menu;