import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import { NavigationMenu } from "./NavigationMenu";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const menuTransitions = useTransition(showMenu, null, {
    from: { position: "absloute", opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absloute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <nav>
      <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />

      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className="menu">
              <NavigationMenu showMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}

      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="menuMask"
              onClick={() => {
                setShowMenu(false);
              }}
            ></animated.div>
          )
      )}
    </nav>
  );
}

export { Navigation };
