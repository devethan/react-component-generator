export default (name) =>
  `import React, {FC} from 'react';

import {View, Text} from 'react-native';

interface IProps {}
const ${name}: FC<IProps> = ({children}) => {
  return <${name}>{children}</${name}>;
};

export default ${name};`;
