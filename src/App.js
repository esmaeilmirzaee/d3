import { useEffect, useRef } from "react";
import { select } from "d3";

import "./styles.css";

const data = [1, 5, 0, 4, 5, 6, 9, 6, 2];

export default function App() {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .style("stroke", "red")
      .style("fill", "#eee");
  }, [data]);

  return <svg ref={svgRef}></svg>;
}
