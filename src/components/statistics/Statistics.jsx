import PropTypes from 'prop-types';

export default function Statistics({ title, schedule }) {
  return (
    <section className="Statisticss">
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

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
