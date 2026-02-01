import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: ["#0070c7", "#36a5fa", "#10b981", "#34d399"],
        },
        links: {
          color: "#0070c7",
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: ["circle", "triangle"],
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="absolute inset-0"
      />
    </div>
  );
}
