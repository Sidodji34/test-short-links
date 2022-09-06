import { Link } from 'react-router-dom';

function Modal({ active, setActive, children, button }) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
        <h4>{children}</h4>
        <Link to={button === 'Continue' ? 'table' : '/'}>
          <button className="modal_button">{button}</button>
        </Link>
      </div>
    </div>
  );
}

export default Modal;
