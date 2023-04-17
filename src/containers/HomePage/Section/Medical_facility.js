import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
class Medical_facility extends Component {

    render() {
        let settings = this.props.settings;
        console.log('check settings: ',settings)
        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                    <Slider {...settings}>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-medical-facility'/>
                    </div>
                    <div className='position text-center'>
                        <div>Hệ thống Y tế Thu Cúc</div>
                    </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-medical-facility'/>
                    </div>  
                    <div className='position text-center'> 
                        <div>Bệnh viện Chợ Rẫy</div>
                    </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-medical-facility'/>
                    </div>
                    <div className='position text-center'>
                        <div>Bệnh viện Hữu nghị Việt Đức</div>
                    </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-medical-facility'/>
                    </div>
                    <div className='position text-center'>
                        <div>Bệnh viện Đại học Y Dược</div>
                    </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-medical-facility'/>
                    </div>
                    <div className='position text-center'>
                        <div>Bệnh viện Đa khoa Hồng Phát</div>
                    </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                   <div className='outer-bg'>
                        <div className='bg-img section-medical-facility'/>
                    </div>
                    <div className='position text-center'>
                        <div>Phòng khám Quốc tế EXSON</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Medical_facility);
