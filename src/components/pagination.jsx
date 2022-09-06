import { useContext, useState } from 'react';
import { getStatistics } from '../api/api';
import MainContext from '../context/mainContext';

function Pagination() {
  const { mainContext, setMainContext } = useContext(MainContext);
  const [currentLinks, setLinks] = useState(10);
  const [currentPage, setPage] = useState(1);

  function handleNextPage() {
    if (mainContext.links.length < 10) {
      return;
    }
    setLinks(currentPage + 10);
    getStatistics(mainContext.filter, currentLinks).then((data) => {
      setMainContext((state) => ({
        ...state,
        links: [...data],
      }));
    });
    setPage(currentPage + 1);
  }

  function handlePreviousPage() {
    if (currentPage <= 1) {
      return;
    }
    setLinks(currentPage - 10);
    getStatistics(mainContext.filter, currentLinks).then((data) => {
      setMainContext((state) => ({
        ...state,
        links: [...data],
      }));
    });
    setPage(currentPage - 1);
  }

  return (
    <div className="pagination_buttons">
      <button className="page_button" onClick={handlePreviousPage}>
        Previous Page
      </button>
      <span className="current_page">{currentPage}</span>
      <button className="page_button" onClick={handleNextPage}>
        Next Page
      </button>
    </div>
  );
}

export default Pagination;
