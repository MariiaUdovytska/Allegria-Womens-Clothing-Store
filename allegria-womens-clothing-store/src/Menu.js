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
		this.state = {
			menuDetales: false,
			sizeWidthType: 'desktop',
			openBurger: false,
		}
	}
	getWindowDimensions = () => {
		const { innerWidth: width } = window;
		return width;
	}

	handleWindowDimensions = () => {
		let width = this.getWindowDimensions()
		if (width <= 375)
			this.setState({ sizeWidthType: 'phone' });
		else if (width <= 768)
			this.setState({ sizeWidthType: 'tablet' });
		else
			this.setState({ sizeWidthType: 'desktop' });
	}

	componentDidMount() {
		this.handleWindowDimensions();
		window.addEventListener('resize', this.handleWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowDimensions);
	}
	render() {
		// const { sizeWidthType } = this.state;
		switch (this.state.sizeWidthType) {
			case 'desktop': return (
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
							<div className={((this.state.menuDetales === true) ? 'menu__detailed menu__detailed-active' : 'menu__detailed')}>
								<MenuDetailed openAccordion={true} />
							</div>
						</div>
					</div>
				</header>
			);
			case 'tablet': return (
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
							<div className='menu__phone-right'>
								<div className='menu__icons'>
									<i className="bi bi-person" style={{ fontSize: '23px' }}></i>
									<i className="bi bi-heart" style={{ fontSize: '19px' }}></i>
									<i className="bi bi-bag" style={{ fontSize: '20px' }}></i>
								</div>
								<div className='menu__burger' onClick={() => this.setState({ openBurger: !this.state.openBurger })}>
									{(this.state.openBurger === false)
										?
										<i className="bi bi-filter-right" style={{ fontSize: '25px' }}></i>
										: <i className="bi bi-x-lg" style={{ fontSize: '23px' }}></i>
									}
								</div>
							</div>
							<div className={((this.state.openBurger === true) ? 'menu__detailed menu__detailed-active' : 'menu__detailed')}>
								<div className='menu__detailed-table'>
									<nav className='menu__navigate'>
										<ul>
											<li className='menu__navigate-active'>
												Женщины
											</li>
											<li>Мужчины</li>
											<li className='menu__navigate-search-table'>
												поиск
												<input type='text'></input>
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
								</div>
								<MenuDetailed openAccordion={false} />
							</div>
						</div>
					</div>
				</header>
			);
			case 'phone': return (
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
							<div className='menu__phone-right'>
								<div className='menu__icons'>
									<i className="bi bi-person" style={{ fontSize: '23px' }}></i>
									<i className="bi bi-heart" style={{ fontSize: '19px' }}></i>
									<i className="bi bi-bag" style={{ fontSize: '20px' }}></i>
								</div>
								<div className='menu__burger' onClick={() => this.setState({ openBurger: !this.state.openBurger })}>
									{(this.state.openBurger === false)
										?
										<i className="bi bi-filter-right" style={{ fontSize: '25px' }}></i>
										: <i className="bi bi-x-lg" style={{ fontSize: '23px' }}></i>
									}
								</div>
							</div>
							<div className={((this.state.openBurger === true) ? 'menu__detailed menu__detailed-active' : 'menu__detailed')}>
								<div className='menu__detailed-table'>
									<nav className='menu__navigate'>
										<ul>
											<li className='menu__navigate-active'>
												Женщины
											</li>
											<li>Мужчины</li>

										</ul>
									</nav>
								</div>
								<MenuDetailed openAccordion={false} />
								<div className='menu__lang'>
									<ul className='menu__lang-phone-ul'>
										<li className='menu__navigate-search-phone'>
											поиск
											<input type='text'></input>
										</li>
										<li className='menu__lang-active'>ru</li>
										<li>ua</li>
										<li>en</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</header>
			)

			default: break;
		}
	}
}

export default Menu;