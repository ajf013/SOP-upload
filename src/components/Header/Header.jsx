import React from 'react';
import Typewriter from 'typewriter-effect';
import { Icon, Checkbox } from 'semantic-ui-react';
import './Header.css';

const Header = ({ isDarkMode, toggleTheme }) => {
    return (
        <div className={`header_main ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="header_content">
                <h1 className="header_title">
                    <Typewriter
                        options={{
                            strings: ["Azure Cloud Ops SOP's", "Standard Operating Procedures", "Cloud Management"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <div className="theme_toggle">
                    <Icon name={isDarkMode ? 'moon' : 'sun'} size="large" />
                    <Checkbox toggle checked={isDarkMode} onChange={toggleTheme} />
                </div>
            </div>
        </div>
    );
};

export default Header;
