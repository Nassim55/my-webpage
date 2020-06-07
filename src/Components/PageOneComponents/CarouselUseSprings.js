import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

const pages = [
    'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const CarouselUseSprings = (props) => {
    const index = useRef(0);
    
    const [animationProps, set] = useSprings(props.languageLogos.length, i => ({
        x: i * window.innerWidth,
        display: 'block'
    }));
    
    const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
        if (down && distance > window.innerWidth / 2) {
            cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, props.languageLogos.length - 1)));
        };
        set(i => {
            if (i < index.current - 1 || i > index.current + 1) {
                return {display: 'none'};
            };
            const x = (i - index.current) * window.innerWidth + (down ? mx : 0);
            return { x, display: 'block' };
        });
    });

    return (
        animationProps.map(({ x, display }, i) =>(
            <animated.div
            className="swipe-card"
            {...bind()}
            key={i}
            style={{ x, display}}>
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