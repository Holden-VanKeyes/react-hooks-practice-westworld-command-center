import React from 'react'
import { Segment } from 'semantic-ui-react'

function WestworldMap() {
  fetch('http://localhost:3001/areas')
    .then((response) => response.json())
    .then((data) => console.log(data))

  return <Segment id="map">{/* What should we render on the map? */}</Segment>
}

export default WestworldMap
