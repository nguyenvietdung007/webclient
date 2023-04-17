import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
class Specialty extends Component {
    
    render() {
        let settings = this.props.settings;
        console.log('check settings: ',settings)
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                    <Slider {...settings}>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-specialty'/>
                    </div>
                    <div className='position text-center'>
                        <div>Bác sĩ gia đình</div>
                    </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-specialty'/>
                    </div>
                    <div className='position text-center'>
                        <div>Chấn thương chỉnh hình</div>
                    </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-specialty'/>
                    </div>
                    <div className='position text-center'>
                        <div>Chụp cắt lớp vi tính</div>
                    </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-specialty'/>
                    </div>
                    <div className='position text-center'>
                        <div>Chụp cộng hưởng từ</div>
                    </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-specialty'/>
                    </div>
                    <div className='position text-center'>
                        <div>Chuyên khoa mắt</div>
                    </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-specialty'/>
                    </div>
                    <div className='position text-center'>
                        <div>Da liễu thẩm mỹ</div>
                    </div>
                    </div>
                   </div>
                   </Slider>
                    </div>
                  
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
