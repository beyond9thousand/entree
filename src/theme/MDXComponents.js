import React from "react";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {
  Expand,
  More,
  Badge,
  Visit,
  Thumb,
  CodeSource,
} from "@site/src/components/Custom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas, far);

// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  FontAwesomeIcon: FontAwesomeIcon,
  // FontAwesomeIcon: (props) => <FontAwesomeIcon size="lg" {...props} />,
  Expand,
  More,
  Tabs,
  TabItem,
  Thumb,
  Badge,
  Visit,
  CodeSource,
};
