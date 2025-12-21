import {
  colllectWebVitals,
  onLoadPerformanceFMP,
  errorInit,
  instrumentDOMEvents,
  instrumentFetch,
} from "./utils";
(() => {
  colllectWebVitals();
  onLoadPerformanceFMP();
  errorInit();
  // instrumentDOMEvents();
  instrumentFetch();
})();
const App = () => {
  return (
    <div>
      <button
        onClick={() => {
          fn();
        }}
      >
        全局错误捕获
      </button>

      <button
        onClick={() => {
          Promise.reject("onunhandledrejection-->");
        }}
      >
        onunhandledrejection
      </button>

      <button
        onClick={() => {
          console.log("this", this);

          fetch("/ll")
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        instrumentFetch
      </button>
    </div>
  );
};

export default App;
