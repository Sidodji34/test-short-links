import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { loginAccount } from '../api/api';
import Modal from './modal';
import { personIcon } from '../icons/person';
import Cookie from 'js-cookie';
import AuthContext from '../context/authContext';

function LoginForm() {
  const { setAuth } = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const [error, setError] = useState(false);

  function userHandler(e) {
    setUser(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (user && password) {
      loginAccount(user, password).then((data) => {
        if (data.access_token) {
          Cookie.set('token', data.access_token);
          setModalActive(true);
          setAuth({ username: user, auth: true });
        } else {
          setError(true);
        }
      });
    }
    setUser('');
    setPassword('');
  }
  return (
    <div className="log_form">
      <h4>Authorization</h4>
      {personIcon}
      <form className="log_input" onSubmit={handleSubmit}>
        <input
          value={user}
          onFocus={() => setError(false)}
          onChange={(e) => userHandler(e)}
          className="user_login"
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onFocus={() => setError(false)}
          onChange={(e) => passwordHandler(e)}
          className="user_password"
          type="text"
          placeholder="Password"
        />
        {error && <div className="error_title">Access denied</div>}
        <button onClick={handleSubmit} className="log_button" type="submit">
          Login
        </button>
      </form>
      <Link to="registration">
        <button className="reg_button">Create Account</button>
      </Link>
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive} children={'Authorization succes'} button={'Continue'} />
      )}
    </div>
  );
}
export default LoginForm;
