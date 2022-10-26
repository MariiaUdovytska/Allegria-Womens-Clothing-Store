import React from 'react';
import './css/menu.css';
import a from './image/logo/a.png';
import l from './image/logo/l.png';
import e from './image/logo/e.png';
import g from './image/logo/g.png';
import r from './image/logo/r.png';
import i from './image/logo/i.png';
import { Link } from 'react-router-dom';
import MenuDetailed from './MenuDetailed';
import IconsBusket from './IconsBusket';
import SingInModal from './singInRegistrationConfirmation/SingInModal';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuDetales: false,
			sizeWidthType: 'desktop',
			openBurger: false,
			show: false,
			move: 0,
			touchPosition: null
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
		else if (width <= 800)
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

	topButtonClick = () => {
		this.setState({ menuDetales: false, openBurger: false });
	}

	handleTouchStart = (e) => {
		const touchDown = e.touches[0].clientY
		this.setState({ touchPosition: touchDown });
	}

	handleTouchMove = (e) => {
		const touchDown = this.state.touchPosition
		if (touchDown === null) {
			return
		}
		const currentTouch = e.touches[0].clientY
		const diff = touchDown - currentTouch
		if (diff > 15) {
			this.topButtonClick()
		}
		this.setState({ touchPosition: null });
	}

	render() {
		switch (this.state.sizeWidthType) {
			case 'desktop': return (
				<header className='menu'>
					<div className='containerM'>
						<div className='menu__body '>
							<div className='menu__logo router-link'>
								<Link to="/home">
									<img src={a} alt="logo" />
									<img src={l} alt="logo" />
									<img src={l} alt="logo" />
									<img src={e} alt="logo" />
									<img src={g} alt="logo" />
									<img src={r} alt="logo" />
									<img src={i} alt="logo" />
									<img src={a} alt="logo" />
								</Link>
							</div>
							<nav className='menu__navigate'>
								<ul>
									<li onClick={() => this.setState({ menuDetales: !this.state.menuDetales })}
										className={((this.state.menuDetales === true) ? 'menu__navigate-active' : 'menu__navigate-women')}>
										Женщины
									</li>
									<li>Мужчины</li>
									<li className='menu__navigate-search'>
										<input type='text'></input>
										<i className="bi bi-search"></i>
									</li>
								</ul>
							</nav>
							<div className='menu__lang'>
								<ul>
									<li className='menu__lang-active'>ru</li>
									<li >ua</li>
									<li>en</li>
								</ul>
							</div>
							<div className='menu__icons router-link'>
								<i onClick={() => this.setState({ show: true })} className="bi bi-person" style={{ fontSize: '23px' }}></i>
								<SingInModal show={this.state.show} onHide={() => this.setState({ show: false })} />
								<Link to="/wishlist"><i className="bi bi-heart" style={{ fontSize: '19px' }} onClick={() => this.setState({ menuDetales: false })}></i></Link>
								<span style={{ position: "relative" }}
									onClick={() => this.setState({ menuDetales: false })}>
									<IconsBusket />
								</span>
							</div>
							<div onTouchStart={this.handleTouchStart}
								onTouchMove={this.handleTouchMove}
								className={((this.state.menuDetales === true) ? 'menu__detailed menu__detailed-active' : 'menu__detailed')}>
								<MenuDetailed openAccordion={true} onHide={() => this.setState({ menuDetales: false })} />
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
								<Link to="/home">
									<img src={a} alt="logo" />
									<img src={l} alt="logo" />
									<img src={l} alt="logo" />
									<img src={e} alt="logo" />
									<img src={g} alt="logo" />
									<img src={r} alt="logo" />
									<img src={i} alt="logo" />
									<img src={a} alt="logo" />
								</Link>
							</div>
							<div className='menu__phone-right'>
								<div className='menu__icons router-link'>
									<i onClick={() => this.setState({ show: true })} className="bi bi-person" style={{ fontSize: '23px' }}></i>
									<SingInModal show={this.state.show} onHide={() => this.setState({ show: false })} />
									<Link to="/wishlist"><i className="bi bi-heart" style={{ fontSize: '19px' }} onClick={() => this.setState({ openBurger: false })}></i></Link>
									<span style={{ position: "relative" }}
										onClick={() => this.setState({ openBurger: false })}>
										<IconsBusket />
									</span>
								</div>
								<div className='menu__burger' onClick={() => this.setState({ openBurger: !this.state.openBurger })}>
									{(this.state.openBurger === false)
										?
										<i className="bi bi-filter-right" style={{ fontSize: '25px' }}></i>
										: <i className="bi bi-x-lg" style={{ fontSize: '23px' }}></i>
									}
								</div>
							</div>
							<div onTouchStart={this.handleTouchStart}
								onTouchMove={this.handleTouchMove}
								className={((this.state.openBurger === true) ? 'menu__detailed menu__detailed-active' : 'menu__detailed')}>
								<div className='menu__detailed-table'>
									<nav className='menu__navigate'>
										<ul>
											<li className='menu__navigate-active'>
												Женщины
											</li>
											<li>Мужчины</li>
											<li className='menu__navigate-search-table'>
												<input type='text'></input>
												<i className="bi bi-search"></i>
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
								<MenuDetailed openAccordion={false} onHide={() => this.setState({ openBurger: false })} />
								<div className='menu-detailed__tablet-info'>
									<ul>
										<span>DEHA</span>
										<span>American&nbsp;vintage</span>
										<span>george&nbsp;gina&nbsp;lucy</span>
										<span>birkenstock</span>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</header>
			);
			case 'phone': return (
				<header className='menu'>
					<div className='containerM'>
						<div className='menu__body'>
							<div className='menu__logo roter-link'>
								<Link to="/home">
									<img src={a} alt="logo" />
									<img src={l} alt="logo" />
									<img src={l} alt="logo" />
									<img src={e} alt="logo" />
									<img src={g} alt="logo" />
									<img src={r} alt="logo" />
									<img src={i} alt="logo" />
									<img src={a} alt="logo" />
								</Link>
							</div>
							<div className='menu__phone-right'>
								<div className='menu__icons router-link'>
									<i onClick={() => this.setState({ show: true })} className="bi bi-person" style={{ fontSize: '23px' }}></i>
									<SingInModal show={this.state.show} onHide={() => this.setState({ show: false })} />
									<Link to="/wishlist"><i className="bi bi-heart" style={{ fontSize: '19px' }} onClick={() => this.setState({ openBurger: false })}></i></Link>
									<span style={{ position: "relative" }}
										onClick={() => this.setState({ openBurger: false })}>
										<IconsBusket />
									</span>
								</div>
								<div className='menu__burger' onClick={() => this.setState({ openBurger: !this.state.openBurger })}>
									{(this.state.openBurger === false)
										?
										<i className="bi bi-filter-right" style={{ fontSize: '25px' }}></i>
										: <i className="bi bi-x-lg" style={{ fontSize: '23px' }}></i>
									}
								</div>
							</div>
							<div onTouchStart={this.handleTouchStart}
								onTouchMove={this.handleTouchMove}
								className={((this.state.openBurger === true) ? 'menu__detailed menu__detailed-active' : 'menu__detailed')}>
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
								<MenuDetailed openAccordion={false} onHide={() => this.setState({ openBurger: false })} />
								<div className='menu__langandinfo'>
									<div className='menu__lang'>
										<ul className='menu__lang-phone-ul'>
											<li className='menu__navigate-search-phone'>
												<input type='text'></input>
												<i className="bi bi-search"></i>
											</li>
											<li className='menu__lang-active'>ru</li>
											<li>ua</li>
											<li>en</li>
										</ul>
									</div>
									<div className='menu-detailed__phone-info'>
										<ul>
											<span>DEHA</span>
											<span>American&nbsp;vintage</span>
											<span>george&nbsp;gina&nbsp;lucy</span>
											<span>birkenstock</span>
										</ul>
									</div>
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