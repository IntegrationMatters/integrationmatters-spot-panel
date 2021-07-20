import { PanelPlugin } from '@grafana/data';
import { Spot } from './Spot';

export const plugin = new PanelPlugin<any>(Spot).setPanelOptions((builder) => {
  return builder;
});
