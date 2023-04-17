import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
class OutStandingDoctor extends Component {

    render() {
        let settings = this.props.settings;
        console.log('check settings: ',settings)
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                    <Slider {...settings}>
                   <div className='section-customize'>
                    <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-img section-outstanding-doctor'/>
                        </div>
                        <div className='position text-center'>
                            <div>Giáo sư, Tiến sĩ Dũng Nguyễn</div>
                            <div>Cơ Xương Khớp</div>
                        </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-img section-outstanding-doctor'/>
                        </div>
                        <div className='position text-center'>
                            <div>Bác sĩ Trần Minh</div>
                            <div>Chuyên Khoa II</div>
                        </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-img section-outstanding-doctor'/>
                        </div>
                        <div className='position text-center'>
                            <div>Bác sĩ Phi Tuyết Nga</div>
                            <div>Chuyên Khoa I</div>
                        </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-img section-outstanding-doctor'/>
                        </div>
                        <div className='position text-center'>
                            <div>PGS, Tiến sĩ Nguyễn Ngọc Vinh</div>
                            <div>Chuyên Khoa Sinh Sản</div>
                        </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-img section-outstanding-doctor'/>
                        </div>
                        <div className='position text-center'>
                            <div>Tiến sĩ, Bác sĩ Nguyễn Hoàng Lợi</div>
                            <div>Chuyên Khoa Răng Hàm Mặt</div>
                        </div>
                    </div>
                   </div>
                   <div className='section-customize'>
                   <div className='customize-border'>
                        <div className='outer-bg'>
                            <div className='bg-img section-outstanding-doctor'/>
                        </div>
                        <div className='position text-center'>
                            <div>PGS, Tiến sĩ Nguyễn Thái Dương</div>
                            <div>Chuyên Khoa Da Liễu</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
