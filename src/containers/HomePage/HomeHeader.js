import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl'; // react language
import { LANGUAGES } from '../../utils/constant'

import { changeLanguageApp } from '../../store/actions'

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language); // là fire 1 cái action redux
    }

    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            <img className='header-logo' src={logo} />
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor" /></div>
                            </div>

                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-room" /></div>
                            </div>

                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>

                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i class="fa fa-question" aria-hidden="true"></i>
                                <FormattedMessage id="homeheader.support" />
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => { this.changeLanguage(LANGUAGES.VI) }}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => { this.changeLanguage(LANGUAGES.EN) }}>EN</span></div>
                        </div>
                    </div>
                </div>

                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>
                            <FormattedMessage id="banner.title1" />
                        </div>
                        <div className='title2'>
                            <FormattedMessage id="banner.title2" />
                        </div>
                        <div className='search'>
                            <i className='fas fa-search'></i>
                            <input type='text' placeholder='Tìm chuyên khoa khám bệnh' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-hospital'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child1" />
                                </div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-mobile-alt'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child2" />
                                </div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-procedures'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child3" />
                                </div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-flask'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child4" />
                                </div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-user-md'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child5" />

                                </div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-briefcase-medical'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.child6" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => { // map state của redux vào props và mình có thể sử dụng bình thường như cha truyền props sang con
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => { // khởi chạy 1 action của redux , key : arrow function => dispatch(gửi đi) -> cái tên của action đã export bên appAction.js
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
        // key của props                       // gửi tham số vào hàm đã cấu hình sẵn , và chạy actiontype bên appReducers
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
