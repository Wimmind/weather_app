import "./sass/style.scss";
import CityForm from "./components/CityForm";
import CitiesTable from "./components/CitiesTable";

const App = () => {
  return (
    <div className="wrapper">
      <div className="header__wrapper">WeatherMap</div>
      <CityForm />
      <CitiesTable />
    </div>
  );
};

export default App;
