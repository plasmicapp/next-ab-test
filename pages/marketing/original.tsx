import {
  initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData
} from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../../plasmic-init';

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
      <PlasmicComponent component="/marketing" />
    </PlasmicRootProvider>
  );
}
