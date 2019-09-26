import { ExchangeCredentials, EmailAddress, Uri, StringHelper, ExchangeVersion, ImpersonatedUserId, ExchangeService, AutodiscoverLocalException, ServerBusyException, Exception, TimeZoneInfo, Guid, hasValue } from "ews-javascript-api"
import { RequestedAuthType } from "./EwsEditorServiceInstanceSettings"
import { XhrApi } from "@ewsjs/xhr"
import { createProxyUrl } from "../../utils"
import { ValidationCallbackHelper } from "./EwsHelpers/ValidationCallbackHelper"
import { app, dialog } from "electron"
import { EOL } from "os"

export class EwsProxyFactory {
  public static RequestedExchangeVersion: ExchangeVersion | null = null
  public static OverrideTimezone: boolean | null
  public static SelectedTimeZoneId: string
  public static AllowAutodiscoverRedirect: boolean | null = null
  public static EnableScpLookup: boolean | null
  public static PreAuthenticate: boolean | null
  public static ServiceCredential: ExchangeCredentials = null
  // public static ServiceNetworkCredential: NetworkCredential = null
  public static ServiceEmailAddress: EmailAddress = null
  public static EwsUrl: Uri
  public static OverrideTimeout: boolean | null
  public static Timeout: number | null = null

  public static MailboxBeingAccessed: string = StringHelper.Empty  // calculated mailbox being accessed.
  public static AccountAccessingMailbox: string = StringHelper.Empty // Who is effectively accessing the mailbox.

  public static AuthenticationMethod: RequestedAuthType = RequestedAuthType.DefaultAuth

  public static UseAutoDiscover: boolean | null = null
  public static RequestedAutodiscoverEmail: string = StringHelper.Empty
  public static RequestedExchangeServiceURL: string = StringHelper.Empty

  public static UseDefaultCredentials: boolean | null = null
  public static CredentialsUserSpecified: boolean | null = null
  public static UserName: string = StringHelper.Empty
  public static Password: string = StringHelper.Empty
  public static Domain: string = StringHelper.Empty

  public static UseoAuth: boolean | null = null
  public static oAuthRedirectUrl: string = StringHelper.Empty
  public static oAuthClientId: string = StringHelper.Empty
  public static oAuthServerName: string = StringHelper.Empty
  public static oAuthAuthority: string = StringHelper.Empty

  public static UserImpersonationSelected: boolean | null = false
  public static UserToImpersonate: ImpersonatedUserId = null
  public static ImpersonationType: string = StringHelper.Empty
  public static ImpersonatedId: string = StringHelper.Empty

  public static SetXAnchorMailbox: boolean | null = null
  public static SetXPublicFolderMailbox: boolean | null = null

  public static XAnchorMailbox: string
  public static XPublicFolderMailbox: string

  public static UserAgent: string

  public static SetDefaultProxy: boolean = false
  public static BypassProxyForLocalAddress: boolean = false
  public static SpecifyProxySettings: boolean
  public static ProxyServerName: string
  public static ProxyServerPort: number
  public static OverrideProxyCredentials: boolean
  public static ProxyServerUser: string
  public static ProxyServerPassword: string
  public static ProxyServerDomain: string

  public static AddTimeZoneContext: boolean = false
  public static SelectedTimeZoneContextId: string

  public static EnableAdditionalHeader1: boolean = false
  public static AdditionalHeader1: string
  public static AdditionalHeaderValue1: string
  public static EnableAdditionalHeader2: boolean
  public static AdditionalHeader2: string
  public static AdditionalHeaderValue2: string
  public static EnableAdditionalHeader3: boolean
  public static AdditionalHeader3: string
  public static AdditionalHeaderValue3: string

