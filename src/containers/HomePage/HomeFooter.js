import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeFooter extends Component {
    
    render() {
        
        return (
            <div className='home-footer'>
                <p>&copy; 2023 Dũng Nguyễn IT - Developer Web FullStack. More information, please visit my facebook page.
                    <a target='_blank' href='https://www.facebook.com/profile.php?id=100072223161375'>  &#8594; Click here &#8592;</a>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
