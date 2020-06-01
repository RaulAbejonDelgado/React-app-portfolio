import React from 'react';
import {Link} from 'react-router-dom';
import title from '../assets/title.png';

const Header = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                        <Link class="nav-link" to={'/'}>Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to={'/covid'}>Covid</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to={'/spoty'}>SpotyApi</Link>
                        </li>
                        {/* <li class="nav-item">
                        <Link class="nav-link" to={'/count-down'}>CountDown</Link>
                        </li> */}
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}

                    </ul>
                </div>
                <img src={title}/>
            </nav>
        </div>
    )
}

export default Header;