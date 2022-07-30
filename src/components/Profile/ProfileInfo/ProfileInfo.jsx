import React from 'react';
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import defaultAvatar from '../../images/logo23.png';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img
        src={
          props.profile.photos.large === null
            ? defaultAvatar
            : props.profile.photos.large
        }
        alt='avatar'
      />
      <h3>Name: {props.profile.fullName}</h3>
      <p>Status:</p>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};

export default ProfileInfo;
