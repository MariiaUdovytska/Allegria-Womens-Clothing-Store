import React, { useState } from 'react';
import '../css/productCardsPage/productCardsPage.css';
import FilterProdcts from './FilterProdcts';
import ProductsSide from './ProductsSide';
import ExtensionFilter from './ExtensionFilter';
import { Button } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';

function OffCanvasExample({ name, ...props }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow} className="me-2">
				{name}
			</Button>
			<Offcanvas show={show} onHide={handleClose} {...props} className='offcanvas-filter'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Фильтр</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<FilterProdcts openAccordion={false} />
					<ExtensionFilter />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

class ProductCardsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sizeWidthType: 'desktop'
		}
	}

	getWindowDimensions = () => {
		const { innerWidth: width } = window;
		return width;
	}

	handleWindowDimensions = () => {
		let width = this.getWindowDimensions()
		if (width <= 514)
			this.setState({ sizeWidthType: 'phone' });
		else if (width <= 916)
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
		// eslint-disable-next-line default-case
		switch (this.state.sizeWidthType) {
			case 'desktop': return (
				<div className='products containerM'>
					<div className='products__body'>
						<div className='products__body-sidefilter'>
							<FilterProdcts openAccordion={true} />
						</div>
						<div className='products__body-sideproducts'>
							<ProductsSide />
						</div>
					</div>
				</div>
			);
			case 'tablet': return (
				<div className='products containerM'>
					<div className='products__body'>
						<div className='products__body-filter'>
							{['end'].map((placement, idx) => (
								<OffCanvasExample key={idx} placement={placement} name={placement} />
							))}
						</div>
						<div className='products__body-sideproducts'>
							<ProductsSide />
						</div>
					</div>
				</div>
			);
			case 'phone': return (
				<div className='products containerM'>
					<div className='products__body'>
						<div className='products__body-filter'>
							{['top'].map((placement, idx) => (
								<OffCanvasExample key={idx} placement={placement} name={placement} />
							))}
						</div>
						<div className='products__body-sideproducts'>
							<ProductsSide />
						</div>
					</div>
				</div>
			);
		}
	}
}
export default ProductCardsPage;