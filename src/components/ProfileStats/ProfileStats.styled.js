import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: var(--table-contrast-color);
  border-top: var(--table-border);

  span {
    margin: 4px 0;
    display: block;
  }
`;

export const StatsItem = styled.li`
  width: 80px;

  :not(:first-of-type) {
    border-left: var(--table-border);
  }
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  color: initial;
  font-weight: 700;
`;
