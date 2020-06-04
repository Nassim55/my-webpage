import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const Carousel = () => {
    const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
    
    const bind = useDrag(({ down, movement: [mx, my]}) => {
        set({ x: down ? mx : 0, y: down ? my : 0 });
    });

    return (
        <animated.div
        {...bind()}
        className="test-use-gesture"
        style={{ x, y }}
        />
    );
};

export default Carousel;