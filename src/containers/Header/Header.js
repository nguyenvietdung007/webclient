import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import coviet from '../../assets/Co-Vietnam.jpg';
import coanh from '../../assets/co-anh.png';
import { LANGUAGES } from "../../utils";
import { FormattedMessage } from 'react-intl';
class Header extends Component {
    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        const { processLogout, language, userInfo} = this.props;
        console.log('check userInfo: ', userInfo)
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className='header-right'>
                    <span className='welcome'><FormattedMessage id='homeheader.welcome'/> {userInfo && userInfo.firstName && userInfo.lastName ? userInfo.firstName + " " + userInfo.lastName : ''} !</span>
                    <div className='language-vi'>
                        <div className='anh-vi'>
                            <img src={coviet}/>
                        </div>
                        <span className={language === LANGUAGES.VI ? 'vi active' : 'vi'} onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}>Việt Nam</span>
                    </div>
                    <div className='language-en'>
                        <div className='anh-en'>
                            <img src={coanh}/>
                        </div>
                        <span className={language === LANGUAGES.EN ? 'en active' : 'en'} onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}>English</span>
                    </div>
                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title = 'Log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
                
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
