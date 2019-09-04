import { app, Menu, MenuItem } from 'electron';
import { menuClick } from './menuClickHandler';

export const menu = Menu.buildFromTemplate([
  {
    label: 'File',
    submenu: [
      {
        label: "New Exchange Service...",
        id: "mnuNewBinding",
        click: menuClick,
      },

      {
        label: "Open Default Exchange Service",
        id: "mnuOpenDefaultBinding",
        click: menuClick,
      },

      {
        label: "Close Exchange Service",
        id: "mnuCloseBinding",
        enabled: false,
        click: menuClick,
      },
      { type: "separator" },
      {
        label: "Open Services Profile...",
        id: "mnuOpenProfile",
        click: menuClick,
      },

      {
        label: "Save Services Profile...",
        id: "mnuSaveProfile",
        enabled: false,
        click: menuClick,
      },
      { type: "separator" },
      {
        label: 'Exit',
        click() {
          app.quit()
        }
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: "Configure Detail Property Set...",
        id: "mnuViewConfigPropertySet",
        enabled: false,
        click: menuClick,
      },
      {
        label: "Reset Detail Property Set",
        id: "mnuViewResetPropertySet",
        enabled: false,
        click: menuClick,
      },
      { type: "separator" },
      {
        label: "Refresh",
        id: "mnuRefresh",
        enabled: false,
        click: menuClick,
      },
    ]
  },
  {
    label: 'Tools',
    submenu: [
      {
        label: "EWSEditor Log Viewer...",
        id: "DebugLogVeiwerMenuItem",
        click: menuClick,
      },
      { type: "separator" },
      {
        label: "Autodiscover Viewer...",
        id: "mnuToolsDiscoveryAutodiscoverViewer",
        click: menuClick,
      },
      // {
      //   label: "Domain Settings...",
      //   id: "mnuToolsDiscoveryDomainSettings",
      //   click: menuClick,
      // },
      // {
      //   label: "SCP Lookups...",
      //   id: "mnuToolsDiscoveryScpLookups",
      //   click: menuClick,
      // },
      {
        label: "EWS POST...",
        id: "mnuEwsPost",
        click: menuClick,
      },
      { type: "separator" },
      // {
      //   label: "TimeZone Helper...",
      //   id: "TimeZonemenuitem",
      //   click: menuClick,
      // },
      {
        label: "Resolve Name...",
        id: "mnuResolveName",
        enabled: false,
        click: menuClick,
      },
      {
        label: "Extended Property Resolver...",
        id: "mnuResolveExProp",
        enabled: false,
        click: menuClick,
      },
      { type: "separator" },
      {
        label: "Pull Notifications Viewer...",
        id: "mnuToolsNotificationsPullNotificationsViewer",
        enabled: false,
        click: menuClick,
      },
      {
        label: "Streaming Notifications Viewer...",
        id: "mnuToolsNotificationsStreamingNotificationsViewer",
        enabled: false,
        click: menuClick,
      },
      {
        label: "Item Synchronization Viewer...",
        id: "mnuToolsNotificationsItemSynchronizationViewer",
        enabled: false,
        click: menuClick,
      },
      { type: "separator" },
      {
        label: "Check for errors loading properties on Items...",
        id: "checkForErrorsLoadingPropertiesOnFolderToolStripMenuItem",
        enabled: false,
        click: menuClick,
      },
      {
        label: "Delegate Information...",
        id: "mnuDisplayDelegates",
        enabled: false,
        click: menuClick,
      },
      {
        label: "User OOF Settings...",
        id: "mnuUserSettingsUserOofSettings",
        enabled: false,
        click: menuClick,
      },
      {
        label: "User Availability...",
        id: "mnuUserSettingsUserAvailability",
        enabled: false,
        click: menuClick,
      },
      // {
      //   label: "User Retention Tags...",
      //   id: "mnuUserSettingsUserRetentionTags",
      //   click: menuClick,
      // },
      {
        label: "Meeting Rooms...",
        id: "MeetingRoomsMenuItem",
        enabled: false,
        click: menuClick,
      },
      {
        label: "Distibution List Expansion...",
        id: "DistributionListMenuItem",
        enabled: false,
        click: menuClick,
      },
      {
        label: "Inbox Rules...",
        id: "InboxRulesMenuItem",
        enabled: false,
        click: menuClick,
      },
      {
        label: "ConvertId...",
        id: "ConvertIdMenuItem",
        enabled: false,
        click: menuClick,
      },
      {
        label: "Server TimeZone...",
        id: "serverTimeZoneToolStripMenuItem",
        enabled: false,
        click: menuClick,
      },
      {
        label: "User Configuration...",
        id: "mnuUserSettingsUserConfiguration",
        enabled: false,
        click: menuClick,
      },
      {
        label: "eDiscoverySearch...",
        id: "eDiscoverySearchToolStripMenuItem",
        enabled: false,
        click: menuClick,
      },
      // {
      //   label: "Mail Apps...",
      //   id: "mailAppsToolStripMenuItem",
      //   click: menuClick,
      // },
      // {
      //   label: "Mail Tips...",
      //   id: "mnuMailTips",
      //   click: menuClick,
      // },
      // {
      //   label: "Search For Search Folders...",
      //   id: "mnuSearchForSearchFolders",
      //   click: menuClick,
      // },
      // { type: "separator" },
      // {
      //   label: "Developer Service Test Window...",
      //   id: "developerToolsTestWindowToolStripMenuItem",
      //   click: menuClick,
      // },
      { type: "separator" },
      {
        label: "Options...",
        id: "OptionsMenuItem",
        click: menuClick,
      },
    ]
  },
  {
    label: 'Other',
    submenu: [
      {
        label: "Open Item by Id...",
        id: "mnuOpenItemById",
        enabled: false,
        click: menuClick,
      },
      {
        label: "Open Folder by Id...",
        id: "mnuOpenFolderById",
        enabled: false,
        click: menuClick,
      },
      {
        label: "Get Items by Conversation Id...",
        id: "mnuGetConversationItems",
        enabled: false,
        click: menuClick,
      },
      { type: "separator" },
      {
        label: "Find Appointments (CalendarView)...",
        id: "mnuFindAppointments",
        enabled: false,
        click: menuClick,
      },
      { type: "separator" },
      {
        label: "Run-time Information...",
        id: "mnuWindowsUserInformation",
        click: menuClick,
      },
      {
        label: "System.Net.Mail Client...",
        id: "mnuSnmClient",
        click: menuClick,
      },
      {
        label: "Encoding Helper...",
        id: "mnuEncodingHelper",
        click: menuClick,
      },
      // { type: "separator" },
      // {
      //   label: "File Content Helper...",
      //   id: "mnuFileContentHelper",
      //   click: menuClick,
      // },
      // {
      //   label: "View In Browser",
      //   id: "viewHTMLInBrowserToolStripMenuItem",
      //   click: menuClick,
      // },
      // {
      //   label: "MIME Parser",
      //   id: "mnuMimeParser",
      //   click: menuClick,
      // },
      // {
      //   label: "Credential Cache",
      //   id: "mnuCredentialCache",
      //   click: menuClick,
      // },
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: "About EWSEditor",
        id: "mnuAbout",
        click: menuClick,
      }
    ]
  },
])

