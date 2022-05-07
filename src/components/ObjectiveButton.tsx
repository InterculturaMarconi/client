import React from 'react';
import { Link } from 'react-router-dom';

import { useClass } from '~/hooks/Styles';
import classes from '~/styles/ObjectiveButton.module.css';

interface IObjectiveButton {
    id: number;
    icon: string;
}

const ObjectiveButton: React.FC<IObjectiveButton> = ({ id, icon }) => (
    <Link to={`/obbiettivi/${id}`} className={useClass(classes['ob-button'])}>
        <img src={icon} alt={`obibettivo-${id}`} className={useClass(classes['ob-button__icon'])} />
    </Link>
);

export default ObjectiveButton;
