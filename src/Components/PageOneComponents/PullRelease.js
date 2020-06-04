import React from 'react';
import { useSpring, animated } from 'react-spring'
import { useDrag, useGesture } from 'react-use-gesture'

function PullRelease() {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 });
    console.log(down);
    console.log(mx);
    console.log(my);
  })

  const bind2 = useGesture(({value}) => {
      console.log(value);
  });

  return <animated.div className="test-use-gesture" {...bind2()} style={{ x, y }} />
}

export default PullRelease;