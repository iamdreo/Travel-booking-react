import React from 'react';
import { useSpring, animated } from 'react-spring'
import './Banner.css';

/**
 * 
 * @param {props} props //takes props as argument
 * fade in method is used to provide animation on page load for text
 * @returns returns text that displays page header
 */
const Banner = (props) => {
  const fadeIn = useSpring({ config: { duration: 3000 }, opacity: 1, from: { opacity: 0 } })
  return (

    <animated.div style={fadeIn}>
      <h1 id="banner-text">Voluptate anim aliqua voluptate.</h1>
      <h2 id="banner-text2">Ut dolore duis labore aliquip.</h2>
    </animated.div>
  )
}

export default Banner;