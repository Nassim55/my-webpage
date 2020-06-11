import React, { useRef, useState } from 'react'

import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'

const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 });
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const CarouselUseSprings = (props) => {
    const index = useRef(0);

    const [gone] = useState(() => new Set())

    const [animationProps, set] = useSprings(props.languageLogos.length, i => ({
        ...to(i),
        from: from(i) 
    }));
    
    const bind = useDrag(({ down, movement: [mx], direction: [xDir], velocity }) => {
        const trigger = velocity > 0.2;
        const dir = xDir < 0 ? -1 : 1;
        if (!down && trigger) gone.add(index.current);  
        set(i => {
            console.log(`index.current: ${index.current}, i: ${i}`)
            if (index.current !== i) return;
            const isGone = gone.has(index.current);
            const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
            const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
            const scale = down ? 1.1 : 1;
            return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } };
        });
        if (!down && gone.size === props.languageLogos.length) setTimeout(() => gone.clear() || set(i => to(i)), 600);
    });

    return (
        animationProps.map(({ x, y, rot, scale }, i) =>(
            <animated.div
            className="swipe-card"
            {...bind()}
            key={i}
            style={{ 
                x,
                y,
                transform: interpolate([rot, scale], trans)
            }}>
                <animated.div
                className="swipe-card-image"
                style={{
                    backgroundImage: `url(${props.languageLogos[i]})`
                }} />
                <animated.div className="swipe-card-title"> 
                    {props.languageTitles[i]}
                </animated.div>
            </animated.div>
        ))
    );
};

export default CarouselUseSprings;