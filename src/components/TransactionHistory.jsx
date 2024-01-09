import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tHead}>
        <tr className={css.trHead}>
          <th className={css.thHead}>Type</th>
          <th className={css.thHead}>Amount</th>
          <th className={css.thHead}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tBody}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={css.trBody}>
              <td className={css.tdBody}>{item.type}</td>
              <td className={css.tdBody}>{item.amount}</td>
              <td className={css.tdBody}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// // <tr className={css.trBody}>
// <td className={css.tdBody}>Invoice</td>
// <td className={css.tdBody}>125</td>
// <td className={css.tdBody}>USD</td>
// </tr>
// <tr className={css.trBody}>
// <td className={css.tdBody}>Withdrawal</td>
// <td className={css.tdBody}>85</td>
// <td className={css.tdBody}>USD</td>
// </tr>
