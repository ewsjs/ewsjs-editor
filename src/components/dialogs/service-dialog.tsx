import React from 'react';
import { Stack, StackItem, IStackItemStyles, Dropdown, ChoiceGroup, mergeStyles, IDropdownStyles, TextField, DefaultButton, Text, Label } from 'office-ui-fabric-react';

const borderStyle: IStackItemStyles = {
  root: {
    border: "1px solid gray"
  }
}


const optionRootClass = mergeStyles({
  display: 'flex',
  flex: "1 0 auto",
  alignItems: 'center',
  justifyContent: 'space-between'
});
const dropdownStyles: Partial<IDropdownStyles> = {
  root: {
    marginBottom: 0,
    marginLeft: 5
  }
};

export default () => (
  <Stack horizontal padding={10} styles={{ root: { height: "100vh", border: "1px solid gold" } }} verticalAlign="stretch" >
    <Stack.Item styles={{ root: { minWidth: "60vw" } }}>
      <Stack padding={1} verticalFill={true} >
        <Stack.Item styles={borderStyle}>
          <ChoiceGroup styles={{root: {width: "100%"} }}
            defaultSelectedKey="A"
            options={[
              {
                key: 'A',
                text: 'Autodiscover Email:',
                onRenderField: (props, render) => {
                  return (
                    <>
                      <div className={optionRootClass}>
                        {render!(props)}
                        <TextField styles={{ root: {flex: "1 1 auto"}}} />
                        <DefaultButton text="Default" />
                      </div>
                      <Text variant="small">Text</Text>
                    </>
                  );
                },
                styles: {root: {justifyContent: "space-between"}, choiceFieldWrapper: {flex: "1"}}
              },
              {
                key: 'B',
                text: 'Service URL:',
                styles: {
                  root: {
                    border: '1px solid green'
                  }
                },
                onRenderField: (props, render) => {
                  return (
                    <div className={optionRootClass}>
                      {render!(props)}
                      <TextField />
                    </div>
                  );
                }
              },
            ]}
            // onChange={_onChange}
            // label="Pick one"
          />
          <Text variant="small">Note: For Autodiscover against out of network servers such as Exchange Online, you should set disable SCP Autodiscover so that only POX will be used.  You can do this from the Global Options window.</Text>
        </Stack.Item>
        <Stack.Item styles={borderStyle}>left middle</Stack.Item>
        <Stack.Item styles={borderStyle} grow>left bottom</Stack.Item>
      </Stack>
    </Stack.Item>
    <Stack.Item styles={{ root: { width: "40vw" } }}>
      <Stack>
        <Stack.Item styles={borderStyle}>impersonation</Stack.Item>
        <Stack.Item styles={borderStyle}>anchor mailbox</Stack.Item>
        <Stack.Item styles={borderStyle} grow>public folder</Stack.Item>
      </Stack>
    </Stack.Item>
  </Stack>
);


