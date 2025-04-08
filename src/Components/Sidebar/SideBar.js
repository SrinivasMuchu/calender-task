import React, { useState } from 'react'
import './SideBar.css'; // Import your CSS file for styling
import logo from '../../assets/logo.png'
import crafboard from '../../assets/crafboard.png'
import cudemo from '../../assets/cudemo.png'
import angular from '../../assets/angular.png'
 // Import your logo image
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddIcon from '@mui/icons-material/Add';

function SideBar() {
    const [openDropdown, setOpenDropdown] = useState({
        mainMenu: true,
        myPages: true
    });

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(prev => ({
            ...prev,
            [dropdownName]: !prev[dropdownName]
        }));
    };
    return (
        <div className='sidebar'>
            <div className='sidebar-logo'>
                <img src={logo} alt='' />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className='sidebar-title'>Manageko.</span>
                    <span className='sidebar-mail'>manage@gmail.com</span>
                </div>

            </div>
            <div className='sidebar-dropdowns'>
                <div className='sidebar-dropdowns-title' onClick={() => toggleDropdown('mainMenu')}>
                    <span>MAIN MENU</span>
                    <span className={`dropdown-arrow ${openDropdown.mainMenu ? 'open' : ''}`}><ExpandMoreIcon/></span>
                </div>
                {openDropdown.mainMenu && (
                    <div className='sidebar-dropdowns-list'>
                        <div className='sidebar-dropdowns-items'>
                            <SearchIcon/>
                            <span>Search</span>
                        </div>
                        <div className='sidebar-dropdowns-items'>
                            <MarkChatUnreadOutlinedIcon/>
                            <span>Notification</span>
                        </div>
                        <div className='sidebar-dropdowns-items'>
                            <DateRangeIcon/>
                            <span>Calendar</span>
                        </div>
                        <div className='sidebar-dropdowns-items'>
                            <SettingsOutlinedIcon/>
                            <span>Settings</span>
                        </div>
                    </div>
                )}
            </div>

            {/* My Pages Dropdown */}
            <div className='sidebar-dropdowns'>
                <div className='sidebar-dropdowns-title' onClick={() => toggleDropdown('myPages')}>
                    <span>MY PAGES</span>
                    <span className={`dropdown-arrow ${openDropdown.myPages ? 'open' : ''}`}><ExpandMoreIcon/></span>
                </div>
                {openDropdown.myPages && (
                    <div className='sidebar-dropdowns-list'>
                        <div className='sidebar-dropdowns-items'>
                           <img src={crafboard} alt='Crafboard' /> 
                            <span>Crafboard Project</span>
                        </div>
                        <div className='sidebar-dropdowns-items'>
                           <img src={cudemo} alt='cudemo' /> 
                            <span>Cudemo Project</span>
                        </div>
                        <div className='sidebar-dropdowns-items'>
                           <img src={angular} alt='angular' /> 
                            <span>Angular Studio</span>
                        </div>
                        <div className='sidebar-dropdowns-add' style={{ display: 'flex', alignItems: 'center',cursor: 'pointer' }}>
                            <AddIcon/>
                            <span>Create new</span>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default SideBar