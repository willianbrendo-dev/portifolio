"use client";

import { useRef, useState, type PointerEvent } from "react";

const nodes = [
  {
    id: "ui",
    index: "01",
    label: "UI",
    detail: "Interfaces e fluxos de produto",
    x: "8%",
    y: "16%",
  },
  {
    id: "api",
    index: "02",
    label: "API",
    detail: "Contratos e regras no servidor",
    x: "37%",
    y: "16%",
  },
  {
    id: "auth",
    index: "03",
    label: "Auth",
    detail: "Autenticação e autorização",
    x: "68%",
    y: "16%",
  },
  {
    id: "rules",
    index: "04",
    label: "Business rules",
    detail: "Integridade e decisões de domínio",
    x: "68%",
    y: "58%",
  },
  {
    id: "data",
    index: "05",
    label: "Database",
    detail: "Modelagem, RLS e constraints",
    x: "37%",
    y: "58%",
  },
  {
    id: "integrations",
    index: "06",
    label: "Integrations",
    detail: "Pagamentos, mensageria e hardware",
    x: "8%",
    y: "58%",
  },
] as const;

export function SystemBlueprint() {
  const [activeId, setActiveId] = useState<(typeof nodes)[number]["id"]>("rules");
  const shellRef = useRef<HTMLDivElement>(null);
  const activeNode = nodes.find((node) => node.id === activeId) ?? nodes[3];

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const shell = shellRef.current;
    if (!shell) return;

    const bounds = shell.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    shell.style.setProperty("--blueprint-rotate-x", `${y * -2.5}deg`);
    shell.style.setProperty("--blueprint-rotate-y", `${x * 3.5}deg`);
  }

  function resetPerspective() {
    const shell = shellRef.current;
    if (!shell) return;
    shell.style.setProperty("--blueprint-rotate-x", "0deg");
    shell.style.setProperty("--blueprint-rotate-y", "0deg");
  }

  return (
    <figure
      ref={shellRef}
      className="blueprint-shell"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPerspective}
      aria-labelledby="blueprint-title"
    >
      <div className="blueprint-topline">
        <span id="blueprint-title">Interactive system blueprint</span>
        <span>WB/SYS-01</span>
      </div>

      <div className="blueprint-canvas">
        <svg className="blueprint-lines" viewBox="0 0 600 340" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <marker id="blueprint-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
          </defs>
          <path className="line line-one" d="M138 78 H248" markerEnd="url(#blueprint-arrow)" />
          <path className="line line-two" d="M336 78 H438" markerEnd="url(#blueprint-arrow)" />
          <path className="line line-three" d="M486 108 V204" markerEnd="url(#blueprint-arrow)" />
          <path className="line line-four" d="M438 244 H336" markerEnd="url(#blueprint-arrow)" />
          <path className="line line-five" d="M248 244 H138" markerEnd="url(#blueprint-arrow)" />
        </svg>

        {nodes.map((node) => (
          <button
            type="button"
            className={`blueprint-node ${activeId === node.id ? "is-active" : ""}`}
            style={{ left: node.x, top: node.y }}
            key={node.id}
            aria-pressed={activeId === node.id}
            onClick={() => setActiveId(node.id)}
            onFocus={() => setActiveId(node.id)}
            onPointerEnter={() => setActiveId(node.id)}
          >
            <span>{node.index}</span>
            <strong>{node.label}</strong>
          </button>
        ))}
      </div>

      <figcaption className="blueprint-status" aria-live="polite">
        <span className="status-light" aria-hidden="true" />
        <span>{activeNode.label}</span>
        <strong>{activeNode.detail}</strong>
      </figcaption>
    </figure>
  );
}
