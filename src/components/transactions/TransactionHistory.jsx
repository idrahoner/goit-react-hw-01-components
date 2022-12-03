import PropTypes from 'prop-types';
import TransactionItem from 'components/transactions/TransactionItem';
import css from 'components/transactions/TransactionHistory.module.css';

export default function TransactionHistory({ list }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHead}>
        <tr className={css.headRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {list.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
