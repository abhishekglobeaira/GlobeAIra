import Career from '../components/Career';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Navigation from '../components/Navigation';

export default function CareerPage() {
  return (
    <div className="min-h-screen">
      <WaveBackground />
      <FloatingShapes />
      <Navigation />
      <Career />
    </div>
  );
}
