import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

const CitiesTable = () => {
  const { citiesList } = useSelector((state) => state.cities);
  const { deleteCity } = useActions();
  const [isSorted, setIsSorted] = useState(false);
  const [isSortedDesc, setIsSortedDesc] = useState(true);

  useEffect(() => {
    if (!citiesList.length) {
      setIsSorted(false);
      setIsSortedDesc(true);
    }
  }, [citiesList]);

  const sortedTable = (array) => {
    if (!isSorted) {
      return array;
    }
    if (!isSortedDesc) {
      array.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      array.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
    return array;
  };

  const sort = () => {
    if (!isSorted) {
      setIsSorted(true);
      setIsSortedDesc(false);
    } else {
      setIsSortedDesc(!isSortedDesc);
    }
  };

  return (
    <div className="citiesTable__wrapper">
      <table className="citiesTable">
        <thead>
          <tr>
            <th
              onClick={sort}
              className={
                isSorted ? (isSortedDesc ? "activeDesc" : "activeAsc") : ""
              }
            >
              Город
            </th>
            <th>Температура</th>
            <th>Атмосферное давление</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {citiesList.length
            ? sortedTable(citiesList).map((city) => {
                return (
                  <tr key={city.id}>
                    <td>{city.name}</td>
                    <td>{city.main.temp}°С</td>
                    <td>{city.main.pressure} hPa</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteCity(city.id);
                        }}
                        className="citiesTableItem__button"
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default CitiesTable;
