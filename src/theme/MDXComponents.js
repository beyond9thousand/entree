import React from "react";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { Expand, More } from "@site/src/components/Custom";

// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  expand: Expand,
  more: More,
  tab: Tabs,
  tabitem: TabItem,
};
