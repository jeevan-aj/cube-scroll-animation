import { motion, useTransform } from "framer-motion";

function Cube({ images, style, rotateX, rotateY, rotateZ, scrollProgress }: { images: string[]; style?: any; rotateX: any; rotateY: any; rotateZ: any; scrollProgress: any }) {
  const gradientOpacity = scrollProgress ? useTransform(scrollProgress, [0, 0.001, 0.009], [0, 1, 0]) : 0;
  return (
    <motion.div
      className="relative w-24 h-24 preserve-3d"
      style={{
        ...style,
        rotateX,
        rotateY,
        rotateZ,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Front face */}
      <div
        className="absolute w-24 h-24 bg-cover bg-center border border-white/20"
        style={{
          // backgroundImage: `url(${images[0]})`,
          transform: "translateZ(48px)",
          backgroundColor: "red",
          color: "red",
        }}
      >
        <motion.div
          className="w-[200px] h-[200px]"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, rgba(255,215,0,0.8) 0%, transparent 70%)`,
            opacity: gradientOpacity,
            borderRadius: "50%",
          }}
        />
      </div>
      {/* Back face */}
      <div
        className="absolute w-24 h-24 bg-cover bg-center border border-white/20"
        style={{
          backgroundImage: `url(${images[1]})`,
          transform: "translateZ(-48px) rotateY(180deg)",
          backgroundColor: "green",
        }}
      />
      {/* Right face */}
      <div
        className="absolute w-24 h-24 bg-cover bg-center border border-white/20"
        style={{
          backgroundImage: `url(${images[2]})`,
          transform: "rotateY(90deg) translateZ(48px)",
          backgroundColor: "yellow",
        }}
      />
      {/* Left face */}
      <div
        className="absolute w-24 h-24 bg-cover bg-center border border-white/20"
        style={{
          backgroundImage: `url(${images[3]})`,
          transform: "rotateY(-90deg) translateZ(48px)",
          backgroundColor: "black",
        }}
      />
      {/* Top face */}
      <div
        className="absolute w-24 h-24 bg-cover bg-center border border-white/20"
        style={{
          backgroundImage: `url(${images[4]})`,
          transform: "rotateX(90deg) translateZ(48px)",
          backgroundColor: "white",
        }}
      />
      {/* Bottom face */}
      <div
        className="absolute w-24 h-24 bg-cover bg-center border border-white/20"
        style={{
          backgroundImage: `url(${images[5]})`,
          transform: "rotateX(-90deg) translateZ(48px)",
          backgroundColor: "orange",
        }}
      />
    </motion.div>
  );
}

export default Cube;
