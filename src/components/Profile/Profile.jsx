import PropTypes from 'prop-types';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';
import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="user avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <ProfileStats followers={followers} views={views} likes={likes} />
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
