import About from '../components/About';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Navigation from '../components/Navigation';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <WaveBackground />
      <FloatingShapes />
      <Navigation />
      <About />
    </div>
  );
}
