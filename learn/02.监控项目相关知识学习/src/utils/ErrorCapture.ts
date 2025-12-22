export const errorInit = () => {
  window.onerror = (msg: any) => {
    console.log('window.onerror:', msg)
  }

  window.onunhandledrejection = (msg: any) => {
    console.log('window.onunhandledrejection:', msg)
  }
}
