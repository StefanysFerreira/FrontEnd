import React, { useState } from "react";
import { FaSmile, FaSmileBeam, FaSmileWink, FaStar } from "react-icons/fa";

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9'
}

function Star() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);


  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = value => {
    setHoverValue(value)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    
    <div style={styles.container}>
      <h2>Deixe sua avaliação <FaSmileWink/></h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              onClick={() => handleClick(index + 1 )}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </div>

    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}

export default Star;