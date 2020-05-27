import React from 'react';
import { Link } from 'react-router-dom';
import { ListTask } from './styles';

const ContentToolTipProfile = () => {
    return (
        <ListTask>
            <Link to="/Profile">
                <li>Perfil</li>
            </Link>
        </ListTask>
    );
};
export default ContentToolTipProfile;
