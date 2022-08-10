import Button from "components/button";
import ProjectContext from "context/ProjetoContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Modal from "react-modal";
import api from "services/api";
import { login } from "services/auth";
import styles from './styles.module.scss';

Modal.setAppElement('#main');

function ModalLogin() {
    const router = useRouter();
    const {
        userName,
        setUserName,
        password,
        setPassword,
        isOpen,
        openOrCloseModal,
        errorLogin,
        setErrorLogin,
        setIsLoged,
    } = useContext(ProjectContext)
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#E6E6E6',
          boxShadow: '0.1rem 0.1rem 20rem black',
        },
      };
      const handleChange = ({ target }) => {
        if (target.type === 'text') {
            setUserName(target.value);
        } else {
            setPassword(target.value)
        }
      }

      const handleSignIn = async e => {
        e.preventDefault()
        if (!userName || !password) {
          setErrorLogin("Preencha e-mail e senha para continuar!");
        } else {
          try {
            const response = await api.post("https://dummyjson.com/auth/login", { username: userName, password });
            login(response.data.token);
            setIsLoged(true)
            router.push('/products')
          } catch (err) {
            setErrorLogin("Houve um problema com o login, verifique suas credenciais. T.T");
          }
        }
      };
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={openOrCloseModal}
    style={customStyles}
    ariaHideApp={false}
    contentLabel="Example Modal"
    >
      <form className={styles.content} onSubmit={handleSignIn}>
       
      <div className={`${styles.btnX} ${styles.btn}`} onClick={openOrCloseModal}></div>
        <label>
          <p className={styles.userName}>username</p>
          <input type="text" value={userName} onChange={handleChange} />
        </label>
        <label>
          <p className={styles.password}>password</p>
          <input type="password" value={password} onChange={handleChange} />
        </label>
        <Button className={styles.loginBtn} type="submit" variant='#00A4EF' />
      </form>
    </Modal>
  );
}

export default ModalLogin;
