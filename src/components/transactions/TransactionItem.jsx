import PropTypes from 'prop-types';
import css from './TransactionItem.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={css.bodyRow}>
      <td className={css.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
