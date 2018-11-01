import * as d3 from 'd3';
import { constants } from './constants';

function generateField( svg ) {
  const width = constants.fieldWidth;
  const height = constants.fieldHeight;

  const fieldXScale = d3.scaleLinear()
                  .domain([0, constants.statsBombFieldWidth])
                  .range([0, width]);
  const fieldYScale = d3.scaleLinear()
                  .domain([0, constants.statsBombFieldHeight])
                  .range([0, height]);

  const areaWidths = fieldXScale(constants.statsBombPenaltyAreas.areaWidth);
  const areaHeights = fieldYScale(constants.statsBombPenaltyAreas.areaHeight);
  const penArea1StartX = fieldXScale(constants.statsBombPenaltyAreas.area1.x);
  const penArea1StartY = fieldYScale(constants.statsBombPenaltyAreas.area1.y);
  const penArea2StartX = fieldXScale(constants.statsBombPenaltyAreas.area2.x);
  const penArea2StartY = fieldYScale(constants.statsBombPenaltyAreas.area2.y);

  const field = svg.append('rect')
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", width)
    .attr("height", height)
    .attr("class","field");


    svg.append('line')
        .attr("x1", width/2)
        .attr("x2", width/2)
        .attr("y1", 0)
        .attr("y2", height)
        .attr("class", "line");

    svg.append('rect')
        .attr("x", penArea1StartX)
        .attr("y", penArea1StartY)
        .attr("width", areaWidths)
        .attr("height", areaHeights)
        .attr("class", "line");
    return field;
}

export default generateField;
