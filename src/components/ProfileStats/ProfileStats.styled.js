import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #fbfbfb;
  border-top: 1px solid #cdcdcd;

  span {
    margin: 4px 0;
    display: block;
  }
`;

export const StatsItem = styled.li`
  width: calc(100% / ${({ qty }) => qty});

  :not(:first-of-type) {
    border-left: 1px solid #cdcdcd;
  }
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  color: initial;
  font-weight: 700;
`;
