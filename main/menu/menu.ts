import { app, Menu } from "electron";
import {
  mnuNewBindingClick,
  mnuOpenDefaultBindingClick,
  mnuCloseBindingClick,
  mnuOpenProfileClick,
  mnuSaveProfileClick,
} from "./handlers/fileMenuHandlers";

import {
  mnuViewConfigPropertySetClick,
  mnuViewResetPropertySetClick,
  mnuRefreshClick,
} from "./handlers/viewMenuHandlers";
import {
  DebugLogVeiwerMenuItemClick,
  OptionsMenuItemClick,
  mnuToolsDiscoveryAutodiscoverViewerClick,
  mnuToolsDiscoveryDomainSettingsClick,
  mnuToolsDiscoveryScpLookupsClick,
  mnuEwsPostClick,
  TimeZonemenuitemClick,
  mnuResolveNameClick,
  mnuResolveExPropClick,
  mnuToolsNotificationsPullNotificationsViewerClick,
  mnuToolsNotificationsStreamingNotificationsViewerClick,
  mnuToolsNotificationsItemSynchronizationViewerClick,
  mnuUserSettingsUserOofSettingsClick,
  mnuUserSettingsUserAvailabilityClick,
  mnuUserSettingsUserRetentionTagsClick,
  mnuUserSettingsUserConfigurationClick,
  checkForErrorsLoadingPropertiesOnFolderToolStripMenuItemClick,
  mnuDisplayDelegatesClick,
  MeetingRoomsMenuItemClick,
  DistributionListMenuItemClick,
  InboxRulesMenuItemClick,
  ConvertIdMenuItemClick,
  serverTimeZoneToolStripMenuItemClick,
  eDiscoverySearchToolStripMenuItemClick,
  mailAppsToolStripMenuItemClick,
  mnuMailTipsClick,
  mnuSearchForSearchFoldersClick,
  developerToolsTestWindowToolStripMenuItemClick,
} from "./handlers/toolsMenuHandlers";
import {
  mnuOpenItemByIdClick,
  mnuOpenFolderByIdClick,
  mnuGetConversationItemsClick,
  mnuFindAppointmentsClick,
  mnuWindowsUserInformationClick,
  mnuSnmClientClick,
  mnuEncodingHelperClick,
  mnuFileContentHelperClick,
  viewHTMLInBrowserToolStripMenuItemClick,
  mnuMimeParserClick,
  mnuCredentialCacheClick,
} from "./handlers/otherMenuHandlers";
import { mnuAboutClick } from "./handlers/helpMenuHandlers";

