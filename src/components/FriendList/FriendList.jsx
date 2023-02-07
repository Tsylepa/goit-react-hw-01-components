import { AllFriends, Friend, Status, Avatar, Name } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <AllFriends>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend key={id}>
            <Status isOnline={isOnline} />
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Friend>
        );
      })}
    </AllFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
