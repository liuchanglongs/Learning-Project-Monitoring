export const instrumentDOMEvents = () => {
  document.addEventListener("click", (event: PointerEvent) => {
    console.log("click", event);
  });
};

export const instrumentFetch = () => {
  const fetch = window.fetch;
  window.fetch = (...arg) => {
    console.log("拦截fetch");
    return fetch(...arg);
  };
};

// 代理 XHR 请求
export function instrumentXHR() {
  const originalXhrSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.send = function (...args) {
    console.log("Captured XHR request:", this);

    this.addEventListener("load", function () {
      console.log("XHR response received:", this);
    });
    return originalXhrSend.apply(this, args);
  };
}
