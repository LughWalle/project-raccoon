import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProjectContext from './ProjetoContext';
import getAllProducts from 'services/getProducts';
import { isAuthenticated } from 'services/auth';

function ProjectProvider({ children }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [errorLogin, setErrorLogin] = useState('');
    const [isLoged, setIsLoged] = useState(false);
    const [prods, setProd] = useState([]);

    const openOrCloseModal = () => {
        setIsOpen(!isOpen);
    }

    const allProducts = async () => {
        const response = await getAllProducts();
        setProd(response)
    }

    useEffect(() => {
        if(isAuthenticated()) {
            setIsLoged(true)
        } else {
            setIsLoged(false)
        }
        if(isLoged) {
            allProducts()
        }
    }, [isLoged])

    const data = {
        userName,
        setUserName,
        password,
        setPassword,
        isOpen,
        openOrCloseModal,
        setIsOpen,
        errorLogin,
        setErrorLogin,
        isLoged,
        setIsLoged,
        prods
    }
  return (
    <ProjectContext.Provider value={data}>
        {children}
    </ProjectContext.Provider>
  )
}

ProjectProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProjectProvider
