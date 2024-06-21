import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Nav = () => {
    return (
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid d-flex align-items-center'>
                <div className='row position-relative'>
                    <div className='col-sm-7 part2 position-static'>
                        <nav>
                            <ul className='list-list-inline'>
                                <li className='list-inline-item'>
                                    <Button component={Link} to="#">
                                        Mobile & Tablets <ArrowDropDownOutlinedIcon />
                                    </Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button component={Link} to="#">
                                        Television <ArrowDropDownOutlinedIcon />
                                    </Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button component={Link} to="#">
                                        Audio <ArrowDropDownOutlinedIcon />
                                    </Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button component={Link} to="#">
                                        Home Appliances <ArrowDropDownOutlinedIcon />
                                    </Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button component={Link} to="#">
                                        Computers <ArrowDropDownOutlinedIcon />
                                    </Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button component={Link} to="#">
                                        Cameras <ArrowDropDownOutlinedIcon />
                                    </Button>
                                </li>
                                <li className='list-inline-item position-static'>
                                    <Button component={Link} to="#">
                                        Kitchen Appliances <ArrowDropDownOutlinedIcon />
                                    </Button>
                                    <div className='megaMenu w-100'>
                                        <div className='row'>
                                            <div className='col'>
                                                <h4 className='text-g'>Mixers</h4>
                                                <ul>
                                                    <li><Link to="#">2 Jar</Link></li>
                                                    <li><Link to="#">3 Jar</Link></li>
                                                    <li><Link to="#">4 Jar</Link></li>
                                                </ul>
                                            </div>
                                            <div className='col'>
                                                <h4 className='text-g'>Cooktops</h4>
                                                <ul>
                                                <li><Link to="#">1 Burner</Link></li>
                                                    <li><Link to="#">2 Burner</Link></li>
                                                    <li><Link to="#">3 Burner</Link></li>
                                                    <li><Link to="#">4 Burner</Link></li>
                                                </ul>
                                            </div>
                                            <div className='col'>
                                                <h4 className='text-g'>Juicer</h4>
                                                <ul>
                                                    <li><Link to="#">1 Jar</Link></li>
                                                    <li><Link to="#">2 Jar</Link></li>
                                                    <li><Link to="#">3 Jar</Link></li>
                                                    <li><Link to="#">4+ Jar</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button component={Link} to="#">
                                        Personal Care <ArrowDropDownOutlinedIcon />
                                    </Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button component={Link} to="#">
                                        Accessories <ArrowDropDownOutlinedIcon />
                                    </Button>
                                    <div className='dropdown_menu'>
                                        <ul>
                                            <li><Button component={Link} to="/about">Webcams</Button></li>
                                            <li><Button component={Link} to="/about">Batteries</Button></li>
                                            <li><Button component={Link} to="/about">Power banks</Button></li>
                                            <li><Button component={Link} to="/about">Cables & cords</Button></li>
                                            <li><Button component={Link} to="/about">Charger & adapters</Button></li>
                                            <li><Button component={Link} to="/about">Bluetooth & WiFi Speakers</Button></li>
                                            <li><Button component={Link} to="/about">Computer Mouse</Button></li>
                                            <li><Button component={Link} to="/about">Routers</Button></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-sm-2 part3'></div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
