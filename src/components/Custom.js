import React from "react";
import Details from "@theme/Details";
import clsx from "clsx";

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
    // <div>
    <a
      href={link}
      target="_blank"
      className="button button--block button--primary"
    >
      {children}
    </a>
    // </div>
  );
}

export function Badge({ name, link, children }) {
  return (
    <a href={link} target="_blank">
      <span className={`badge badge--${name}`}>{children}</span>
    </a>
  );
}

export function Thumb({ src, children }) {
  return (
    <div class="avatar">
      <img src={require(`@site/static/img/${src}`).default} />
      <div class="avatar__intro">{children}</div>
    </div>
  );
}

function Button({ destination, text }) {
  return (
    <a
      className={clsx("button button--primary button--outline button--lg")}
      href={destination}
      target="_blank"
    >
      {text}
    </a>
  );
}

export function Visit({ title, children, button }) {
  return (
    <div class="card">
      <div>
        <h2>{title}</h2>
      </div>
      <div class="container">
        <p>{children}</p>
      </div>
      <div className={clsx("hero__button")}>
        {Button({ destination: button.destination, text: button.text })}
      </div>
    </div>
  );
}

// NOT IN USE
// Borrowed from homotechsual
export function CodeSource({ title, text, button, className }) {
  return (
    <span className={clsx("hero__wrapper")}>
      <section
        className={clsx("post__hero hero shadow--md bordered", className)}
      >
        <div className={clsx("container")}>
          <h2 className="hero__title">{title}</h2>
          <p>{text}</p>
          <div className={clsx("hero__button")}>
            {Button({ destination: button.destination, text: button.text })}
          </div>
        </div>
      </section>
    </span>
  );
}
