import PropTypes from 'prop-types';
import {
  Stats,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <Stats>
      <Title>{title}</Title>

      <StatList>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatItem
              key={id}
              bgColor={Math.floor(
                (Math.random() * (1 - 0.2) + 0.2) * 16777215
              ).toString(16)}
            >
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </Stats>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
