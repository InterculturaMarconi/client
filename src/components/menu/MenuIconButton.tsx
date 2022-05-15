import React from 'react';
import { Link } from 'react-router-dom';
import { useImage } from '~/hooks/Image';

const MenuIconButton: React.FC = () => {
    return (
        <Link to="/">
            <img src={useImage('Logo_Marconi_Vet.svg')} height={45} alt="" />
        </Link>
    );
};

export default MenuIconButton;
