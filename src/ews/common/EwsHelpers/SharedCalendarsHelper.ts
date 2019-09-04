// export class SharedCalendarsHelper {
    
//   ///  Don't use - not sure what its tring to pull - its not pulling the shared calendars
//   ///  
//   // EWS - Access All Shared Calendars
//   // http://stackoverflow.com/questions/23766747/ews-access-all-shared-calendars
//   //  http://stackoverflow.com/questions/23766747/ews-access-all-shared-calendars
//   public static GetSharedCalendarFolders(service: ExchangeService, mbMailboxname: String): Dictionary<string, Folder> {
//       let rtList: Dictionary<String, Folder> = new System.Collections.Generic.Dictionary<string, Folder>();
//       let rfRootFolderid: FolderId = new FolderId(WellKnownFolderName.Root, mbMailboxname);
//       let fvFolderView: FolderView = new FolderView(1000);
//       let sfSearchFilter: SearchFilter = new SearchFilter.IsEqualTo(FolderSchema.DisplayName, "Common Views");
//       service.ClientRequestId = Guid.NewGuid().ToString();
//       //  Set a new GUID.
//       let ffoldres: FindFoldersResults = service.FindFolders(rfRootFolderid, sfSearchFilter, fvFolderView);
//       if ((ffoldres.Folders.Count == 1)) {
//           let psPropset: PropertySet = new PropertySet(BasePropertySet.FirstClassProperties);
//           let PidTagWlinkAddressBookEID: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(26708, MapiPropertyType.Binary);
//           let PidTagWlinkFolderType: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(26703, MapiPropertyType.Binary);
//           let PidTagWlinkGroupName: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(26705, MapiPropertyType.String);
//           psPropset.Add(PidTagWlinkAddressBookEID);
//           psPropset.Add(PidTagWlinkFolderType);
//           let iv: ItemView = new ItemView(1000);
//           iv.PropertySet = psPropset;
//           iv.Traversal = ItemTraversal.Associated;
//           let cntSearch: SearchFilter = new SearchFilter.IsEqualTo(PidTagWlinkGroupName, "Other Calendars");
//           service.ClientRequestId = Guid.NewGuid().ToString();
//           //  Set a new GUID.             
//           let fiResults: FindItemsResults<Item> = ffoldres.Folders[0].FindItems(cntSearch, iv);
//           for (let itItem: Item in fiResults.Items) {
//               try {
//                   // object GroupName = null;
//                   let WlinkAddressBookEID: Object = null;
//                   if (itItem.TryGetProperty(PidTagWlinkAddressBookEID, /* out */WlinkAddressBookEID)) {
//                       let ssStoreID: number[] = (<number[]>(WlinkAddressBookEID));
//                       let leLegDnStart: number = 0;
//                       let lnLegDN: String = "";
//                       for (let ssArraynum: number = (ssStoreID.Length - 2); (ssArraynum != 0); ssArraynum--) {
//                           if ((ssStoreID[ssArraynum] == 0)) {
//                               leLegDnStart = ssArraynum;
//                               lnLegDN = System.Text.ASCIIEncoding.ASCII.GetString(ssStoreID, (leLegDnStart + 1), (ssStoreID.Length 
//                                               - (leLegDnStart + 2)));
//                               ssArraynum = 1;
//                           }
                          
//                       }
                      
//                       let ncCol: NameResolutionCollection = service.ResolveName(lnLegDN, ResolveNameSearchLocation.DirectoryOnly, true);
//                       if ((ncCol.Count > 0)) {
//                           let SharedCalendarId: FolderId = new FolderId(WellKnownFolderName.Calendar, ncCol[0].Mailbox.Address);
//                           service.ClientRequestId = Guid.NewGuid().ToString();
//                           //  Set a new GUID.
//                           let SharedCalendaFolder: Folder = Folder.Bind(service, SharedCalendarId);
//                           rtList.Add(ncCol[0].Mailbox.Address, SharedCalendaFolder);
//                       }
                      
//                   }
                  
//               }
//               catch (exception /*:Exception*/) {
//                   Console.WriteLine(exception.Message);
//               }
              
//           }
          
//       }
      
//       return rtList;
//   }
  
//   public static Test(service: ExchangeService, sMailboxname: String): string {
//       let oSB: StringBuilder = new StringBuilder();
//       let sEmailAddress: string = string.Empty;
//       let sFolder: string = string.Empty;
//       let sFolderId: string = string.Empty;
//       let oFolder: Folder = null;
//       let dResult: Dictionary<string, Folder> = new Dictionary<string, Folder>();
//       dResult = SharedCalendarsHelper.GetSharedCalendarFolders(service, sMailboxname);
//       for (let index: number = 0; (index < dResult.Count); index++) {
//           let item = dResult.ElementAt(index);
//           sEmailAddress = item.Key;
//           oFolder = (<Folder>(item.Value));
//           sFolder = oFolder.DisplayName;
//           sFolderId = oFolder.Id.UniqueId;
//           oSB.AppendFormat("Email Address: %0   Folder: %1  UniqueId: %2
// ", sEmailAddress, sFolder);
//       }
      
//       let sRet: string = oSB.ToString();
//       return sRet;
//   }
// }