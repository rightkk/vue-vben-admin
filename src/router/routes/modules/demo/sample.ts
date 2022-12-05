import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const sample: AppRouteModule = {
  path: '/sample-demo',
  name: 'SampleDemo',
  component: LAYOUT,
  redirect: '/sample-demo/form/basic',
  meta: {
    orderNo: 20,
    icon: 'ion:aperture-outline',
    title: t('routes.demo.sample.sample'),
  },
};

export default sample;
