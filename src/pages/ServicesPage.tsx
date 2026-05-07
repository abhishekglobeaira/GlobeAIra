import Services from '../components/Services';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Navigation from '../components/Navigation';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <WaveBackground />
      <FloatingShapes />
      <Navigation />
      <Services />
    </div>
  );
}
