import styled from '@emotion/styled';

export const Stats = styled.section`
  margin: 20px;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export const Title = styled.h2`
  padding: 10px 20px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  width: calc(100% / ${({ qty }) => qty});
  background-color: #${({ bgColor }) => bgColor};
  color: #fff;
  padding: 10px;
`;

export const Label = styled.span`
  display: block;
  font-size: 18px;
`;

export const Percentage = styled.span`
  font-size: 36px;
`;
