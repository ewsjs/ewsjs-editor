import React from "react";
import { Stack, Text, Modal } from "office-ui-fabric-react";
import SplitPane from "react-split-pane";
import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: "name", name: "Name" },
  { key: "knownNames", name: "KnownNames" },
  { key: "type", name: "Type" },
  { key: "value", name: "Value" },
  { key: "valueSmartView", name: "Value - Smart View" },
];
const rows = [];

export default () => (
  <SplitPane split="vertical" resizerClassName="splitter" minSize="30vw" >
    <div> {/* // pane 1 */}
      Tree View
    </div>
    <div> {/* // pane 2 */}
      <ReactDataGrid
        columns={columns}
        rowGetter={i => rows[i]}
        rowsCount={3}
        minHeight={150} />
    </div>
  </SplitPane>
);

const grayStyle = { backgroundColor: "#eee" };
const blueStyle = { backgroundColor: "#e0eeee" };