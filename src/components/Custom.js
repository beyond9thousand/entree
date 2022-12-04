import React from "react";
import Details from "@theme/Details";

export function Expand({ children, title }) {
  return (
    <Details
      summary={
        <summary
          style={{
            fontWeight: "700",
          }}
        >
          {title}
        </summary>
      }
      style={{
        backgroundColor: "var(--ifm-background-surface-color)",
        border: "transparent",
      }}
    >
      {children}
    </Details>
  );
}

export function More({ children, link }) {
  return (
    <div>
      <a href={link} class="button button--block button--primary">
        {children}
      </a>
    </div>
  );
}