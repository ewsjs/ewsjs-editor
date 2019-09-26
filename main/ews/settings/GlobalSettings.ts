
import Store from "electron-store"
import { StringHelper } from "ews-javascript-api"
import { app } from "electron"
import path from "path"

export class GlobalSettings {
  private static store: Store = new Store();
  //  Defined registry value names
  private /* const */ static REG_KEY_APP_KEY_PATH: string = "Software\\Microsoft\\EWSEditor\\"

  /**
   * Gets or sets a bool indicating if the debug log be saved to a file
   *
   */
  public static get ShouldSaveLogToFile(): boolean {
    return GlobalSettings.store.get("ShouldSaveDebugOutput", true)
  }
  public static set ShouldSaveLogToFile(value: boolean) {
    GlobalSettings.store.set("ShouldSaveDebugOutput", value)
  }

  /**
   * Gets or sets the file path where the debug log should be saved
   *
   */
  public static get LogFilePath(): string {
    let filePath = GlobalSettings.store.get("DebugOutputFile", null)
    //  If there is no UserSetting set a default
    if (StringHelper.IsNullOrEmpty(filePath)) {
      //  Try to get the MyDocuments folder
      filePath = app.getPath("documents")
      if (!StringHelper.IsNullOrEmpty(filePath)) {
        filePath = path.join(filePath, "ewseditor.log")
      }

      //  If we can't get the MyDocuments folder then just try the temp folder and pray for rain
      if (StringHelper.IsNullOrEmpty(filePath)) {
        filePath = path.join(app.getPath("temp"), "ewseditor.log")
      }

      GlobalSettings.store.set("DebugOutputFile", filePath)
    }

    return GlobalSettings.store.get("DebugOutputFile")
  }
  public static set LogFilePath(value: string) {
    GlobalSettings.store.set("DebugOutputFile", value)
  }

  /**
   * Defines the default page size used when issuing a CalendarView call
   */
  public static get CalendarViewSize(): number {
    return GlobalSettings.store.get("CalendarViewSize", 50)
  }
  public static set CalendarViewSize(value: number) {
    GlobalSettings.store.set("CalendarViewSize", value)
  }

  /**
   * Defines the default page size used when issuing a FindFolder call
   */
  public static get FindFolderViewSize(): number {
    return GlobalSettings.store.get("FindFolderViewSize", 50)
  }
  public static set FindFolderViewSize(value: number) {
    GlobalSettings.store.set("FindFolderViewSize", value)
  }

  /**
   * Defines the default page size used when issuing a FindItem call
   */
  public static get FindItemViewSize(): number {
    return GlobalSettings.store.get("FindItemViewSize", 50)
  }
  public static set FindItemViewSize(value: number) {
    GlobalSettings.store.set("FindItemViewSize", value)
  }

  /**
   * Defines the default page size used when dumping folder contents
   */
  public static get DumpFolderViewSize(): number {
    return GlobalSettings.store.get("DumpFolderViewSize", 50)
  }
  public static set DumpFolderViewSize(value: number) {
    GlobalSettings.store.set("DumpFolderViewSize", value)
  }

  /**
   * Gets or sets a bool to override SSL certificate validation when sending requests to an Exchange CAS server.  This is useful for test environments that rarely have valid certificates.
   */
  public static get OverrideCertValidation(): boolean {
    return GlobalSettings.store.get("OverrideCertValidation", true)
  }
  public static set OverrideCertValidation(value: boolean) {
    GlobalSettings.store.set("OverrideCertValidation", value)
  }

  /**
   * Gets or sets a bool indicating if detailed SSL certification information should be written to the log
   */
  public static get EnableSslDetailLogging(): boolean {
    return GlobalSettings.store.get("EnableSslDetailLogging", false)
  }
  public static set EnableSslDetailLogging(value: boolean) {
    GlobalSettings.store.set("EnableSslDetailLogging", value)
  }

