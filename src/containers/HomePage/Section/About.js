import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
    
    render() {
        
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về DNT Clinic
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                    <iframe width="100%" height="400px" 
                    src="https://www.youtube.com/embed/21YMhbFh7Rs" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>
                    </div>
                    <div className='content-right'>
                        <p className='content1'>Trong thời đại công nghệ số hiện nay phòng khám online đang trở thành một xu hướng mới trong lĩnh 
                            vực chăm sóc sức khỏe. Điều này mang lại nhiều lợi ích cho người dân, đặc biệt là trong bối cảnh
                            đại dịch COVID-19 đang diễn ra trên toàn cầu. Dưới đây là một số lợi ích của sự ra đời phòng khám online:
                        </p>
                        <p className='content2'>
                            1. Tiết kiệm thời gian và chi phí di chuyển.
                        </p>
                        <p className='content2'>
                            2. Tiện lợi và linh hoạt.
                        </p>
                        <p className='content2'>
                            3. GIẩm nguy cơ lây nhiễm.
                        </p>
                        <p className='content2'>
                            4. Tăng cường sự tiếp cận với các dịch vụ y tế.
                        </p>
                        <p className='content2'>
                            5. Giảm chi phí cho bệnh nhân.
                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
