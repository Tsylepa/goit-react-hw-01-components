import PropTypes from 'prop-types';
import { StatsList, StatsItem, Label, Quantity } from './ProfileStats.styled';

export const ProfileStats = props => {
  const keys = Object.keys(props);
  return (
    <StatsList>
      {keys.map(key => {
        return (
          <StatsItem key={key}>
            <Label>{key}</Label>
            <Quantity>
              {props[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Quantity>
          </StatsItem>
        );
      })}
    </StatsList>
  );
};

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
