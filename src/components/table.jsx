import { useState, useContext, useEffect } from 'react';
import TableMarkup from './tableMarkup';
import { compressLink, getStatistics, FILTER } from '../api/api';
import Pagination from './pagination';
import MainContext from '../context/mainContext';
import SortTable from './sortTable';
import TableHeader from '../components/tableHeader';

function Table() {
  const [url, setUrl] = useState('');
  const { mainContext, setMainContext } = useContext(MainContext);

  useEffect(() => {
    getStatistics(FILTER.ASCENDING_SHORT, 10).then((data) => {
      setMainContext((state) => ({
        ...state,
        links: [...data],
      }));
    });
  }, []);

  function handleChange(e) {
    setUrl(e.target.value);
  }

  function handleGenerate(e) {
    e.preventDefault();
    setUrl(e.target.value);
    compressLink(url).then((data) => {
      setMainContext((state) => ({
        ...state,
        links: [data, ...mainContext.links],
      }));
    });
  }

  return (
    <div className="table_body">
      <div className="table_content">
        <TableHeader />
        <form onSubmit={handleGenerate}>
          <input
            value={url}
            onChange={(e) => handleChange(e)}
            className="input_table"
            type="text"
            placeholder="Insert url..."
          />
          <button type="submit" onClick={(e) => handleGenerate(e)} className="transform_button">
            Transform url
          </button>
          <SortTable />
        </form>
      </div>
      <div className="table_markup">
        <TableMarkup />
      </div>
      <Pagination />
    </div>
  );
}

export default Table;
