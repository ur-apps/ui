import urappsCommonConfigs from '@ur-apps/common-fe/eslint';
import storybookPlugin from 'eslint-plugin-storybook';
import { globalIgnores } from 'eslint/config';

export default urappsCommonConfigs.concat(
  storybookPlugin.configs['flat/recommended'],
  globalIgnores(['node_modules/**/*', 'lib/**/*', 'storybook-static/**/*']),
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
