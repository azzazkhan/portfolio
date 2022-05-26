export const TRANSITION_TIMEOUT = 400;
export const TRANSITION_OPTIONS = {
  timeout: TRANSITION_TIMEOUT,
  classNames: "page-transition",
  loadingDelay: 500,
  loadingTimeout: {
    enter: TRANSITION_TIMEOUT,
    exit: 0
  },
  loadingClassNames: "loading-indicator"
};

