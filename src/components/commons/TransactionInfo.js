import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

const StyledTransactionInfo = styled.section`
  padding: 1.5rem 2rem;
  border: 1px solid #eef8fd;
  border-radius: 2px;
  background-color: #fff;
  display: flex;
  align-items: center;

  .Info__Title {
    font-size: 0.9em;
    margin: 0;
    color: #787c90;
  }

  .Info__Value {
    margin: 0;
    font-size: 1.2em;
    color: #262626;
    flex-grow: 1;
  }

  .Chart {
    border: 1px solid;
    margin-left: 1rem;
  }

  svg {
    height: 8rem;
    width: 12rem;
    margin-left: auto;
  }
`;

const drawChart = (svgElement, dataset) => {
  const SVGElement = d3.select(svgElement.current);
  const width = svgElement.current.getBoundingClientRect().width;
  const height = svgElement.current.getBoundingClientRect().height;

  dataset.forEach(data => {
    data.date = new Date(data.date);
    data.value = +data.value;
  });

  // scales
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(dataset, d => d.date))
    .range([0, width]);

  const yMax = d3.max(dataset, d => d.value);

  const yScale = d3
    .scaleLinear()
    .domain([0, yMax])
    .range([height, 0])
    .nice();

  // get area paths
  const area = d3
    .area()
    .curve(d3.curveLinear)
    .x(d => xScale(d.date))
    .y0(yScale(0))
    .y1(d => yScale(d.value));

  // define gradient
  const areaGradient = SVGElement.append('defs')
    .append('linearGradient')
    .attr('id', 'areaGradient')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '0%')
    .attr('y2', '100%');

  areaGradient
    .append('stop')
    .attr('offset', '13.13%')
    .attr('stop-color', '#0294ff')
    .attr('stop-opacity', 0.45);
  areaGradient
    .append('stop')
    .attr('offset', '80%')
    .attr('stop-color', '#fff')
    .attr('stop-opacity', 0.1);

  // append line paths to parent SVG element
  SVGElement.append('path')
    .attr('d', area(dataset))
    .attr('stroke', '#0294ff')
    .attr('stroke-width', 1)
    .attr('fill', 'url(#areaGradient)');
};

const TransactionInfo = ({ data: { dataset, title, value } }) => {
  const svgElement = useRef(null);
  useEffect(() => drawChart(svgElement, dataset), [svgElement, dataset]);

  return (
    <StyledTransactionInfo>
      <div className="Info">
        <p className="Info__Title">{title}</p>
        <p className="Info__Value">{value}</p>
      </div>
      <svg ref={svgElement}></svg>
    </StyledTransactionInfo>
  );
};

export default TransactionInfo;
