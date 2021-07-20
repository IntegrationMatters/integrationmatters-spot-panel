import { faCaretDown, faCaretRight, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { TrendDirection } from '../types/trend-direction';

export class Styles {
  static getWrapperClassNames(prefix: string, height: number) {
    const wrapperClassNames: string[] = [`${prefix}-panel`];

    if (prefix === 'im-history') {
      if (height < 150) {
        wrapperClassNames.push('xxxs');
      } else if (height < 200) {
        wrapperClassNames.push('xxs');
      } else if (height < 260) {
        wrapperClassNames.push('xs');
      } else if (height < 335) {
        wrapperClassNames.push('s');
      }
    } else {
      if (height < 150) {
        wrapperClassNames.push('very-small');
      } else if (height < 200) {
        wrapperClassNames.push('small');
      }
    }

    return wrapperClassNames.join(' ');
  }

  static getTrendClassNames(operator: string, trendDirection: TrendDirection = 'positive') {
    const classNames: string[] = ['trend'];

    classNames.push(...this.addChangeOperatorClass(operator, trendDirection));

    return classNames.join(' ');
  }

  static getTrendIcon(changeOperator: string) {
    if (changeOperator === '+') {
      return faCaretUp;
    } else if (changeOperator === '-') {
      return faCaretDown;
    }

    return faCaretRight;
  }

  private static addChangeOperatorClass(operator: string, trendDirection: TrendDirection) {
    const classNames: string[] = [];

    if (operator === '+') {
      if (trendDirection === 'positive') {
        classNames.push('green');
      } else {
        classNames.push('red');
      }
    } else if (operator === '-') {
      if (trendDirection === 'positive') {
        classNames.push('red');
      } else {
        classNames.push('green');
      }
    }

    return classNames;
  }
}
