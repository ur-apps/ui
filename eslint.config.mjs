import urappsCommonConfigs from '@ur-apps/common-fe/eslint';
import storybookPlugin from 'eslint-plugin-storybook';

export default urappsCommonConfigs.concat(storybookPlugin.configs['flat/recommended']);
