import PropTypes from 'prop-types';

import { getRandomHexColor } from 'components/utils';

import css from './statistics.module.css';

export default function Statistics({ title, schedule }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {schedule.map((element, index) => (
          <li
            key={element.id}
            className={css.item}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <span className={css.label}>{element.label}</span>
            <span className={css.percentage}>{element.percentage}%</span>
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
