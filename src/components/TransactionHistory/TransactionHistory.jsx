import {
  AllTransactions,
  Head,
  Body,
  Transaction,
} from './TransactinHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <AllTransactions>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>

      <Body>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <Transaction key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </Transaction>
          );
        })}
      </Body>
    </AllTransactions>
  );
};
