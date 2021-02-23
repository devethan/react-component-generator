export default (name) =>
  `import React, {FC} from 'react';

import {Root} from './styles';

interface IProps {}
const ${name}: FC<IProps> = ({children}) => {
  return (
    <Root>{children}</Root>
  );
};

export default ${name};`;
