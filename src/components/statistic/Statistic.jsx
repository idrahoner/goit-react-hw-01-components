import PropTypes from 'prop-types';

export default function Statistic({ title, schedule }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {schedule.map(element => (
          <li key={element.id} className="item">
            <span className="label">{element.label}</span>
            <span className="percentage">{element.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
