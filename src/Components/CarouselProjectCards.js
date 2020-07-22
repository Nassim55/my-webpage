import React, { useState } from 'react'

import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'




const CarouselProjectCards = (props) => {
    const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -12 + Math.random() * 24, delay: i * 100 });
    const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

    const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

    // The set flags all the cards that are flicked out
    const [gone] = useState(() => new Set())
    
     // Create a bunch of springs using the helpers above
    const [animationProps, set] = useSprings(props.languageLogos.length, i => ({
        ...to(i),
        from: from(i) 
    }));
    
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({ args: [index], down, movement: [mx, my], direction: [xDir], velocity }) => {
        console.log(my)        

        // If you flick hard enough it should trigger the card to fly out
        const trigger = velocity > 0.2;

        // Direction should either point left or right
        const dir = xDir < 0 ? -1 : 1;

        // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        if (!down && trigger) gone.add(index);

        set(i => {
            // We're only interested in changing spring-data for the current spring
            if (index !== i) return;

            console.log(-15 + Math.random() * 30)

            const isGone = gone.has(index);

            // When a card is gone it flys out left or right, otherwise goes back to zero
            const x = isGone ? (200 + document.querySelector('.technology-cards-container').clientWidth) * dir : down ? mx : 0;

            const y = my;

            // How much the card tilts, flicking it harder makes it rotate faster
            const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);

            // Active cards lift up a bit
            const scale = down ? 1.1 : 1;

            return { x, y, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } };
        });
        if (!down && gone.size === props.languageLogos.length) setTimeout(() => gone.clear() || set(i => to(i)), 600);
    });

    return (
        animationProps.map(({ x, y, rot, scale }, i) =>(
            <animated.div
            className="swipe-card"
            {...bind(i)}
            key={i}
            style={{ 
                x,
                y,
                transform: interpolate([rot, scale], trans),
                touchAction: 'none'
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

export default CarouselProjectCards;