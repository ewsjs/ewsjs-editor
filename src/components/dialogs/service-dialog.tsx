import React from 'react';
import { Stack, StackItem, IStackItemStyles, Dropdown, ChoiceGroup, mergeStyles, IDropdownStyles, TextField, DefaultButton, Text, Label, IStyle, IChoiceGroupOptionStyles, ComboBox } from 'office-ui-fabric-react';

const borderStyle: IStackItemStyles = {
  root: {
    border: "1px solid gray",
    padding: "10px",
  }
}

const choiceGroupStyles: IChoiceGroupOptionStyles = { root: { justifyContent: "space-between" }, choiceFieldWrapper: { flex: "1" } };

const optionRootClass = mergeStyles({
  display: 'flex',
  flex: "1 0 auto",
  alignItems: 'center',
  justifyContent: 'space-between',
});

const credentialOptionRootClass = mergeStyles({
  display: 'flex',
  flexWrap: "wrap",
  flex: "1 0 auto",
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: "40px",
});
const dropdownStyles: Partial<IDropdownStyles> = {
  root: {
    marginBottom: 0,
    marginLeft: 5
  }
};

export default ({ exchangeVersions }) => {
  const defaultSelectedKey = exchangeVersions[0].key;
  return (
    <Stack horizontal padding={2} styles={{ root: { width: "840px", border: "1px solid gold" } }} verticalAlign="stretch" >
      <Stack.Item styles={{ root: { width: "600px" } }}>
        <Stack padding={2} verticalFill={true} style={{ textAlign: "left" }} >
          <Stack.Item styles={borderStyle}>
            <Text >Use Autodiscover or use Exchange Web Service URL directly:</Text>
            <ChoiceGroup styles={{ root: { width: "100%" } }}
              defaultSelectedKey="A"
              options={[
                {
                  key: 'A',
                  text: 'Autodiscover Email:',
                  onRenderField: (props, render) => {
                    const disabled = false && !(props && props.checked);
                    return (
                      <>
                        <div className={optionRootClass}>
                          {render!(props)}
                          <TextField styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} disabled={disabled} />
                          <DefaultButton text="Default" disabled={disabled} />
                        </div>
                        <Text variant="small" style={{ marginLeft: "150px" }} >Target mailbox.  Example: myuser@contoso.com</Text>
                      </>
                    );
                  },
                  styles: choiceGroupStyles,
                },
                {
                  key: 'B',
                  text: 'Service URL:',
                  styles: choiceGroupStyles,
                  onRenderField: (props, render) => {
                    const disabled = false && !(props && props.checked);
                    return (
                      <>
                        <div className={optionRootClass}>
                          {render!(props)}
                          <TextField styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} disabled={disabled} />
                          <DefaultButton text="365 Default" disabled={disabled} />
                        </div>
                        <Text variant="small" style={{ marginLeft: "150px" }} >Example: https://mail.contoso.com/EWS/Exchange.asmx</Text>
                      </>
                    );
                  }
                },
              ]}
            // onChange={_onChange}
            />
            <Text variant="small">Note: For Autodiscover against out of network servers such as Exchange Online, you should set disable SCP Autodiscover so that only POX will be used.  You can do this from the Global Options window.</Text>
          </Stack.Item>
          <Stack.Item styles={borderStyle}>
            <div style={{ display: "flex" }}>
              <Text>EWS Schema Version:</Text>
              <ComboBox styles={{ root: { flex: "1 1 auto" } }} options={exchangeVersions} defaultSelectedKey={defaultSelectedKey} />
            </div>
            <Text block variant="small">Note: For Autodiscover against out of network servers such as Exchange Online, you should set disable SCP Autodiscover so that only POX will be used.  You can do this from the Global Options window.</Text>
          </Stack.Item>
          <Stack.Item styles={borderStyle} grow>
            <ChoiceGroup styles={{ root: { width: "100%" } }}
              defaultSelectedKey="A"
              options={[
                {
                  key: 'A',
                  text: 'Use Default Credential',
                },
                {
                  key: 'B',
                  text: 'Use the following credentials instead of the default Windows credentials.',
                  styles: choiceGroupStyles,
                  onRenderField: (props, render) => {
                    const disabled = false && !(props && props.checked);
                    return (
                      <>
                        {render!(props)}
                        <div className={credentialOptionRootClass}>
                          <Text>User Name: </Text><TextField styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} disabled={disabled} />
                          <DefaultButton text="Default" disabled={disabled} />
                        </div>
                        <div className={credentialOptionRootClass}>
                          <Text>Password: </Text><TextField styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} disabled={disabled} />
                        </div>
                        <div className={credentialOptionRootClass}>
                          <Text>Domain: </Text><TextField styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} disabled={disabled} />
                        </div>
                        <Text variant="small">Use credentials of mailbox being accessed or the those of the EWS Impersonation account.</Text>
                        <br/>
                        <Text variant="small">Suggestion: Use UPN/SMTP address and no domain for Outlook 365.</Text>
                      </>
                    );
                  }
                },
                ,
                {
                  key: 'C',
                  text: 'Use oAuth (Registration must have been completed first)',
                  styles: choiceGroupStyles,
                  onRenderField: (props, render) => {
                    const disabled = false && !(props && props.checked);
                    return (
                      <>
                        {render!(props)}
                        <div className={credentialOptionRootClass}>
                          <Text>Redirect URI: </Text><TextField styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} disabled={disabled} />
                        </div>
                        <div className={credentialOptionRootClass}>
                          <Text>Client App ID: </Text><TextField styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} disabled={disabled} />
                        </div>
                        <div className={credentialOptionRootClass}>
                          <Text>Server name: </Text><TextField styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} disabled={disabled} />
                        </div>
                        <div className={credentialOptionRootClass}>
                          <Text>Auth Authority: </Text><TextField styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} disabled={disabled} />
                        </div>
                      </>
                    );
                  }
                },
              ]}
            // onChange={_onChange}
            />
          </Stack.Item>
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
}
