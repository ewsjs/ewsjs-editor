import * as React from "react"
import { useState, useEffect } from "react"
import {
  Stack, StackItem, IStackItemStyles
} from "office-ui-fabric-react/lib/Stack"

import { Dropdown, IDropdownOption, IDropdownStyles } from "office-ui-fabric-react/lib/Dropdown"
import { Text } from "office-ui-fabric-react/lib/Text"

import {
  TextField
} from "office-ui-fabric-react/lib/TextField"
import { ChoiceGroup, IChoiceGroupOptionStyles } from "office-ui-fabric-react/lib/ChoiceGroup"
import { mergeStyles } from "office-ui-fabric-react/lib/Styling"

import {
  Checkbox,
} from "office-ui-fabric-react/lib/Checkbox"

import { DefaultButton } from "office-ui-fabric-react/lib/Button"

import { Label } from "office-ui-fabric-react/lib/Label"
import { ComboBox } from "office-ui-fabric-react/lib/ComboBox"
// import { IStyle } from "office-ui-fabric-react";
// import { IStyle, Dialog,} from "office-ui-fabric-react";

import { ExchangeService, ExchangeVersion, Uri, WebCredentials, WellKnownFolderName, FolderView, ConfigurationApi } from "ews-javascript-api"
// import { XhrApi } from "@ewsjs/xhr";
import { ipcRenderer } from "electron"

const borderStyle: IStackItemStyles = {
  root: {
    border: "1px solid gray",
    padding: "10px",
  }
}

const choiceGroupStyles: IChoiceGroupOptionStyles = { root: { justifyContent: "space-between" }, choiceFieldWrapper: { flex: "1" } }

const optionRootClass = mergeStyles({
  display: "flex",
  flex: "1 0 auto",
  alignItems: "center",
  justifyContent: "space-between",
})

const credentialOptionRootClass = mergeStyles({
  display: "flex",
  flexWrap: "wrap",
  flex: "1 0 auto",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "40px",
})
const dropdownStyles: Partial<IDropdownStyles> = {
  root: {
    marginBottom: 0,
    marginLeft: 5
  }
}

async function connectEws() {
  // ConfigurationApi.ConfigureXHR(new XhrApi());
  const svc = new ExchangeService(ExchangeVersion.Exchange2013_SP1)
  svc.Url = new Uri("https://outlook.office365.com/ews/exchange.asmx")
  svc.Credentials = new WebCredentials(process.env.USER, process.env.PASSWORD)
  // svc.XHRApi = new XhrApi();
  const folders = await svc.FindFolders(WellKnownFolderName.MsgFolderRoot, new FolderView(10))
  console.log(folders.Folders.map((f) => f.DisplayName))
}

