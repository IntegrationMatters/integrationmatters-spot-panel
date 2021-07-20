import { AbsoluteNumbers } from './absolute-numbers';

export class Changes {
  static getChangeOperator(percentagePrevious: number, percentage: number) {
    if (!percentagePrevious && !percentage) {
      return '';
    }

    if (!percentagePrevious) {
      return '+';
    }

    if (!percentage) {
      return '-';
    }

    const change = (100 / percentagePrevious) * percentage;
    const floorChange = AbsoluteNumbers.fixNumber(change);

    if (!floorChange || floorChange === 100) {
      return '';
    }

    if (floorChange > 100 || !percentagePrevious) {
      return '+';
    }

    return '-';
  }
}
