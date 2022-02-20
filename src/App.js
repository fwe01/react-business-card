import './App.css';
import ProfilePicture from "./Components/ProfilePicture/ProfilePicture";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div className="container">
			<ProfilePicture/>
			<MainContent/>
			<Footer/>
		</div>
	);
}

export default App;