export const menu = Menu.buildFromTemplate([
  {
    label: "File",
    submenu: [
      {
        label: "New Exchange Service...",
        id: "mnuNewBinding",
        click: mnuNewBindingClick,
      },

      {
        label: "Open Default Exchange Service",
        id: "mnuOpenDefaultBinding",
        click: mnuOpenDefaultBindingClick,
      },

      {
        label: "Close Exchange Service",
        id: "mnuCloseBinding",
        click: mnuCloseBindingClick,
        enabled: false,
      },
      { type: "separator" },
      {
        label: "Open Services Profile...",
        id: "mnuOpenProfile",
        click: mnuOpenProfileClick,
      },

      {
        label: "Save Services Profile...",
        id: "mnuSaveProfile",
        click: mnuSaveProfileClick,
        enabled: false,
      },
      { type: "separator" },
      {
        label: "Exit",
        click() {
          app.quit()
        }
      }
    ]
  },
  {
    label: "View",
    submenu: [
      {
        label: "Configure Detail Property Set...",
        id: "mnuViewConfigPropertySet",
        click: mnuViewConfigPropertySetClick,
        enabled: false,
      },
      {
        label: "Reset Detail Property Set",
        id: "mnuViewResetPropertySet",
        click: mnuViewResetPropertySetClick,
        enabled: false,
      },
      { type: "separator" },
      {
        label: "Refresh",
        id: "mnuRefresh",
        click: mnuRefreshClick,
        enabled: false,
      },
    ]
  },
  {
    label: "Tools",
    submenu: [
      {
        label: "EWSEditor Log Viewer...",
        id: "DebugLogVeiwerMenuItem",
        click: DebugLogVeiwerMenuItemClick,
      },
      {
        label: "Options...",
        id: "OptionsMenuItem",
        click: OptionsMenuItemClick,
      },
      {
        label: "Discovery",
        id: "mnuToolsDiscovery",
        submenu: [
          {
            label: "Autodiscover Viewer...",
            id: "mnuToolsDiscoveryAutodiscoverViewer",
            click: mnuToolsDiscoveryAutodiscoverViewerClick,
          },
          {
            label: "Domain Settings...",
            id: "mnuToolsDiscoveryDomainSettings",
            click: mnuToolsDiscoveryDomainSettingsClick,
          },
          {
            label: "SCP Lookups...",
            id: "mnuToolsDiscoveryScpLookups",
            click: mnuToolsDiscoveryScpLookupsClick,
          },
        ],
      },
      {
        label: "EWS POST...",
        id: "mnuEwsPost",
        click: mnuEwsPostClick,
      },
      {
        label: "TimeZone Helper...",
        id: "TimeZonemenuitem",
        click: TimeZonemenuitemClick,
      },
      { type: "separator" },
      {
        label: "Resolve Name...",
        id: "mnuResolveName",
        click: mnuResolveNameClick,
        enabled: false,
      },
      {
        label: "Extended Property Resolver...",
        id: "mnuResolveExProp",
        click: mnuResolveExPropClick,
        enabled: false,
      },
      {
        label: "Notifications",
        id: "mnuToolsNotifications",
        enabled: false,
        submenu: [
          {
            label: "Pull Notifications Viewer...",
            id: "mnuToolsNotificationsPullNotificationsViewer",
            click: mnuToolsNotificationsPullNotificationsViewerClick,
            enabled: false,
          },
          {
            label: "Streaming Notifications Viewer...",
            id: "mnuToolsNotificationsStreamingNotificationsViewer",
            click: mnuToolsNotificationsStreamingNotificationsViewerClick,
            enabled: false,
          },
          {
            label: "Item Synchronization Viewer...",
            id: "mnuToolsNotificationsItemSynchronizationViewer",
            click: mnuToolsNotificationsItemSynchronizationViewerClick,
            enabled: false,
          },
        ],
      },
      { type: "separator" },
      {
        label: "User Settings",
        id: "mnuUserSettings",
        enabled: false,
        submenu: [
          {
            label: "User OOF Settings...",
            id: "mnuUserSettingsUserOofSettings",
            click: mnuUserSettingsUserOofSettingsClick,
            enabled: false,
          },
          {
            label: "User Availability...",
            id: "mnuUserSettingsUserAvailability",
            click: mnuUserSettingsUserAvailabilityClick,
            enabled: false,
          },
          {
            label: "User Retention Tags...",
            id: "mnuUserSettingsUserRetentionTags",
            click: mnuUserSettingsUserRetentionTagsClick,
            enabled: false,
          },
          {
            label: "User Configuration...",
            id: "mnuUserSettingsUserConfiguration",
            click: mnuUserSettingsUserConfigurationClick,
            enabled: false,
          },
        ],
      },
      {
        label: "Check for errors loading properties on Items...",
        id: "checkForErrorsLoadingPropertiesOnFolderToolStripMenuItem",
        click: checkForErrorsLoadingPropertiesOnFolderToolStripMenuItemClick,
        enabled: false,
      },
      {
        label: "Delegate Information...",
        id: "mnuDisplayDelegates",
        click: mnuDisplayDelegatesClick,
        enabled: false,
      },
      {
        label: "Meeting Rooms...",
        id: "MeetingRoomsMenuItem",
        click: MeetingRoomsMenuItemClick,
        enabled: false,
      },
      {
        label: "Distibution List Expansion...",
        id: "DistributionListMenuItem",
        click: DistributionListMenuItemClick,
        enabled: false,
      },
      {
        label: "Inbox Rules...",
        id: "InboxRulesMenuItem",
        click: InboxRulesMenuItemClick,
        enabled: false,
      },
      {
        label: "ConvertId...",
        id: "ConvertIdMenuItem",
        click: ConvertIdMenuItemClick,
        enabled: false,
      },
      {
        label: "Server TimeZone...",
        id: "serverTimeZoneToolStripMenuItem",
        click: serverTimeZoneToolStripMenuItemClick,
        enabled: false,
      },
      {
        label: "eDiscoverySearch...",
        id: "eDiscoverySearchToolStripMenuItem",
        click: eDiscoverySearchToolStripMenuItemClick,
        enabled: false,
      },
      {
        label: "Mail Apps...",
        id: "mailAppsToolStripMenuItem",
        click: mailAppsToolStripMenuItemClick,
        enabled: false,
      },
      {
        label: "Mail Tips...",
        id: "mnuMailTips",
        click: mnuMailTipsClick,
        enabled: false,
      },
      {
        label: "Search For Search Folders...",
        id: "mnuSearchForSearchFolders",
        click: mnuSearchForSearchFoldersClick,
        enabled: false,
      },
      { type: "separator" },
      {
        label: "Developer Service Test Window...",
        id: "developerToolsTestWindowToolStripMenuItem",
        click: developerToolsTestWindowToolStripMenuItemClick,
        enabled: false,
      },
    ]
  },
  {
    label: "Other",
    submenu: [
      {
        label: "Open Item by Id...",
        id: "mnuOpenItemById",
        click: mnuOpenItemByIdClick,
        enabled: false,
      },
      {
        label: "Open Folder by Id...",
        id: "mnuOpenFolderById",
        click: mnuOpenFolderByIdClick,
        enabled: false,
      },
      {
        label: "Get Items by Conversation Id...",
        id: "mnuGetConversationItems",
        click: mnuGetConversationItemsClick,
        enabled: false,
      },
      { type: "separator" },
      {
        label: "Find Appointments (CalendarView)...",
        id: "mnuFindAppointments",
        click: mnuFindAppointmentsClick,
        enabled: false,
      },
      { type: "separator" },
      {
        label: "Run-time Information...",
        id: "mnuWindowsUserInformation",
        click: mnuWindowsUserInformationClick,
      },
      {
        label: "System.Net.Mail Client...",
        id: "mnuSnmClient",
        click: mnuSnmClientClick,
      },
      {
        label: "Encoding Helper...",
        id: "mnuEncodingHelper",
        click: mnuEncodingHelperClick,
      },
      { type: "separator" },
      {
        label: "File Content Helper...",
        id: "mnuFileContentHelper",
        click: mnuFileContentHelperClick,
      },
      {
        label: "View In Browser",
        id: "viewHTMLInBrowserToolStripMenuItem",
        click: viewHTMLInBrowserToolStripMenuItemClick,
      },
      {
        label: "MIME Parser",
        id: "mnuMimeParser",
        click: mnuMimeParserClick,
      },
      {
        label: "Credential Cache",
        id: "mnuCredentialCache",
        click: mnuCredentialCacheClick,
      },
    ]
  },
  {
    label: "Help",
    submenu: [
      {
        label: "About EWSEditor",
        id: "mnuAbout",
        click: mnuAboutClick,
      },
      { type: "separator" },
      { role: "reload" },
      { role: "forceReload" },
      { role: "toggleDevTools" },
    ]
  },
])

