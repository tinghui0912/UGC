import React from "react";

/**
 * Renders a string with lightweight inline emphasis:
 *   *word*    → italic
 *   **word**  → emphasis (foreground color, non-muted)
 * Keeps the approved editorial styling data-driven without JSX in the config.
 */
export default function RichText({ text, className }) {
  if (!text) return null;
  const nodes = [];
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(
        <span key={key++} className="text-foreground">
          {match[1]}
        </span>
      );
    } else if (match[2] !== undefined) {
      nodes.push(
        <span key={key++} className="italic">
          {match[2]}
        </span>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return <span className={className}>{nodes}</span>;
}