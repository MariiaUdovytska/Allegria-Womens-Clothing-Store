import FullScreen from './FullScreen';
import NewArrival from './NewArrival';
import PreviewAbout from './PreviewAbout';
import PreviewPopular from './PreviewPopular';

function MainPage() {
	return (
		<div>
			<FullScreen />
			<NewArrival />
			<PreviewPopular />
			<PreviewAbout />
		</div>
	);
}

export default MainPage;