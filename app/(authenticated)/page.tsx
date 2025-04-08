import { AreaChartExample } from '@/components/charts/AreaChartExample';
import { BarChartExample } from '@/components/charts/BarChartExample';
import { DonutChartExample } from '@/components/charts/DonutChartExample';
import { InteractiveExample } from '@/components/charts/InteractiveExample';
import Container from '@/components/Container';
import { ButtonsExample } from '@/components/showcase/ButtonsExample';
import { CookieCard } from '@/components/showcase/CookieCard';
import { CreateAccount } from '@/components/showcase/CreateAccount';
import FeatureSet from '@/components/showcase/FeatureSet';
import Featureset3 from '@/components/showcase/Featureset3';
import FeatureSet2 from '@/components/showcase/Featurset2';
import { Notifications } from '@/components/showcase/Notifications';

export default function Home() {
  return (
    <Container extraClasses="max-w-7xl my-10">
      <main className="grid grid-cols-1 md:grid-cols-3 items-start gap-8 mb-8">
        <CreateAccount />
        <BarChartExample />
        <div className="grid gap-4">
          <AreaChartExample />
          <ButtonsExample />
        </div>
        <Notifications />
        <CookieCard />
        <DonutChartExample />
      </main>
      <FeatureSet />
      <InteractiveExample />
      <FeatureSet2 />
      <Featureset3 />
    </Container>
  );
}