export default ({ onClose }) => {
  const [exchVersions, setExchangeVersions] = useState([{ key: "none", text: "....Loading...." }]) as any
  // connectEws();
  const defaultSelectedKey = exchVersions[0].key
  const close = () => {
    if (onClose) {
      onClose()
    }
  }
  return (
    <Stack horizontal padding={2} styles={{ root: { border: "1px solid gold" } }} verticalAlign="stretch" >
      <Stack.Item styles={{ root: { width: "60vw", flexShrink: 0 } }}>
        <Stack padding={2} verticalFill={true} style={{ textAlign: "left" }} >
          <Stack.Item styles={borderStyle}>
            <Text >Use Autodiscover or use Exchange Web Service URL directly:</Text>
            <ChoiceGroup
              styles={{ root: { width: "100%" } }}
              defaultSelectedKey="A"
              options={[
                {
                  key: "A",
                  text: "",
                  onRenderField: (props, render) => {
                    const disabled = false && !(props && props.checked)
                    return (
                      <>
                        <div className={optionRootClass}>
                          {render!(props)}
                          <TextField label="Autodiscover Email:" underlined styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} disabled={disabled} />
                          <DefaultButton text="Default" disabled={disabled} />
                        </div>
                        <Text variant="small" style={{ marginLeft: "32px" }} >Target mailbox.  Example: myuser@contoso.com</Text>
                      </>
                    )
                  },
                  styles: choiceGroupStyles,
                },
                {
                  key: "B",
                  text: "",
                  styles: choiceGroupStyles,
                  onRenderField: (props, render) => {
                    const disabled = false && !(props && props.checked)
                    return (
                      <>
                        <div className={optionRootClass}>
                          {render!(props)}
                          <TextField label="Service URL:" underlined styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} disabled={disabled} />
                          <DefaultButton text="365 Default" disabled={disabled} />
                        </div>
                        <Text variant="small" style={{ marginLeft: "32px" }} >Example: https://mail.contoso.com/EWS/Exchange.asmx</Text>
                      </>
                    )
                  }
                },
              ]}
            // onChange={_onChange}
            />
            <br />
            <Text variant="small">Note: For Autodiscover against out of network servers such as Exchange Online, you should set disable SCP Autodiscover so that only POX will be used.  You can do this from the Global Options window.</Text>
          </Stack.Item>
          <Stack.Item styles={borderStyle}>
            <div style={{ display: "flex" }}>
              <Text>EWS Schema Version:</Text>
              <Dropdown styles={{ root: { flex: "1 1 auto" } }} options={exchVersions} defaultSelectedKey={defaultSelectedKey} />
            </div>
            <Text block variant="small">Set the version of the EWS Schema to use.  This is not the same thing as the Exchange version.</Text>
          </Stack.Item>
          <Stack.Item styles={borderStyle} grow>
            <ChoiceGroup
              styles={{ root: { width: "100%" } }}
              defaultSelectedKey="A"
              options={[
                {
                  key: "A",
                  text: "Use Default Credential",
                },
                {
                  key: "B",
                  text: "Use the following credentials instead of the default Windows credentials.",
                  styles: choiceGroupStyles,
                  onRenderField: (props, render) => {
                    const disabled = false && !(props && props.checked)
                    return (
                      <>
                        {render!(props)}
                        <div className={credentialOptionRootClass}>
                          <TextField label="User name:" underlined styles={{ root: { flex: "1 1 auto", marginLeft: "4px" } }} disabled={disabled} />
                          <DefaultButton text="Default" disabled={disabled} />
                          <TextField label="Password:" underlined styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} disabled={disabled} />
                          <TextField label="Domain:" underlined styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} disabled={disabled} />
                        </div>
                        <Text variant="small">Use credentials of mailbox being accessed or the those of the EWS Impersonation account.</Text>
                        <br />
                        <Text variant="small">Suggestion: Use UPN/SMTP address and no domain for Outlook 365.</Text>
                      </>
                    )
                  }
                },
                ,
                {
                  key: "C",
                  text: "Use oAuth (Registration must have been completed first)",
                  styles: choiceGroupStyles,
                  onRenderField: (props, render) => {
                    const disabled = false && !(props && props.checked)
                    return (
                      <>
                        {render!(props)}
                        <div className={credentialOptionRootClass}>
                          <TextField label="Redirect URI:" underlined styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} disabled={disabled} />
                          <TextField label="Client App ID:" underlined styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} disabled={disabled} />
                          <TextField label="Server Name:" underlined styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} disabled={disabled} />
                          <TextField label="Auth Authority:" underlined styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} disabled={disabled} />
                        </div>
                      </>
                    )
                  }
                },
              ]}
            // onChange={_onChange}
            />
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item align="auto">
        <Stack grow verticalFill={true}>
          <Stack.Item styles={borderStyle}>
            <Checkbox label="Check if using EWS Impersonation.  " /*onChange={this._onCheckboxChange}*/ />
            <div style={{ display: "flex", marginLeft: "32px" }}>
              <Text>Id Type:</Text>
              <Dropdown styles={{ root: { flex: "1 1 auto" } }} options={exchVersions} defaultSelectedKey={defaultSelectedKey} />
            </div>
            <TextField label="Id:" underlined styles={{ root: { flexBasis: "100%", marginLeft: "20px" } }} />
            <br />
            <Text variant="small">Set to mailbox being accessed using EWS Impersonation.</Text>
          </Stack.Item>
          <Stack.Item styles={borderStyle}>
            <Checkbox label="Set X-AnchorMailox header." /*onChange={this._onCheckboxChange}*/ />
            <TextField label="SMTP:" underlined styles={{ root: { flexBasis: "100%", marginLeft: "20px" } }} />
            <br />
            <Text variant="small">Normaly set to the target mailbox when using Impersonation and when accessing a public folder.</Text>
          </Stack.Item>
          <Stack.Item styles={borderStyle}>
            <Checkbox label="Set X-PublicFolderMailbox header." /*onChange={this._onCheckboxChange}*/ />
            <TextField label="SMTP:" underlined styles={{ root: { flexBasis: "100%", marginLeft: "20px" } }} />
            <br />
            <Text variant="small">Set when accessing a public folder.</Text>
          </Stack.Item>
          <Stack.Item grow>
            <br />
            <DefaultButton style={{ width: "200px" }} text="Global Options" />
            <br />
            <Text variant="small">Note: For delegate access: Log in as the delegate then the tree menu select "Add Root Folder...".  Use one of the options to add the folder of the mailbox to the folder tree.</Text>
            <br />
            <Text variant="small">Note: It's best to set the X-AnchorMailbox header for Impersonation.</Text>
            <br style={{ flex: "1 1 100%" }} />
          </Stack.Item>
          <Stack.Item>
            <div style={{ textAlign: "right", alignSelf: "flex-end" }}>
              <DefaultButton style={{ width: "100px", margin: "4px" }} text="Ok" />
              <DefaultButton style={{ width: "100px", margin: "4px" }} text="Cancel" onClick={close} />
            </div>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  )
}

const exchangeVersions: IDropdownOption[] = [
  { key: "Exchange2013", text: "Exchange_2013" }
]
