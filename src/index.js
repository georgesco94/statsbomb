import * as d3 from 'd3';
import generateField from './field';
import addReceivePoint from './receiveLocations';
import gameData from '../dist/engcroat.json';

var data = [30, 86, 168, 281, 303, 365];

const svg = d3.select("#svg");
const field = generateField(svg);
const receiveLocations = [];

gameData.forEach( event => {
  if (event.period === 1 && event.type.id === 30 && event.pass.recipient && event.pass.recipient.name === 'Jordan Henderson') {
    addReceivePoint( svg, event.location );
  }
});
