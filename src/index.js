import * as d3 from 'd3';
import generateField from './field';

var data = [30, 86, 168, 281, 303, 365];

const svg = d3.select("#svg");
const field = generateField(svg);
  // .append
  // .selectAll("div")
  // .data(data)
  //   .enter()
  //   .append("div")
  //   .style("width", function(d) { return d + "px"; })
  //   .text(function(d) { return d; });