  public static async DoAutodiscover(emailAddress: EmailAddress = EwsProxyFactory.ServiceEmailAddress): Promise<void> {
    // EWSEditor.Common.EwsEditorAppSettings oSettings = new EWSEditor.Common.EwsEditorAppSettings();

    const service: ExchangeService = EwsProxyFactory.CreateExchangeService()

    //
    // Your code here

    // service.EnableScpLookup = GlobalSettings.EnableScpLookups;
    let sError: string = StringHelper.Empty

    try {
      service.AutodiscoverUrl(emailAddress.Address, ValidationCallbackHelper.RedirectionUrlValidationCallback)
      this.EwsUrl = service.Url
    } catch (exception) {
      if (exception instanceof AutodiscoverLocalException) {

        sError += `Error: ${exception.Message}${EOL}` // exception.HResult
        sError += exception.ToString()
        dialog.showErrorBox("Exception - TODO: Fix ErrorDialog in EwsProxyFactory", sError)
        // ErrorDialog.ShowError(sError)
      } else if (exception instanceof ServerBusyException) { // ServerBusyException  // 2013+
        console.log(exception)
        sError += `Error: ${exception.Message}${EOL}` // exception.HResult
        sError += `    BackOffMilliseconds: ${exception.BackOffMilliseconds}${EOL}`
        sError += `    Error Message: ${exception.Message}${EOL}`
        sError += `    Inner Error Message: ${exception.InnerException}${EOL}`
        sError += `    Stack Trace: ${exception.stack}${EOL}` // StackTrace
        sError += `    See: ${exception.Message}${EOL}` // exception.HelpLink
      } else { // System.IO.IOException oIOExceptio
        sError += `Error: ${exception.HResult}${EOL}` // exception.HResult
        sError += exception.ToString()
        dialog.showErrorBox("Exception - TODO: Fix ErrorDialog in EwsProxyFactory", sError)
        // ErrorDialog.ShowError(sError)
      }
    }
  }

