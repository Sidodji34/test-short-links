import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import AuthContext from '../context/authContext';
import { useContext } from 'react';
import { accountIcon } from '../icons/accountIcon';
import { logout } from '../icons/logout';

function TableHeader() {
  const { setAuth } = useContext(AuthContext);

  function handleLogout() {
    setAuth({ username: '', auth: false });
    Cookies.remove('token');
  }

  return (
    <div className="table_header">
      <div className="account_info">
        {accountIcon}
        <span className="user_name_title">sidnei.</span>
      </div>
      <Link to="/">
        <button className="logout_button" onClick={handleLogout}>
          {logout}
        </button>
      </Link>
    </div>
  );
}

export default TableHeader;
