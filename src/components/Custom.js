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
      <a href={link} className="button button--block button--primary">
        {children}
      </a>
    </div>
  );
}

export function Badge({ name, link, children }) {
  return (
    <a href={link} target="_blank">
      <span className={`badge badge--${name}`}>{children}</span>
    </a>
  );
}

export function Visit({ header, children, link }) {
  return (
    <div class="card">
      <div class="card__header">
        <h3>{header}</h3>
      </div>
      <div class="card__body">
        <p>{children}</p>
      </div>
      <div class="card__footer">
        <a
          href={link}
          target="_blank"
          class="button button--primary button--block"
        >
          Visit website
        </a>
      </div>
    </div>
  );
}

// import Tabs from "@theme/Tabs";

// export function Tab({ children }) {
//   return (
//     <Tabs
//       style={{
//       }}
//     >
//       {children}
//     </Tabs>
//   );
// }
