export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-secondary-400/20 to-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }}></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-accent-400/20 to-warning-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-primary-300/20 to-secondary-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s', animationDuration: '9s' }}></div>
    </div>
  );
}
