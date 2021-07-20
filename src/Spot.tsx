import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PanelProps } from '@grafana/data';
import React from 'react';
import './Spot.scss';
import { AbsoluteNumbers } from './helper/absolute-numbers';
import { Changes } from './helper/changes';
import { DataInspector } from './helper/data-inspector';
import { Styles } from './helper/styles';
import { SpotOptions } from './types/spot-options';

export const Spot: React.FC<PanelProps<SpotOptions>> = ({ width, height, data, options }) => {
  const wrapperStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const status = options.status;

  const trendDirection = DataInspector.getTrendDirection(status);

  const total = AbsoluteNumbers.getTotal(data.series, 'total');
  const previous = AbsoluteNumbers.getTotal(data.series, 'previous');

  const changeOperator = Changes.getChangeOperator(previous, total);

  const wrapperClassNames = Styles.getWrapperClassNames('im-spot', height);
  const trendClassNames = Styles.getTrendClassNames(changeOperator, trendDirection);
  const trendIcon = Styles.getTrendIcon(changeOperator);

  return (
    <div style={wrapperStyle} className={wrapperClassNames}>
      <div className="main-text">
        <span className="percentage">{total}</span>

        <span className={trendClassNames}>
          <FontAwesomeIcon icon={trendIcon} />
        </span>
      </div>
    </div>
  );
};
