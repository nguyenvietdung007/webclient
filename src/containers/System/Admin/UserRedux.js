import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {getAllCodeService} from '../../../services/userService';
import {LANGUAGES} from '../../../utils';
import * as actions from '../../../store/actions';
class UserRedux extends Component {

    constructor (props) {
        super(props);
        this.state = {
          genderArr: []
        }
    }

    async componentDidMount() {
      this.props.getGenderStart();
      //this.props.dispatch(actions.getGenderStart())
      // try{
      //   let res = await getAllCodeService('gender');
      //   if(res && res.errCode === 0){
      //     this.setState({
      //       genderArr: res.data
      //     })
      //   }
      //   console.log('dungnguyen check res: ',res)
      // }catch(e){
      //   console.log(e)
      // }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
      //render => didUpdate
      //hien tai (this) va qua khu (previous)
      //[] [3]
      //[3] [3]
      if(prevProps.genderRedux !==  this.props.genderRedux){
        this.setState({
          genderArr: this.props.genderRedux
        })
      }
    }
    render() {
      console.log('dung nguyen check state: ',this.state)
      let genders = this.state.genderArr; 
      let language = this. props. language; 
      console.log('dungit check props from redux: ',this.props.genderRedux)
      return (
            <div className='user-redux-container'>
                <div className='title'>
                    User Redux with Dung Nguyen IT
                </div>
                <div className="user-redux-body" >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'><FormattedMessage id='user-redux.add'/></div>
                        <form>
  <div class="row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4"><FormattedMessage id='user-redux.password'/></label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
    <div class="form-group col-md-6">
      <label for="firstName"><FormattedMessage id='user-redux.firstName'/></label>
      <input type="firstName" class="form-control" id="firstName" placeholder="First Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="lastName"><FormattedMessage id='user-redux.lastName'/></label>
      <input type="lastName" class="form-control" id="lastName" placeholder="Last Name"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress"><FormattedMessage id='user-redux.address'/></label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Address"/>
  </div>
  <div  className='row'>
  <div class="form-group col-md-6">
        <label for="inputState"><FormattedMessage id='user-redux.sex'/></label>
        <select name="Gender" class="form-control">
          {genders && genders.length > 0 && genders.map((item, index) => {
              return(
                <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
              )
          })}
        </select>
    </div>
    <div class="form-group col-md-6">
        <label for="inputZip"><FormattedMessage id='user-redux.role'/></label>
        <select name="RoleId" class="form-control">
            <option value="1">Admin</option>
            <option value="2">Doctor</option>
            <option value="3">Patient</option>
        </select>
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-12">
        <label for="inputPhoneNumber"><FormattedMessage id='user-redux.number'/></label>
        <input type="text" class="form-control" name="Phone Number" placeholder='Enter Your Phone Number'/>
    </div>
    </div>
    <div class='row'>
    <div class="form-group col-md-6">
      <label for="inputState"><FormattedMessage id='user-redux.position'/></label>
      <select id="inputState" class="form-control">
            <option value="1">Bác sĩ</option>
            <option value="2">Thạc sĩ</option>
            <option value="3">Tiến sĩ</option>
            <option value="1">Phó Giáo Sư</option>
            <option value="2">Giáo Sư</option>
            
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="import-image"><FormattedMessage id='user-redux.image'/></label>
      <input type="text" class="form-control" id="image" placeholder="Image"/>
    </div>
    </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
      <FormattedMessage id='user-redux.check-out'/>
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary mt-3"><FormattedMessage id='user-redux.add-new'/></button>
</form>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
      language: state.app.language,
      genderRedux: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
      getGenderStart: () => dispatch(actions.fetchGenderStart()),
      // processLogout: () => dispatch(actions.processLogout()),
      // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
