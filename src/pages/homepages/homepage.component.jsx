import React from 'react';

import Directory from '../../components/directory/directory.component.jsx';
import { withRouter } from 'react-router-dom';



const HomePage = (props) => {
    console.log(props)
    return <div className="homepage">
        <div className="directory-menu">
            <Directory />
        </div>
    </div>
}

export default withRouter(HomePage);