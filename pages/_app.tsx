import type {AppProps} from "next/app";
import {FC, Fragment} from "react";
import {SEO_CONFIG, TRANSITION_OPTIONS, TRANSITION_TIMEOUT, PROGRESS_OPTIONS} from "config";
import {DefaultSeo as DefaultSEO} from "next-seo";
import ProgressBar from "nextjs-progressbar";
import {PageTransition} from "next-page-transitions";
import "tailwindcss/tailwind.css";

const App: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <Fragment>
      <DefaultSEO {...SEO_CONFIG} />
      <ProgressBar {...PROGRESS_OPTIONS} />
      <PageTransition {...TRANSITION_OPTIONS}>
        <main>
          <Component {...pageProps} />
        </main>
      </PageTransition>
      <style jsx global>
        {`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TRANSITION_TIMEOUT}ms, transform ${TRANSITION_TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TRANSITION_TIMEOUT}ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity ${TRANSITION_TIMEOUT}ms;
          }
        `}
      </style>
    </Fragment>
  );
};

export default App;

