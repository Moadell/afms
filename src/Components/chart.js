import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";
import { simpleData } from "./util";
import styles from "./styles";



export class RechartsAreaChart extends Component {
  constructor() {
    super();
    this.state = {
      data: simpleData().map(({ x, y }) => ({ x, y, y1: y }))
    };
  }
  render() {
    const { data } = this.state;
    return (
      <>
      <div className="container container-short">

      <div style={styles.container}>
        <h3 style={styles.title}>Temprature</h3>
        <LineChart
          width={styles.width}
          height={styles.height}
          data={data}
          margin={{ top: 32, right: 32, left: -16, bottom: 20 }}
        >
         
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="x" />
          <YAxis />
          <Line type="monotone" dataKey="y"  stroke="#15eb1c" activeDot={{ r: 8 }}/>
          <Tooltip />
        </LineChart>
      </div>
      </div>
      </>
    );
  }
}
