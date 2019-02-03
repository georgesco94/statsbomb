import * as d3 from 'd3';
import { constants } from './constants';

function receiveLocations( svg,location ) {
  const width = constants.fieldWidth;
  const height = constants.fieldHeight;

  const fieldXScale = d3.scaleLinear()
                  .domain([0, constants.statsBombFieldWidth])
                  .range([0, width]);
  const fieldYScale = d3.scaleLinear()
                  .domain([0, constants.statsBombFieldHeight])
                  .range([0, height]);

  svg.append('circle')
    .attr("cx", fieldXScale(location[0]))
    .attr("cy", fieldYScale(location[1]))
    .attr("r", 3 )
    .attr("fill", 'red' );
}

export default receiveLocations;