  /**
   * Gets or sets a bool to allow following 302 redirects when performing Autodiscover
   */
  public static get AllowAutodiscoverRedirect(): boolean {
    return GlobalSettings.store.get("AllowAutodiscoverRedirect", true)
  }
  public static set AllowAutodiscoverRedirect(value: boolean) {
    GlobalSettings.store.set("AllowAutodiscoverRedirect", value)
  }

  /**
   * Enables SCP Lookups used for Autodisocver
   */
  public static get EnableScpLookups(): boolean {
    return GlobalSettings.store.get("EnableScpLookups", false)
  }
  public static set EnableScpLookups(value: boolean) {
    GlobalSettings.store.set("EnableScpLookups", value)
  }

  /**
   * Enables PreAuthenticate used for EWS calls.
   */
  public static get PreAuthenticate(): boolean {
    return GlobalSettings.store.get("PreAuthenticate", false)
  }
  public static set PreAuthenticate(value: boolean) {
    GlobalSettings.store.set("PreAuthenticate", value)
  }

  /**
   * Gets or sets a bool to show the splash screen when EWSEditor is starting
   */
  public static get ShowSplash(): boolean {
    return GlobalSettings.store.get("ShowSplash", true)
  }
  public static set ShowSplash(value: boolean) {
    GlobalSettings.store.set("ShowSplash", value)
  }

  /**
   * This string will be used as the UserAgent header value for all requests sent from EWSEditor
   */
  public static get UserAgent(): string {
    return GlobalSettings.store.get("UserAgent", "EWSEditor")
  }
  public static set UserAgent(value: string) {
    GlobalSettings.store.set("UserAgent", value)
  }

  /**
   * This bool indicates if the client timezone should be overrridden on the service object.
   */
  public static get OverrideTimezone(): boolean {
    return GlobalSettings.store.get("OverrideTimezone", false)
  }
  public static set OverrideTimezone(value: boolean) {
    GlobalSettings.store.set("OverrideTimezone", value)
  }

  /**
   * This bool indicates if the client timezone should be overrridden on the service object.
   */
  public static get SelectedTimeZoneId(): string {
    return GlobalSettings.store.get("SelectedTimeZoneId", null)
  }
  public static set SelectedTimeZoneId(value: string) {
    GlobalSettings.store.set("SelectedTimeZoneId", value)
  }

  /**
   * This indicates if the timeout should be overriden on the session object.
   */
  public static get OverrideTimeout(): boolean {
    return GlobalSettings.store.get("OverrideTimeout", false)
  }
  public static set OverrideTimeout(value: boolean) {
    GlobalSettings.store.set("OverrideTimeout", value)
  }

  /**
   * This integer sets the timeout override on the session object sent from EWSEditor
   */
  public static get Timeout(): number {
    return GlobalSettings.store.get("Timeout", 100000)
  }
  public static set Timeout(value: number) {
    GlobalSettings.store.set("Timeout", value)
  }

  /**
   * Gets or sets a bool to override to indicate that the WebProxy settings should be overridden and set to the respose to getdefaultproxy
   */
  public static get SetDefaultProxy(): boolean {
    return GlobalSettings.store.get("SetDefaultProxy", false)
  }
  public static set SetDefaultProxy(value: boolean) {
    GlobalSettings.store.set("SetDefaultProxy", value)
  }

  /**
   * Gets or sets a bool to override to indicate that the WebProxy settings should be overridden.
   */
  public static get SpecifyProxySettings(): boolean {
    return GlobalSettings.store.get("SpecifyProxySettings", false)
  }
  public static set SpecifyProxySettings(value: boolean) {
    GlobalSettings.store.set("SpecifyProxySettings", value)
  }

  /**
   * Gets or sets the override proxy server name
   */
  public static get ProxyServerName(): string {
    return GlobalSettings.store.get("ProxyServerName", "127.0.0.1")
  }
  public static set ProxyServerName(value: string) {
    GlobalSettings.store.set("ProxyServerName", value)
  }

