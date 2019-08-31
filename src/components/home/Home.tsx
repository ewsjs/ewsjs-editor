import React from 'react';
import { Stack, Text, Modal } from 'office-ui-fabric-react';

export default () => (
  <Stack horizontal padding={10} verticalFill={true} style={{border: "1px solid black"}} grow>
    <Stack.Item verticalFill={true}>Tree Component</Stack.Item>
    <Stack.Item grow>Table Component</Stack.Item>
  </Stack>
);
