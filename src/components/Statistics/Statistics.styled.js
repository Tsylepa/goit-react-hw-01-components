import styled from '@emotion/styled';

export const Stats = styled.section`
  display: inline-block;
  border-radius: 4px;
  text-align: center;
  box-shadow: var(--shadow);
  background-color: var(--light-color);
  overflow: hidden;
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
  width: 80px;
  background-color: #${({ bgColor }) => bgColor};
  color: var(--light-color);
  padding: 10px;
`;

export const Label = styled.span`
  display: block;
  font-size: 18px;
`;

export const Percentage = styled.span`
  font-size: 36px;
`;
