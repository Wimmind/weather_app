import './sass/style.scss';
import CityForm from './components/CityForm';

const App = () => {
  return (
    <div className="wrapper">
      <div className="header__wrapper">
        WeatherMap
      </div>
      <CityForm />
    </div>
  );
}

export default App;