  // CreateExchangeService()
  // Creates the initial service object and initializes it based-upon the class public values above.
  // This class does not create a credential object or call autodiscover.
  public static CreateExchangeService(): ExchangeService {
    let service: ExchangeService = null

    let oTimeZone: TimeZoneInfo = null

    if (EwsProxyFactory.SelectedTimeZoneId !== null) {
      if (EwsProxyFactory.OverrideTimezone === true) {
        oTimeZone = TimeZoneInfo.FindSystemTimeZoneById(EwsProxyFactory.SelectedTimeZoneId)
      }
    }

    // ServicePointManager.DefaultConnectionLimit = 10;  // Winform default is 2 connections. Need more connections?  Then increase the limit.

    // System.Diagnostics.Debug.WriteLine(" ServicePointManager.DefaultConnectionLimit: " + ServicePointManager.DefaultConnectionLimit.ToString())
    // System.Diagnostics.Debug.WriteLine(" ServicePointManager.DefaultPersistentConnectionLimit: " + ServicePointManager.DefaultPersistentConnectionLimit.ToString())

    if (hasValue(EwsProxyFactory.RequestedExchangeVersion)) {
      if (oTimeZone != null) {
        service = new ExchangeService(EwsProxyFactory.RequestedExchangeVersion, oTimeZone)
      } else {
        service = new ExchangeService(EwsProxyFactory.RequestedExchangeVersion)
      }

    } else {
      // if (oTimeZone != null)
      //    service = new ExchangeService(oTimeZone);
      // else
      //    service = new ExchangeService();

      if (oTimeZone != null) {
        service = new ExchangeService(ExchangeVersion.Exchange2010_SP2, oTimeZone)
      } else {
        service = new ExchangeService(ExchangeVersion.Exchange2010_SP2)
      }

    }

    if (EwsProxyFactory.UserAgent != null) {
      if (EwsProxyFactory.UserAgent.length !== 0) {
        service.UserAgent = EwsProxyFactory.UserAgent
      }
    }

    // service.UserAgent = UserAgent;
    // service.HttpHeaders.Add("client-request-id", Guid.NewGuid().ToString());
    // service.HttpHeaders.Add("return-client-request-id", "true");

    // EWS Tracing: http://msdn.microsoft.com/en-us/library/office/dn495632(v=exchg.150).aspx
    service.TraceEnabled = true
    service.TraceEnablePrettyPrinting = true
    console.log("TODO: Enable trace listener in EwsProxyFactory")
    // service.TraceListener = new EwsTraceListener()

    // Instrumentation settings: http://msdn.microsoft.com/en-us/library/office/dn720380(v=exchg.150).aspx
    service.ReturnClientRequestId = true  // This will give us more data back about the servers used in the response headers
    service.ClientRequestId = Guid.NewGuid().ToString()  // Set a new GUID.
    service.SendClientLatencies = true  // sends latency info which is used by Microsoft to improve EWS and Exchagne 365.

    if (EwsProxyFactory.EnableScpLookup) {
      console.log("SCP Lookup not enabled")
      // service.EnableScpLookup = EwsProxyFactory.EnableScpLookup
    }

    if (EwsProxyFactory.PreAuthenticate) {
      service.PreAuthenticate = EwsProxyFactory.PreAuthenticate
    }

    if (EwsProxyFactory.OverrideTimeout) {
      if (EwsProxyFactory.OverrideTimeout === true) {
        if (typeof EwsProxyFactory.Timeout === "number") {
          service.Timeout = EwsProxyFactory.Timeout
        }
      }
    }

    // Proxy server settings.
    if (EwsProxyFactory.SpecifyProxySettings === true) {
      // WebProxy oWebProxy = null
      // oWebProxy = new WebProxy(ProxyServerName, ProxyServerPort)

      // oWebProxy.BypassProxyOnLocal = BypassProxyForLocalAddress
      const proxyXhr = new XhrApi()

      if (EwsProxyFactory.OverrideProxyCredentials === true) {
        const proxyServer = createProxyUrl(EwsProxyFactory.ProxyServerName, EwsProxyFactory.ProxyServerPort)
        if (EwsProxyFactory.ProxyServerUser.trim().length === 0) {
          // oWebProxy.UseDefaultCredentials = true
        } else {
          if (EwsProxyFactory.ProxyServerDomain.trim().length === 0) {
            // oWebProxy.Credentials = new NetworkCredential(ProxyServerUser, ProxyServerPassword)
            proxyXhr.useProxy(proxyServer, EwsProxyFactory.ProxyServerUser, EwsProxyFactory.ProxyServerPassword)
          } else {
            proxyXhr.useProxy(proxyServer, `${EwsProxyFactory.ProxyServerDomain}\\${EwsProxyFactory.ProxyServerUser}`, EwsProxyFactory.ProxyServerPassword)
          }
        }
      } else {

        // oWebProxy.UseDefaultCredentials = true
      }
      // service.WebProxy = oWebProxy

    }

    if (EwsProxyFactory.ServiceCredential != null) {
      service.Credentials = EwsProxyFactory.ServiceCredential
    }

    if (EwsProxyFactory.EwsUrl != null) {
      service.Url = EwsProxyFactory.EwsUrl
    }

    if (hasValue(EwsProxyFactory.UseDefaultCredentials)) {
      console.log("no default credential for ews-javascript-api - nodejs limitation")
      // service.UseDefaultCredentials = EwsProxyFactory.UseDefaultCredentials
    }

    if (EwsProxyFactory.UserToImpersonate != null) {
      service.ImpersonatedUserId = EwsProxyFactory.UserToImpersonate

      // Set headers which help with affinity when Impersonation is being used against Exchange 2013 and Exchagne Online 15.
      // http://blogs.msdn.com/b/mstehle/archive/2013/07/17/more-affinity-considerations-for-exchange-online-and-exchange-2013.aspx

    }

    if (EwsProxyFactory.SetXAnchorMailbox === true) {
      service.HttpHeaders.Add("X-AnchorMailbox", EwsProxyFactory.XAnchorMailbox)
    }
    if (EwsProxyFactory.SetXPublicFolderMailbox === true) {
      service.HttpHeaders.Add("X-PublicFolderMailbox", EwsProxyFactory.XPublicFolderMailbox)
    }

    // Additional headers for service object to add to requests.
    if (EwsProxyFactory.EnableAdditionalHeader1 === true) {
      service.HttpHeaders.Add(EwsProxyFactory.AdditionalHeader1, EwsProxyFactory.AdditionalHeaderValue1)
    }
    if (EwsProxyFactory.EnableAdditionalHeader2 === true) {
      service.HttpHeaders.Add(EwsProxyFactory.AdditionalHeader2, EwsProxyFactory.AdditionalHeaderValue2)
    }
    if (EwsProxyFactory.EnableAdditionalHeader3 === true) {
      service.HttpHeaders.Add(EwsProxyFactory.AdditionalHeader3, EwsProxyFactory.AdditionalHeaderValue3)
    }

    return service
  }

}
