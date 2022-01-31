import {
  initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData
} from '@plasmicapp/loader-nextjs';
import Script from 'next/script'
import { PLASMIC } from '../plasmic-init';

const GA_OPTIMIZE_ID = 'OPT-M5TS8SR';
const GA_TRACKING_ID = 'UA-154582048-2';

// Statically fetch the data needed to render Plasmic pages or components.
export const getStaticProps = async () => {
  const plasmicData = await PLASMIC.fetchComponentData('/marketing');
  return {
    props: {
      plasmicData
      // ...
    }
  };
};

// Render the page or component from Plasmic.
export default function Page(props: { plasmicData: ComponentRenderData }) {
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={props.plasmicData}>
      <Script src={`https://www.googleoptimize.com/optimize.js?id=${GA_OPTIMIZE_ID}`}></Script>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></Script>
      <script
        async
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
      <PlasmicComponent component="/marketing" />
    </PlasmicRootProvider>
  );
}
