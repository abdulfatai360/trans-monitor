import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import { orderData as dataset } from '../data/orderData';
import { summary } from '../data/summary';

const StyledOrderDetails = styled.div`
  display: flex;

  .Chart,
  .Info > div {
    border: 1px solid #eef8fd;
    border-radius: 2px;
    background-color: #fff;
  }

  .Chart {
    width: 65%;
    display: flex;
    flex-direction: column;
  }

  .Chart__Details {
    display: flex;
    justify-content: space-between;
    padding: 2.6rem 3.4rem;

    .Today {
      font-size: 1.2em;
      line-height: 21px;
      font-weight: bold;
      color: #4f4f4f;
    }

    .RangeSelector {
      margin-right: -40rem;
      border: 1px solid #dde0e3;
      border-radius: 5px;
      font-size: 0.9em;
      padding: 0.6rem 1.1rem;
      color: #7f8fa4;
      cursor: pointer;
    }

    .RangeSelector:hover {
      background: linear-gradient(0deg, #f2f4f7 0%, #ffffff 100%);
    }

    .RangeSwitcher {
      display: flex;

      span {
        border: 1px solid #ced0da;
        border-radius: 5px;
        color: #cccfd4;
        padding: 0.5rem 1rem;
        margin-left: 2rem;
        font-weight: bold;
        cursor: pointer;
      }

      span:hover {
        background: linear-gradient(0deg, #f2f4f7 0%, #ffffff 100%);
      }
    }
  }

  .Chart__Graph {
    width: 100%;
    flex-grow: 1;
  }

  .Info {
    flex-grow: 1;
  }

  .Info > div {
    margin-left: 1rem;
    padding: 3rem 2.5rem;
    padding-right: 4rem;

    h2 {
      font-size: 1em;
      color: #262626;
      font-weight: bold;
      margin-bottom: 2rem;
      text-transform: capitalize;
    }

    .Indicator {
      width: 100%;
      height: 4px;
      margin-bottom: 3rem;

      span {
        display: inline-block;
        height: 100%;
      }
    }

    p {
      font-size: 0.95em;
      color: #262626;
      margin-bottom: 0.9em;
    }
  }

  .Info > div:first-of-type {
    margin-bottom: 1rem;
  }
`;

const drawOrderChart = container => {
  const width = container.current.getBoundingClientRect().width;
  const height = container.current.getBoundingClientRect().height;

  const SVGElement = d3
    .select(container.current)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  dataset.forEach(data => {
    data.date = d3.timeParse('%Y%m%d')(data.date);

    data.date = new Date(data.date);
    data.value = +data.value;
  });

  // scales
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(dataset, d => d.date))
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, d => d.value))
    .range([height, 0]);
  // .nice();

  // console.log(d3.extent(dataset, d => d.date));

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
    .attr('offset', '100%')
    .attr('stop-color', '#0294ff')
    .attr('stop-opacity', 1);
  areaGradient
    .append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#fff')
    .attr('stop-opacity', 0.1);

  // append line paths to parent SVG element
  SVGElement.append('path')
    .attr('d', area(dataset))
    .attr('stroke', '#0294ff')
    .attr('stroke-width', 0.5)
    .attr('fill', 'url(#areaGradient)');
};

const OrderDetails = () => {
  const chartContainer = useRef(null);
  useEffect(() => drawOrderChart(chartContainer), []);

  return (
    <StyledOrderDetails>
      <div className="Chart">
        <div className="Chart__Details">
          <span className="Today">Today: 5, Aug 2018</span>
          <select className="RangeSelector">
            <option>1 Jan - 1 June</option>
            <option>1 Jan - 1 December</option>
          </select>
          <span className="RangeSwitcher">
            <span>&lt;</span>
            <span>&gt;</span>
          </span>
        </div>
        <div className="Chart__Graph" ref={chartContainer}></div>
      </div>

      <div className="Info">
        {summary.map((data, idx) => (
          <div key={idx}>
            <h2>{data.title}</h2>
            <div className="Indicator">
              <span
                style={{
                  width: `calc(${data.reconcilledOrders} / ${data.totalOrders} * 100%) `,
                  backgroundColor: data.reconcilledColor,
                }}
              ></span>
              <span
                style={{
                  width: `calc(${data.pendingOrders} / ${data.totalOrders} * 100%) `,
                  backgroundColor: data.pendingColor,
                }}
              ></span>
            </div>
            <p>
              Pending Orders:{' '}
              <span style={{ color: data.pendingColor, fontWeight: 'bold' }}>
                {data.pendingOrders}
              </span>
            </p>
            <p>
              Reconcilled Orders:{' '}
              <span
                style={{ color: data.reconcilledColor, fontWeight: 'bold' }}
              >
                {data.reconcilledOrders}
              </span>
            </p>
            <p>
              Total Orders:{' '}
              <span style={{ fontWeight: 'bold' }}>{data.totalOrders}</span>
            </p>
          </div>
        ))}
      </div>
    </StyledOrderDetails>
  );
};

export default OrderDetails;
