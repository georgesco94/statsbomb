import * as d3 from 'd3';

function generateField( svg ) {
  const width = 685;
  const height = 485;
  const y = d3.range(0,height);

  const line = d3.line()
                 .x( () => {return width/2;})
                 .y( (d) => {return d;});

  const field = svg.append('rect')
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", width)
    .attr("height", height)
    .attr("class","field");

    const halfwayLine = svg.append("path")
    // .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 1)
    .attr("d", line(y));

    return field;
}

export default generateField;
