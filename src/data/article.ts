import type { ArticleSection } from "@/lib/types";

export const sections: ArticleSection[] = [
  {
    id: "opening",
    title: "What I built",
    paragraphs: [
      "RAMEN is the agent platform behind a chat product I built. I started it from an empty repository in late December 2025 and shipped it as a working product over the following four months. The system has two halves — a FastAPI backend that runs the agent loop, and a React SPA paired with a Chrome extension that gives the agent access to the user's browser. I owned both halves end-to-end: product plan, architecture, UX, implementation, and the quality work that kept it usable as it grew.",
      "Most of the decisions in this article came out of a working Notion doc that I kept alongside the code — research, dated checklists, tradeoffs, and the things that didn't work. The page below summarises the same arc, focused on the parts I was personally responsible for.",
    ],
  },
  {
    id: "agent-runtime",
    title: "The agent runtime",
    paragraphs: [
      "RAMEN started life as a single chat endpoint, but the goal was always an agent platform — configurable agents, a tool registry, multiple model providers, and room for subagents. I structured the backend around domain-driven boundaries from the first week: domain entities, use cases, repositories, presentation schemas, and infrastructure adapters, wired together through a central dependency-injection module. That separation paid off later when I added LangGraph middleware, swapped LLM providers, and introduced subagents without rewriting the API surface.",
      "The agent layer wraps LangChain and LangGraph rather than reimplementing them. I added a tool registry exposed through middleware, reasoning-effort handling for OpenAI's reasoning models, and provider-specific LLM profiles so each agent can carry its own model configuration. To force a specific tool when the product needed to, I customised LangGraph's state to mutate `tool_choice` at bind time — LangChain's built-in `LLMToolSelectorMiddleware` solves a different problem (selecting which tools the model sees), so it didn't fit.",
      "Subagents came after I read through Sydney Runkle's notes on multi-agent architectures and decided RAMEN needed delegated execution rather than orchestrated handoffs. Subagents share the same tool registry and streaming protocol as the main agent, which kept the frontend changes small.",
    ],
  },
  {
    id: "conversation-loop",
    title: "The conversation loop",
    paragraphs: [
      "Persistent, user-owned conversations are the part of the product users actually feel. I built the conversation and message APIs with cursor pagination, ownership checks, title generation, and search, and connected them to the frontend sidebar, command palette, and reopen flows. Each conversation is scoped by tenant and user, and per-user provider keys are resolved at request time so the agent always runs against the right account.",
      "Streaming was the harder problem. I designed a framework-agnostic SSE event shape — text deltas, tool calls, tool results, token usage, final state, and disconnect signals — and wired the frontend to coalesce keystroke-rate updates with `requestAnimationFrame` so the chat stays responsive under load. Aborts had to work at three layers: the user's stop button, the server's request cancellation, and the upstream provider. OpenAI streaming cancellation isn't actually feasible through the LangChain adapter, so I documented that and made sure partial responses still persist correctly when a turn is interrupted.",
    ],
  },
  {
    id: "browser-automation",
    title: "Browser automation",
    paragraphs: [
      "Letting a remote agent use the user's local browser was the single most-discussed design problem in the project. I evaluated five paths in Notion — DevTools MCP, a network tunnel, a custom bridge, an extension paired with WebSocket RPC, and a Chromium-API-driven approach — and picked the extension + WebSocket route. It kept browser permissions in the user's hand, stayed inside Chrome's security model, and let me ship a working slice without operating shared infrastructure.",
      "On the backend, I added a WebSocket relay with a one-time ticket handshake, browser-only routing safeguards, and live tool updates so the agent's view of browser state matches the user's. On the frontend, the extension surfaces controlled-tab context and writes it into ephemeral chat context so the agent can act on whatever page the user is currently looking at. I later layered a browser-use subagent on top, which delegates to a specialised browser agent through the same registry.",
    ],
  },
  {
    id: "chat-product",
    title: "The chat product",
    paragraphs: [
      "The frontend started as a tiny SPA for me to test the backend and grew into the actual product surface. I scaffolded the React app — Zustand stores, an API client with tenant and user headers, a feature-folder layout, settings pages, a command palette, conversation search, responsive sidebar behaviour, and a small feature-flag system — then iterated on the chat surface itself.",
      "Most of the chat polish lives in the composer: keyboard shortcuts, prompt suggestions, attachment chips, a slash menu, inline tab mentions with favicons, queued sends, and a stop control that maps cleanly onto the streaming-abort protocol. Markdown and Streamdown render the assistant's text; tool indicators and parallel-tool views render its actions. The smaller details — focus handling, auto-scroll, mobile layout, long-text overflow — are what make the surface feel finished.",
      "Automation visibility was its own thread. I added a CDP session indicator and a glowing frame around the controlled tab so users could see when the agent was actually driving their browser; the frame eventually became a WebGL pulsing-border shader because the CSS version felt too quiet next to the rest of the UI.",
    ],
  },
  {
    id: "quality",
    title: "Quality, security, and performance",
    paragraphs: [
      "As the agent system grew, it would have been easy to lose the basics. I added tests around domain and use-case behaviour, search repositories, streaming, and the agent services themselves, and treated the WebSocket and API-key paths as security boundaries — request-scoped ownership checks, a one-time ticket for the relay, narrow tool schemas, and a clear separation between user-injected provider keys and internal config.",
      "Performance came in passes. The streaming pipeline alone needed LLM-instance caching to avoid reconnect churn, RAF-batched store updates to keep React from re-rendering on every token, and stream coalescing so multi-tool turns render in a stable order. Memoisation and render cleanup in the message list closed the rest of the gap.",
    ],
  },
  {
    id: "next",
    title: "What's next",
    paragraphs: [
      "The Notion still has more open threads than closed ones — context compaction through middleware, generative UI for tool output, agent skills, MCP integration, and a sandbox layer for tools that need stronger isolation. The system is structured so each of those slots into an existing seam rather than forcing a rewrite, which is the part of the project I'm most happy with.",
    ],
  },
];