  /**
   * Gets or sets the override proxy server name
   */
  public static get ProxyServerPort(): number {
    return GlobalSettings.store.get("ProxyServerPort", 8888)
  }
  public static set ProxyServerPort(value: number) {
    GlobalSettings.store.set("ProxyServerPort", value)
  }

  /**
   * Gets or sets a bool to override to indicate that the WebProxy settings should Bypass the proxy for a local address
   */
  public static get BypassProxyForLocalAddress(): boolean {
    return GlobalSettings.store.get("BypassProxyForLocalAddress", false)
  }
  public static set BypassProxyForLocalAddress(value: boolean) {
    GlobalSettings.store.set("BypassProxyForLocalAddress", value)
  }

  /**
   * Gets or sets a bool to override to indicate that the WebProxy credentials should be overridden.
   */
  public static get OverrideProxyCredentials(): boolean {
    return GlobalSettings.store.get("OverrideProxyCredentials", false)
  }
  public static set OverrideProxyCredentials(value: boolean) {
    GlobalSettings.store.set("OverrideProxyCredentials", value)
  }

  /**
   * Gets or sets the override proxy user
   */
  public static get ProxyServerUser(): string {
    return GlobalSettings.store.get("ProxyServerUser", null)
  }
  public static set ProxyServerUser(value: string) {
    GlobalSettings.store.set("ProxyServerUser", value)
  }

  /**
   * Gets or sets the override proxy password
   */
  public static get ProxyServerPassword(): string {
    return GlobalSettings.store.get("ProxyServerPassword", null)
  }
  public static set ProxyServerPassword(value: string) {
    GlobalSettings.store.set("ProxyServerPassword", value)
  }

  /**
   * Gets or sets the override proxy domain
   */
  public static get ProxyServerDomain(): string {
    return GlobalSettings.store.get("ProxyServerDomain", null)
  }
  public static set ProxyServerDomain(value: string) {
    GlobalSettings.store.set("ProxyServerDomain", value)
  }

  /**
   * Gets or sets a bool to override to indicate that the TimeZoneContext should be set. This is not set by the EWS Managed API if the server version is past 2007 SP1.
   */
  public static get AddTimeZoneContext(): boolean {
    return GlobalSettings.store.get("AddTimeZoneContext", false)
  }
  public static set AddTimeZoneContext(value: boolean) {
    GlobalSettings.store.set("AddTimeZoneContext", value)
  }

  /**
   * This bool indicates if the client timezone Contex should be overrridden on the service object.
   */
  public static get SelectedTimeZoneContextId(): string {
    return GlobalSettings.store.get("SelectedTimeZoneContextId", null)
  }
  public static set SelectedTimeZoneContextId(value: string) {
    GlobalSettings.store.set("SelectedTimeZoneContextId", value)
  }

  // 
  // this.chkAdditionalHeader1.Text = GlobalSettings.EnableAdditionalHeader1;
  // this.txtAdditionalHeader1.Text = GlobalSettings.AdditionalHeader1;
  // this.txtAdditionalHeaderValue1.Text = GlobalSettings.AdditionalHeaderValue1;
  // this.chkAdditionalHeader2.Text = GlobalSettings.EnableAdditionalHeader2;
  // this.txtAdditionalHeader2.Text = GlobalSettings.AdditionalHeader2;
  // this.txtAdditionalHeaderValue2.Text = GlobalSettings.AdditionalHeaderValue2;
  // this.chkAdditionalHeader3.Text = GlobalSettings.EnableAdditionalHeader3;
  // this.txtAdditionalHeader3.Text = GlobalSettings.AdditionalHeader3;
  // this.txtAdditionalHeaderValue3.Text = GlobalSettings.AdditionalHeaderValue3;

