import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  tabs: Tabs,
  tabitem: TabItem,
};
