import { useContext } from 'react';
import MainContext from '../context/mainContext';
import { FILTER } from '../api/api';
import { getStatistics } from '../api/api';

function SortTable() {
  const { setMainContext } = useContext(MainContext);

  function handleSort(e) {
    setMainContext((state) => ({
      ...state,
      filter: e.target.value,
    }));
    getStatistics(e.target.value, 10).then((data) => {
      setMainContext((state) => ({
        ...state,
        links: [...data],
      }));
    });
  }

  return (
    <select className="table_sort" onChange={(e) => handleSort(e)}>
      <option value={FILTER.ASCENDING_SHORT}>Ascending Short</option>
      <option value={FILTER.ASCENDING_TARGET}>Ascending Target</option>
      <option value={FILTER.ASCENDING_COUNTER}>Ascending Counter</option>
      <option value={FILTER.DESCENDING_SHORT}>Descending Short</option>
      <option value={FILTER.DESCENDING_TARGET}>Descending Target</option>
      <option value={FILTER.DESCENDING_COUNTER}>Descending Counter</option>
    </select>
  );
}
export default SortTable;
