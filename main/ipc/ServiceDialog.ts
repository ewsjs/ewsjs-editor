import { EOL } from "os"
import { ExchangeVersion, StringHelper, Uri, ImpersonatedUserId, ConnectingIdType, EmailAddress, WebCredentials, ExchangeService } from "ews-javascript-api"
import { ipcMain } from "electron-better-ipc"
import { EwsProxyFactory } from "../ews/Common/EwsProxyFactory"
import { GlobalSettings } from "../ews/Settings/GlobalSettings"
import { RequestedAuthType, EwsEditorAppSettings } from "../ews/Common/EwsEditorServiceInstanceSettings"
import { ServiceDialogFormType } from "../../types/interfaces"
import { AuthenticationHelper } from "../ews/Common/EwsHelpers/AuthenticationHelper"
import { ExchangeServiceExtensions } from "../ews/Common/Extensions/ExchangeServiceExtensions"

/// // <summary>
/// //  This is used for adding soap headers not exposed in the EWS Managed API
/// // </summary>
/// // <param name="oRequest"></param>
function m_Service_OnSerializeCustomSoapHeaders(writer: any) { // TODO: fix this in EWS
  //  Add TimeZoneDefinition...
  //  http://blogs.msdn.com/b/emeamsgdev/archive/2014/04/23/ews-missing-soap-headers-when-using-the-ews-managed-api.aspx
  if ((EwsProxyFactory.AddTimeZoneContext === true)) {
    writer.WriteRaw(`${EOL}    <t:TimeZoneContext><t:TimeZoneDefinition Id="${GlobalSettings.SelectedTimeZoneContextId}/></t:TimeZoneContext>${EOL}`)
  }

}

