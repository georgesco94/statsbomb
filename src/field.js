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

  drawPenalties( svg,fieldXScale,fieldYScale );
  svg.append('circle')
    .attr("cx", fieldXScale(60))
    .attr("cy", fieldYScale(40))
    .attr("r", 60 )
    .attr("class", 'center-circle')
  svg.append('circle')
    .attr("cx", fieldXScale(60))
    .attr("cy", fieldYScale(40))
    .attr("r", 2 )
    .attr("class", 'center-circle')
    .style("fill", 'white');

    return field;
}

function drawPenalties( svg,fieldXScale,fieldYScale ) {

  const areaWidths = fieldXScale(constants.statsBombPenaltyAreas.areaWidth);
  const areaHeights = fieldYScale(constants.statsBombPenaltyAreas.areaHeight);

  const penArea1StartX = fieldXScale(constants.statsBombPenaltyAreas.area1.x);
  const penArea1StartY = fieldYScale(constants.statsBombPenaltyAreas.area1.y);
  const penArea2StartX = fieldXScale(constants.statsBombPenaltyAreas.area2.x);
  const penArea2StartY = fieldYScale(constants.statsBombPenaltyAreas.area2.y);

  svg.append('rect')
      .attr("x", penArea1StartX)
      .attr("y", penArea1StartY)
      .attr("width", areaWidths)
      .attr("height", areaHeights)
      .attr("class", "penalty-area");
  svg.append('rect')
      .attr("x", penArea2StartX)
      .attr("y", penArea2StartY)
      .attr("width", areaWidths)
      .attr("height", areaHeights)
      .attr("class", "penalty-area");
}

export default generateField;
