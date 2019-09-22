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

import { ConnectingIdType } from "ews-javascript-api/js/Enumerations/ConnectingIdType"
import { ExchangeVersion } from "ews-javascript-api/js/Enumerations/ExchangeVersion"

const connectingIdTypes = Object.keys(ConnectingIdType).filter((x) => isNaN(Number(x))).map(y => ({ key: y, text: y }))
const defaultConnectingIdType = ConnectingIdType[ConnectingIdType.SmtpAddress]

const exchangeVersions = Object.keys(ExchangeVersion).filter((x) => isNaN(Number(x))).map(y => ({ key: y, text: y }))
const defaultExchangeVersion = ExchangeVersion[ExchangeVersion.Exchange2013]

import { Label } from "office-ui-fabric-react/lib/Label"
import { ComboBox } from "office-ui-fabric-react/lib/ComboBox"

import useFormState from "../../../hooks/useFormState"

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

const closeWindow = () => {
  const w = window.remote.getCurrentWindow()
  w.close()
}

const formToObjet = form => Object.fromEntries(Object.entries(form).filter(([a, b]) => typeof b !== "function"))

export default () => {
  const form = useFormState({
    useAutoD: false, autodEmail: "", url: "",
    exchangeVersion: defaultExchangeVersion,
    authType: "basic", userName: "", password: "", domain: "", redirectUri: "", clientAppId: "", serverName: "", authAuthority: "",
    impersonate: false, impersonateIdType: defaultConnectingIdType, impersonateId: "",
    setAnchorMailbox: false, anchorMailboxSmtp: "",
    setPublicFolderHeader: false, publicFolderHeaderSmtp: ""
  }) as any

  const validateAndClose = async () => {
    const result = await window.ipc.callMain("validate-cred", formToObjet(form)) as any
    if (result === true) {
      closeWindow()
    }
    if (typeof result === "string") {
      const { dialog } = window.remote
      dialog.showErrorBox("Validation Error", result)
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
              defaultSelectedKey="url"
              onChange={(e, o) => form.setUseAutoDRaw(o.key === "autod")}
              options={[
                {
                  key: "autod",
                  text: "",
                  onRenderField: (props, render) => {
                    const disabled = !(props && props.checked)
                    return (
                      <>
                        <div className={optionRootClass}>
                          {render!(props)}
                          <TextField label="Autodiscover Email:" underlined styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} value={form.autodEmail} onChange={form.setAutodEmail} disabled={disabled} />
                          <DefaultButton text="Default" disabled={true} />
                        </div>
                        <Text variant="small" style={{ marginLeft: "32px" }}>Target mailbox.  Example: myuser@contoso.com</Text>
                      </>
                    )
                  },
                  styles: choiceGroupStyles,
                },
                {
                  key: "url",
                  text: "",
                  styles: choiceGroupStyles,
                  onRenderField: (props, render) => {
                    const disabled = !(props && props.checked)
                    return (
                      <>
                        <div className={optionRootClass}>
                          {render!(props)}
                          <TextField label="Service URL:" placeholder="https://" underlined styles={{ root: { flex: "1 1 auto", marginLeft: "10px" } }} value={form.url} onChange={form.setUrl} disabled={disabled} />
                          <DefaultButton text="365 Default" disabled={disabled} onClick={() => form.setUrlRaw("https://outlook.office365.com/EWS/Exchange.asmx")} />
                        </div>
                        <Text variant="small" style={{ marginLeft: "32px" }}>Example: https://mail.contoso.com/EWS/Exchange.asmx</Text>
                      </>
                    )
                  }
                },
              ]}
            />
            <br />
            <Text variant="small">Note: For Autodiscover against out of network servers such as Exchange Online, you should set disable SCP Autodiscover so that only POX will be used.  You can do this from the Global Options window.</Text>
          </Stack.Item>
          <Stack.Item styles={borderStyle}>
            <div style={{ display: "flex" }}>
              <Dropdown label="EWS Schema Version:" styles={{ root: { flex: "1 1 auto" } }} options={exchangeVersions} defaultSelectedKey={defaultExchangeVersion} onChange={(e, i) => form.setExchangeVersionRaw(i.key)} />
            </div>
            <Text block variant="small">Set the version of the EWS Schema to use.  This is not the same thing as the Exchange version.</Text>
          </Stack.Item>
          <Stack.Item styles={borderStyle} grow>
            <ChoiceGroup
              styles={{ root: { width: "100%" } }}
              onChange={(e, o) => form.setAuthTypeRaw(o.key)}
              defaultSelectedKey="basic"
              options={[
                {
                  key: "default",
                  disabled: true,
                  text: "Use Default Credential",
                },
                {
                  key: "basic",
                  text: "Use the following credentials instead of the default Windows credentials.",
                  styles: choiceGroupStyles,
                  onRenderField: (props, render) => {
                    const disabled = !(props && props.checked)
                    return (
                      <>
                        {render!(props)}
                        <div className={credentialOptionRootClass}>
                          <TextField label="User name:" underlined styles={{ root: { flex: "1 1 auto", marginLeft: "4px" } }} value={form.userName} onChange={form.setUserName} disabled={disabled} />
                          <DefaultButton text="Default" disabled={true} />
                          <TextField label="Password:" underlined type="password" styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} value={form.password} onChange={form.setPassword} disabled={disabled} />
                          <TextField label="Domain:" underlined styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} value={form.domain} onChange={form.setDomain} disabled={disabled} />
                        </div>
                        <Text variant="small">Use credentials of mailbox being accessed or the those of the EWS Impersonation account.</Text>
                        <br />
                        <Text variant="small">Suggestion: Use UPN/SMTP address and no domain for Outlook 365.</Text>
                      </>
                    )
                  }
                },
                {
                  key: "oauth",
                  text: "Use oAuth (Registration must have been completed first)",
                  styles: choiceGroupStyles,
                  onRenderField: (props, render) => {
                    const disabled = !(props && props.checked)
                    return (
                      <>
                        {render!(props)}
                        <div className={credentialOptionRootClass}>
                          <TextField label="Redirect URI:" underlined value={form.redirectUri} onChange={form.setRedirectUri} styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} disabled={disabled} />
                          <TextField label="Client App ID:" underlined value={form.clientAppId} onChange={form.setClientAppId} styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} disabled={disabled} />
                          <TextField label="Server Name:" underlined value={form.serverName} onChange={form.setServerName} styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} disabled={disabled} />
                          <TextField label="Auth Authority:" underlined value={form.authAuthority} onChange={form.setAuthAuthority} styles={{ root: { flexBasis: "100%", marginLeft: "4px" } }} disabled={disabled} />
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
            <Checkbox label="Check if using EWS Impersonation. " onChange={(e, i) => form.setImpersonateRaw(i)} />
            <Dropdown label="Id Type:" disabled={!form.impersonate} styles={{ root: { flex: "1 1 auto" } }} options={connectingIdTypes} defaultSelectedKey={defaultConnectingIdType} onChange={(e, i) => form.setImpersonateIdTypeRaw(i.key)} />
            <TextField label="Id:" underlined value={form.impersonateId} onChange={form.setImpersonateId} disabled={!form.impersonate} styles={{ root: { flexBasis: "100%" } }} />
            <br />
            <Text variant="small">Set to mailbox being accessed using EWS Impersonation.</Text>
          </Stack.Item>
          <Stack.Item styles={borderStyle}>
            <Checkbox label="Set X-AnchorMailox header." onChange={(e, i) => form.setSetAnchorMailboxRaw(i)} />
            <TextField label="SMTP:" underlined value={form.anchorMailboxSmtp} disabled={!form.setAnchorMailbox} onChange={form.setAnchorMailboxSmtp} styles={{ root: { flexBasis: "100%" } }} />
            <br />
            <Text variant="small">Normaly set to the target mailbox when using Impersonation and when accessing a public folder.</Text>
          </Stack.Item>
          <Stack.Item styles={borderStyle}>
            <Checkbox label="Set X-PublicFolderMailbox header." onChange={(e, i) => form.setSetPublicFolderHeaderRaw(i)} />
            <TextField label="SMTP:" underlined value={form.publicFolderHeaderSmtp} disabled={!form.setPublicFolderHeader} onChange={form.setPublicFolderHeaderSmtp} styles={{ root: { flexBasis: "100%" } }} />
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
              <DefaultButton style={{ width: "100px", margin: "4px" }} text="Ok" onClick={(e) => validateAndClose(e)} />
              <DefaultButton style={{ width: "100px", margin: "4px" }} text="Cancel" onClick={closeWindow} />
            </div>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  )
}
