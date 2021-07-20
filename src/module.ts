import { PanelPlugin } from '@grafana/data';
import { Spot } from './Spot';
import { SpotOptions } from './types/spot-options';

export const plugin = new PanelPlugin<SpotOptions>(Spot).setPanelOptions((builder) => {
  return builder.addSelect({
    path: 'status',
    name: 'Status',
    category: ['Spot configuration'],
    defaultValue: 'success',
    settings: {
      options: [
        {
          value: 'success',
          label: 'Success',
        },
        {
          value: 'warning',
          label: 'Warning',
        },
        {
          value: 'error',
          label: 'Error',
        },
        {
          value: 'timeout',
          label: 'Timeout',
        },
      ],
    },
  });
});
