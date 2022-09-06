import { useContext } from 'react';
import MainContext from '../context/mainContext';

function TableMarkup() {
  const { mainContext } = useContext(MainContext);

  return (
    <div className="table_main">
      <div className="table_title">
        <span className="table_title_name">Short Link</span>
        <span className="table_title_name">Original Link</span>
        <span className="table_title_name">Counts of view</span>
      </div>
      <div className="row_main">
        <div className="table_row_body">
          {mainContext.links &&
            mainContext.links.map((item) => (
              <TableRow key={`${item.id}`} short={item.short} target={item.target} counts={item.counter} />
            ))}
        </div>
      </div>
    </div>
  );
}

function TableRow(props) {
  return (
    <div className="table_row">
      <input className="output_cell" disabled type="text" value={props.short} />
      <input className="output_cell" disabled type="text" value={props.target} />
      <input className="output_cell_count" disabled type="text" value={props.counts} />
    </div>
  );
}

export default TableMarkup;
