import React from 'react';
import './css/newArrival.css';
import arrivalCpuple from './image/newArrival/arrivalCouple.jpg';

function NewArrival() {
	return (
		<section className='new-arrival'>
			<div className='new-arrival__body'>
				<div className='new-arrival__body-preview'>
					<h3>new<br></br>arrival</h3>
					<p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip</p>
					<p>Смотреть коллекцию</p>
				</div>
				<div className='new-arrival__body-preview-image'>
					<div className='new-arrival__body-preview-image-in'>
						<div className='new-arrival__body-preview-image-in-img'>
							<img src={arrivalCpuple} alt="arrival-couple"></img>
							<span>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default NewArrival;