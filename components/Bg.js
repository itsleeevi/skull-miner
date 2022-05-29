import { useSpring, animated } from "react-spring";
import Image from "next/image";
import skull1 from "../public/image/skull1.png";
import skull2 from "../public/image/skull2.png";
import skull3 from "../public/image/skull3.png";

const Bg = () => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: {
      mass: 10000,
      duration: 300000,
    },
  });
  const stylesReverse = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: -360 },
    config: {
      mass: 10000,
      duration: 300000,
    },
  });

  return (
    <>
      <div
        className="fixed right-1/4 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <animated.div
          style={{
            ...stylesReverse,
          }}
        >
          <Image src={skull1} height={100} width={100} />
        </animated.div>
      </div>
      <div
        className="fixed right-3/4 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <animated.div
          style={{
            ...stylesReverse,
          }}
        >
          <Image src={skull2} height={100} width={100} />
        </animated.div>
      </div>
      <div
        className="fixed right-3/4 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <animated.div
          style={{
            ...styles,
          }}
        >
          <Image src={skull3} height={100} width={100} />
        </animated.div>
      </div>
    </>
  );
};

export default Bg;
