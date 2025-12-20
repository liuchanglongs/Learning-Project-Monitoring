import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import * as Sentry from "@sentry/react";
import "./App.css";
Sentry.init({
  dsn: "https://fa01d3d2df23c4fc9965c8a95227dd02@o4510567683194880.ingest.de.sentry.io/4510567748665424",
  // 设置跟踪采样率, 介于 0.0 到 1.0 之间
  tracesSampleRate: 1.0,
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [
    // 用于追踪用户交互的行为
    Sentry.browserTracingIntegration(),
    // 收集性能剖析数据
    Sentry.browserProfilingIntegration(),
    // 记录用户操作和重要事件（console、XHR、导航、用户交互），用于在错误发生时重建上下文。
    Sentry.breadcrumbsIntegration(),
    // 录制用户交互、DOM 快照和回放，重现用户操作流以复现前端 bug（通常作为附加产品/包引入）。
    Sentry.replayIntegration({
      maskAllText: false,
    }),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={() => {
            throw new Error("This is your first error!");
          }}
        >
          Break the world
        </button>
        <button
          onClick={() => {
            setCount1(5);
          }}
        >
          Error
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
