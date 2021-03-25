export default (name) =>
  `import React, {FC} from 'react';
import {IProps} from './types';
import {Root} from './styles';

const ${name}: FC<IProps> = ({children}) => {
  return (
    <Root>{children}</Root>
  );
};

export default ${name};`;
