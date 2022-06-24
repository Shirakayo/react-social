import React from "react";
import ProfileInfo from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import {getProfile} from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
      let userId = this.props.param.userId
      if (!userId) {
          userId = 2;
      }
      getProfile(userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <ProfileInfo {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}



export default connect(mapStateToProps, { setUserProfile })(
    TakeParams
);