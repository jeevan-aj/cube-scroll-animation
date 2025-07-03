import { motion, useTransform } from "framer-motion";
import Cube from "./Cube";

// Cube face images - using placeholder images for the demo
const cubeImages = [
   "/images/cube1.png",
   "/images/cube2.png",
  "/images/cube3.png",
    "/images/cube4.png",
    "/images/cube5.png",
  "/images/cube6.png",
];

function LogoCubes({ scrollProgress,secondContainerScrollProgress }: { scrollProgress: any,secondContainerScrollProgress:any }) {
  console.log(secondContainerScrollProgress)
  // Transform logo cubes into individual cubes
  const cube1X = useTransform(scrollProgress, [0.1, 0.2], [-180, -330]);
  const cube1Y = useTransform(scrollProgress, [0.1, 0.2], [150, 0]);
  const cube2X = useTransform(scrollProgress, [0.1, 0.2], [-48, 230]);
  const cube2Y = useTransform(scrollProgress, [0.1, 0.2], [150, 5]);
  const cube3X = useTransform(scrollProgress, [0.1, 0.2], [85, -50]);
  const cube3Y = useTransform(scrollProgress, [0.1, 0.2], [150, 160]);
  const cubeOpacity = useTransform(scrollProgress, [0, 0.001, 0.2, 1, ], [0, 0.9, 1, 1, ]);

  // Scale and rotation
  const scale = useTransform(scrollProgress, [0, 0.3, 0.7], [0.3, 2, 1.5]);
  const rotateX = useTransform(scrollProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollProgress, [0, 1], [0, 720]);
  const rotateZ = useTransform(scrollProgress, [0, 1], [0, 360]);

  // Cluster position for final state
  const clusterX = useTransform(scrollProgress, [0.7, 1], [0, 0]);
  const clusterY = useTransform(scrollProgress, [0.7, 1], [0, 100]);


  const clusterIndex = useTransform(secondContainerScrollProgress,[0,0.2],[1,0])  
 console.log(clusterIndex)

  return (
    <div className="fixed top-1/4 left-1/2 flex items-center justify-center pointer-events-none z-10 perspective-1000">
      <motion.div
        className="relative"
        style={{
          scale,
          x: clusterX,
          y: clusterY,
          opacity:clusterIndex
        }}
      >
        {/* Cube 1 */}
        <motion.div
          className="absolute"
          style={{
            x: cube1X,
            y: cube1Y,
            opacity:cubeOpacity,
          }}
        >
          <Cube images={cubeImages} rotateX={rotateX} rotateY={rotateY} rotateZ={rotateZ} scrollProgress={scrollProgress} />
        </motion.div>

        {/* Cube 2 */}
        <motion.div
          className="absolute"
          style={{
            x: cube2X,
            y: cube2Y,
            opacity:cubeOpacity,
          }}
        >
          <Cube images={cubeImages} rotateX={rotateY} rotateY={rotateZ} rotateZ={rotateX} scrollProgress={scrollProgress} />
        </motion.div>

        {/* Cube 3 */}
        <motion.div
          className="absolute"
          style={{
            x: cube3X,
            y: cube3Y,
            opacity:cubeOpacity,
          }}
        >
          <Cube images={cubeImages} rotateX={rotateZ} rotateY={rotateX} rotateZ={rotateY} scrollProgress={scrollProgress} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LogoCubes;
