import styled from '@emotion/styled';

export const AllTransactions = styled.table`
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  border-collapse: collapse;
  background-color: var(--light-color);
  box-shadow: var(--shadow);
  overflow: hidden;

  td,
  th {
    border-left: var(--table-border);
    border-right: var(--table-border);
    padding: 10px 30px;
  }

  th {
    font-weight: 500;
    color: var(--light-color);
  }
`;

export const Head = styled.thead`
  text-transform: uppercase;
  background-color: var(--thead-color);
`;

export const Body = styled.tbody`
  text-transform: capitalize;
  color: var(--tbody-color);
`;

export const Transaction = styled.tr`
  :nth-of-type(2n) {
    background-color: var(--table-contrast-color);
  }
`;
