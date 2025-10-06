import LiquidEther from './ui/Liquid/LiquidEther';

const ServiceHero = () => (
  <div className="relative w-full h-screen flex items-center justify-center">
    <LiquidEther
      colors={['#5227FF', '#FF9FFC', '#B19EEF']}
      mouseForce={20}
      cursorSize={100}
      isViscous={false}
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo={true}
      autoSpeed={0.5}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
    />
    <div className="absolute text-center text-black px-4">
      <h1 className="text-4xl md:text-6xl font-bold">Our Services</h1>
      <p className="mt-4 text-lg md:text-2xl">
        Advanced technology and consulting solutions for your business
      </p>
      <button className="mt-6 border border-black text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-black hover:text-white transition-all duration-300 shadow-md">
        Click Me
      </button>
    </div>
  </div>
);

export default ServiceHero;
