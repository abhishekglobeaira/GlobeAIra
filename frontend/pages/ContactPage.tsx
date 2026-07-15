import Contact from '../components/Contact';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Navigation from '../components/Navigation';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <WaveBackground />
      <FloatingShapes />
      <Navigation />
      <Contact />
    </div>
  );
}