export default () => {

  ipcMain.answerRenderer("validate-cred", async (form: ServiceDialogFormType) => {
    try {
      EwsProxyFactory.RequestedExchangeVersion = ExchangeVersion[form.exchangeVersion as string]

      EwsProxyFactory.OverrideTimezone = GlobalSettings.OverrideTimezone
      EwsProxyFactory.SelectedTimeZoneId = GlobalSettings.SelectedTimeZoneId

      EwsProxyFactory.AllowAutodiscoverRedirect = GlobalSettings.AllowAutodiscoverRedirect

      EwsProxyFactory.UseDefaultCredentials = form.authType === "default"
      if (form.authType === "default") {
        EwsProxyFactory.AuthenticationMethod = RequestedAuthType.DefaultAuth
      }

      EwsProxyFactory.CredentialsUserSpecified = form.authType === "basic"

      if (form.authType === "basic") {
        EwsProxyFactory.AuthenticationMethod = RequestedAuthType.SpecifiedCredentialsAuth
      }

      if (form.authType === "oauth") {
        EwsProxyFactory.AuthenticationMethod = RequestedAuthType.oAuth
      }

      // MailboxBeingAccessed
      switch (EwsProxyFactory.AuthenticationMethod) {
        case RequestedAuthType.DefaultAuth:
          throw new Error("TODO: implement default auth")
          // AutodiscoverEmailText.Text = UserPrincipal.Current.EmailAddress
          // if (this.AutodiscoverEmailText.Text.Trim().Length != 0)
          //    EwsProxyFactory.MailboxBeingAccessed = this.AutodiscoverEmailText.Text.Trim();
          break
        case RequestedAuthType.SpecifiedCredentialsAuth:
          if (!StringHelper.IsNullOrEmpty(form.autodEmail)) {
            EwsProxyFactory.MailboxBeingAccessed = form.autodEmail
          } else {
            EwsProxyFactory.MailboxBeingAccessed = form.userName
          }
          break
        case RequestedAuthType.oAuth:
          EwsProxyFactory.MailboxBeingAccessed = form.autodEmail  // override later in ewsproxyfactory
          break
      }

      if (form.autodEmail.length !== 0) {
        EwsProxyFactory.MailboxBeingAccessed = this.form.autodEmail
      }

      if (form.impersonate) { // Override
        EwsProxyFactory.MailboxBeingAccessed = form.impersonateId
      }

      EwsProxyFactory.UserImpersonationSelected = form.impersonate
      //EwsProxyFactory.UserToImpersonate = this.ImpersonatedIdTextBox.Text  // set below
      EwsProxyFactory.ImpersonationType = form.impersonateIdType
      EwsProxyFactory.ImpersonatedId = form.impersonateId

      EwsProxyFactory.UseoAuth = EwsProxyFactory.AuthenticationMethod === RequestedAuthType.oAuth
      EwsProxyFactory.oAuthRedirectUrl = form.redirectUri
      EwsProxyFactory.oAuthClientId = form.clientAppId
      EwsProxyFactory.oAuthServerName = form.serverName
      EwsProxyFactory.oAuthAuthority = form.authAuthority

      EwsProxyFactory.EnableScpLookup = GlobalSettings.EnableScpLookups
      EwsProxyFactory.PreAuthenticate = GlobalSettings.PreAuthenticate

      EwsProxyFactory.OverrideTimeout = GlobalSettings.OverrideTimeout
      EwsProxyFactory.Timeout = GlobalSettings.Timeout
      EwsProxyFactory.UserAgent = GlobalSettings.UserAgent

      EwsProxyFactory.UserName = form.userName
      // EwsProxyFactory.Password = this.txtPassword.Text.Trim();   // Don't keep.
      EwsProxyFactory.Domain = form.domain

      EwsProxyFactory.SetDefaultProxy = GlobalSettings.SetDefaultProxy
      EwsProxyFactory.BypassProxyForLocalAddress = GlobalSettings.BypassProxyForLocalAddress
      EwsProxyFactory.SpecifyProxySettings = GlobalSettings.SpecifyProxySettings
      EwsProxyFactory.ProxyServerName = GlobalSettings.ProxyServerName
      EwsProxyFactory.ProxyServerPort = GlobalSettings.ProxyServerPort
      EwsProxyFactory.OverrideProxyCredentials = GlobalSettings.OverrideProxyCredentials
      EwsProxyFactory.ProxyServerUser = GlobalSettings.ProxyServerUser
      EwsProxyFactory.ProxyServerPassword = GlobalSettings.ProxyServerPassword
      EwsProxyFactory.ProxyServerDomain = GlobalSettings.ProxyServerDomain

      EwsProxyFactory.EwsUrl = form.useAutoD ? null : new Uri(form.url)

      EwsProxyFactory.UserToImpersonate = this.ImpersonationCheck.Checked ?
        new ImpersonatedUserId(ConnectingIdType[EwsProxyFactory.ImpersonationType], EwsProxyFactory.ImpersonatedId) : null

      EwsProxyFactory.SetXAnchorMailbox = form.setAnchorMailbox
      EwsProxyFactory.XAnchorMailbox = form.anchorMailboxSmtp

      EwsProxyFactory.SetXPublicFolderMailbox = form.setPublicFolderHeader
      EwsProxyFactory.XPublicFolderMailbox = form.publicFolderHeaderSmtp

      EwsProxyFactory.EnableAdditionalHeader1 = GlobalSettings.EnableAdditionalHeader1
      EwsProxyFactory.AdditionalHeader1 = GlobalSettings.AdditionalHeader1
      EwsProxyFactory.AdditionalHeaderValue1 = GlobalSettings.AdditionalHeaderValue1
      EwsProxyFactory.EnableAdditionalHeader2 = GlobalSettings.EnableAdditionalHeader2
      EwsProxyFactory.AdditionalHeader2 = GlobalSettings.AdditionalHeader2
      EwsProxyFactory.AdditionalHeaderValue2 = GlobalSettings.AdditionalHeaderValue2
      EwsProxyFactory.EnableAdditionalHeader3 = GlobalSettings.EnableAdditionalHeader3
      EwsProxyFactory.AdditionalHeader3 = GlobalSettings.AdditionalHeader3
      EwsProxyFactory.AdditionalHeaderValue3 = GlobalSettings.AdditionalHeaderValue3

      EwsProxyFactory.AddTimeZoneContext = GlobalSettings.AddTimeZoneContext
      EwsProxyFactory.SelectedTimeZoneContextId = GlobalSettings.SelectedTimeZoneContextId

      EwsProxyFactory.ServiceEmailAddress = new EmailAddress(form.autodEmail)
      EwsProxyFactory.UseAutoDiscover = form.useAutoD

      //EwsProxyFactory.ServiceCredential = rdoCredentialsUserSpecified.Checked ?
      //   new NetworkCredential(
      //       this.txtUserName.Text.Trim(),
      //       this.txtPassword.Text.Trim(),  // This will fail on passwords ending with whitespace
      //       this.txtDomain.Text.Trim()) :
      //   null;

      // ----- Set Credentials ----
      EwsProxyFactory.ServiceCredential = null
      // EwsProxyFactory.ServiceNetworkCredential = null

      // TODO: implement default credential

      // if (rdoCredentialsDefaultWindows.Checked) {
      //   EwsProxyFactory.ServiceCredential = (NetworkCredential)CredentialCache.DefaultCredentials

      //   EwsProxyFactory.ServiceNetworkCredential = (NetworkCredential)CredentialCache.DefaultCredentials
      // }

      if (EwsProxyFactory.AuthenticationMethod === RequestedAuthType.SpecifiedCredentialsAuth) {
        const userName = StringHelper.IsNullOrEmpty(EwsProxyFactory.Domain) ? EwsProxyFactory.UserName : `${EwsProxyFactory.Domain}\\${EwsProxyFactory.UserName}`

        EwsProxyFactory.ServiceCredential = new WebCredentials(userName, form.password)

        // EwsProxyFactory.ServiceNetworkCredential = oNetworkCredential
      }

      if (EwsProxyFactory.AuthenticationMethod === RequestedAuthType.oAuth) {
        const oAH: AuthenticationHelper = new AuthenticationHelper()

        const oAuthResult = await oAH.Do_OAuth(EwsProxyFactory.oAuthAuthority, EwsProxyFactory.oAuthClientId, EwsProxyFactory.oAuthRedirectUrl, EwsProxyFactory.oAuthServerName)

        EwsProxyFactory.ServiceCredential = oAuthResult.Credentials

        EwsProxyFactory.AccountAccessingMailbox = oAuthResult.AccountAccessingMailbox
        EwsProxyFactory.MailboxBeingAccessed = oAuthResult.MailboxBeingAccessed
      }

      // ----    Autodiscover    ----

      if (EwsProxyFactory.UseAutoDiscover) {
        await EwsProxyFactory.DoAutodiscover()
      }

      // ----    New service & app settings    ----

      const CurrentService: ExchangeService = EwsProxyFactory.CreateExchangeService()

      // ----    Save settings    ----
      const oAppSettings: EwsEditorAppSettings = new EwsEditorAppSettings()
      EwsProxyFactory.SetAppSettingsFromProxyFactory(oAppSettings)
      const CurrentAppSettings = oAppSettings

      //CurrentAppSettings.MailboxBeingAccessed = EwsProxyFactory.AccountAccessingMailbox;
      // CurrentAppSettings

      // EwsProxyFactory.AccountAccessingMailbox

      // ----    Do a basic test to be sure that the mailbox can be reached with an EWS call   ----
      await ExchangeServiceExtensions.TestExchangeService(CurrentService)

      CurrentService.OnSerializeCustomSoapHeaders = m_Service_OnSerializeCustomSoapHeaders

      return true
    } catch (error) {
      console.log(error)
      return error.message
    }
  })
}