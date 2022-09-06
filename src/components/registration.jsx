import { useState } from 'react';
import { createAccountIcon } from '../icons/addPerson';
import { createAccount } from '../api/api';
import Modal from './modal';

function RegistatrationForm() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [modalActive, setModalActive] = useState(false);

  function userHandler(e) {
    setUser(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  function confirmPasswordHandler(e) {
    setConfirmPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (user && password && password === passwordConfirm) {
      createAccount(user, password).then((data) => {
        if (data.ok) {
          setModalActive(true);
        }
      });
    } else {
      return;
    }
  }
  return (
    <div className="log_form">
      <h4>Create account</h4>
      {createAccountIcon}
      <form className="reg_input" onSubmit={handleSubmit}>
        <input
          value={user}
          onChange={(e) => userHandler(e)}
          className="reg_user"
          type="text"
          placeholder="Enter Username"
        />
        <input
          value={password}
          onChange={(e) => passwordHandler(e)}
          className="reg_password"
          type="text"
          placeholder="Enter Password"
        />
        <input
          value={passwordConfirm}
          onChange={(e) => confirmPasswordHandler(e)}
          className="reg_password"
          type="text"
          placeholder="Confirm Password"
        />
        <button onClick={handleSubmit} className="confirm_button">
          Confirm
        </button>
      </form>
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive} children={'Registration succes'} button={'Confirm'} />
      )}
    </div>
  );
}

export default RegistatrationForm;
