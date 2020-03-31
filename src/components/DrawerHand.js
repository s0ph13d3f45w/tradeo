import React from 'react';
import { useSpring, animated } from 'react-spring'

const ProfileDos = ({isOpen, close, children}) => {
    const animation = useSpring({
        transform: isOpen 
            ? 'translate3d(20%,0,0) scale(1)'
            : 'translate3d(100%,0,0) scale(0.6)'
    })
    return (
        <animated.div className="nav-wrapper"style={animation}>
            {children}
        </animated.div>
    );
}

export default ProfileDos;