  /**
   * Enables setting of Additional Header 1
   */
  public static get EnableAdditionalHeader1(): boolean {
    return GlobalSettings.store.get("EnableAdditionalHeader1", false)
  }
  public static set EnableAdditionalHeader1(value: boolean) {
    GlobalSettings.store.set("EnableAdditionalHeader1", value)
  }

  /**
   * Gets or sets Additional Header 1
   */
  public static get AdditionalHeader1(): string {
    return GlobalSettings.store.get("AdditionalHeader1", null)
  }
  public static set AdditionalHeader1(value: string) {
    GlobalSettings.store.set("AdditionalHeader1", value)
  }

  /**
   * Gets or sets Additional Header Value 1
   */
  public static get AdditionalHeaderValue1(): string {
    return GlobalSettings.store.get("AdditionalHeaderValue1", null)
  }
  public static set AdditionalHeaderValue1(value: string) {
    GlobalSettings.store.set("AdditionalHeaderValue1", value)
  }

  /**
   * Enables setting of Additional Header 2
   */
  public static get EnableAdditionalHeader2(): boolean {
    return GlobalSettings.store.get("EnableAdditionalHeader2", false)
  }
  public static set EnableAdditionalHeader2(value: boolean) {
    GlobalSettings.store.set("EnableAdditionalHeader2", value)
  }

  /**
   * Gets or sets Additional Header 2
   */
  public static get AdditionalHeader2(): string {
    return GlobalSettings.store.get("AdditionalHeader2", null)
  }
  public static set AdditionalHeader2(value: string) {
    GlobalSettings.store.set("AdditionalHeader2", value)
  }

  /**
   * Gets or sets Additional Header Value 2
   */
  public static get AdditionalHeaderValue2(): string {
    return GlobalSettings.store.get("AdditionalHeaderValue2", null)
  }
  public static set AdditionalHeaderValue2(value: string) {
    GlobalSettings.store.set("AdditionalHeaderValue2", value)
  }

  /**
   * Enables setting of Additional Header 3
   */
  public static get EnableAdditionalHeader3(): boolean {
    return GlobalSettings.store.get("EnableAdditionalHeader3", false)
  }
  public static set EnableAdditionalHeader3(value: boolean) {
    GlobalSettings.store.set("EnableAdditionalHeader3", value)
  }

  /**
   * Gets or sets Additional Header 3
   */
  public static get AdditionalHeader3(): string {
    return GlobalSettings.store.get("AdditionalHeader3", null)
  }
  public static set AdditionalHeader3(value: string) {
    GlobalSettings.store.set("AdditionalHeader3", value)
  }

  /**
   * Gets or sets Additional Header Value 3
   */
  public static get AdditionalHeaderValue3(): string {
    return GlobalSettings.store.get("AdditionalHeaderValue3", null)
  }
  public static set AdditionalHeaderValue3(value: string) {
    GlobalSettings.store.set("AdditionalHeaderValue3", value)
  }

  // TODO: implement secure storage of keys into Windows credential or keychain on macOS
  // private static GetAppRegKey(writable: boolean): RegistryKey {
  //   let appRegKey: RegistryKey = Registry.CurrentUser.OpenSubKey(REG_KEY_APP_KEY_PATH, writable)
  //   if ((appRegKey == null)) {
  //     let softRegKey: RegistryKey = Registry.CurrentUser.OpenSubKey("Software")
  //     if ((softRegKey == null)) {
  //       DebugLog.WriteVerbose("Couldn't find HKCU\Software")
  //       throw new KeyNotFoundException("Unable to create registry key.")
  //     }

  //     let msftRegKey: RegistryKey = softRegKey.OpenSubKey("Microsoft", true)
  //     if ((msftRegKey == null)) {
  //       DebugLog.WriteVerbose("Couldn't find HKCU\Software\Microsoft")
  //       throw new KeyNotFoundException("Unable to create registry key.")
  //     }

  //     appRegKey = msftRegKey.CreateSubKey("EWSEditor")
  //   }

  //   return appRegKey
  // }
}
