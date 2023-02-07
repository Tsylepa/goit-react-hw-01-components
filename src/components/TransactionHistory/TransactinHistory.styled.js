import styled from '@emotion/styled';

export const AllTransactions = styled.table`
  border-radius: 8px;
  text-align: center;
  font-size: 24px;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  td,
  th {
    border-left: 1px solid #0000000d;
    border-right: 1px solid #0000000d;
    padding: 6px 18px;
  }

  th {
    font-weight: 500;
    color: #fff;
  }
`;

export const Head = styled.thead`
  text-transform: uppercase;
  background-color: #6bb3b3;
`;

export const Body = styled.tbody`
  text-transform: capitalize;
  color: #717171;
`;

export const Transaction = styled.tr`
  :nth-child(2n) {
    background-color: #0000000d;
  }
`;
