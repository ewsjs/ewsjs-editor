// export class EwsFolderHelper {
    
//   private static Prop_PR_IS_HIDDEN: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(4340, MapiPropertyType.Boolean);
  
//   private static Prop_PR_ATTR_HIDDEN: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(4340, MapiPropertyType.Boolean);
  
//   private static Prop_PR_ATTR_READONLY: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(4342, MapiPropertyType.Boolean);
  
//   private static Prop_PR_ATTR_SYSTEM: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(4341, MapiPropertyType.Boolean);
  
//   private static Prop_PR_FOLDER_CHILD_COUNT: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(26168, MapiPropertyType.Long);
  
//   private static Prop_PR_CONTENT_COUNT: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(13826, MapiPropertyType.Integer);
  
//   private static Prop_PR_CONTENT_UNREAD: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(13827, MapiPropertyType.Integer);
  
//   //   PT_LONG  PidTagContentUnreadCount
//   private static Prop_PR_CONTAINER_CLASS: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(13840, MapiPropertyType.String);
  
//   private static Prop_PR_COMMENT: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(12292, MapiPropertyType.String);
  
//   private static Prop_PR_CREATION_TIME: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(768, MapiPropertyType.SystemTime);
  
//   private static Prop_PR_LAST_MODIFICATION_TIME: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(12296, MapiPropertyType.SystemTime);
  
//   private static Prop_PR_HAS_RULES: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(26170, MapiPropertyType.Boolean);
  
//   private static PR_MESSAGE_SIZE_EXTENDED: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(3592, MapiPropertyType.Long);
  
//   private static PR_DELETED_MESSAGE_SIZE_EXTENDED: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(1641, B, MapiPropertyType.Long);
  
//   private static PR_DELETED_MSG_COUNT: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(26176, MapiPropertyType.Integer);
  
//   private static Prop_PR_START_DATE_ETC: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(12313, MapiPropertyType.SystemTime);
  
//   private static Prop_PR_POLICY_TAG: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(769, B, MapiPropertyType.Binary);
  
//   //  PR_POLICY_TAG 0x3019   Data type: PtypBinary, 0x0102
//   private static Prop_PR_RETENTION_FLAGS: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(12317, MapiPropertyType.Integer);
  
//   //  PR_RETENTION_FLAGS 0x301D   
//   private static Prop_PR_RETENTION_PERIOD: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(12314, MapiPropertyType.Integer);
  
//   //  PR_RETENTION_PERIOD 0x301A    
//   private static Prop_PR_RETENTION_DATE: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(12316, MapiPropertyType.SystemTime);
  
//   //  Prop_PR_RETENTION_DATE 0x301C    
//   private static Prop_PR_ARCHIVE_TAG: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(12312, MapiPropertyType.Binary);
  
//   private static Prop_PR_ARCHIVE_PERIOD: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(12318, MapiPropertyType.Integer);
  
//   //  Prop_PR_RETENTION_DATE 0x301C    
//   private static Prop_PR_ARCHIVE_DATE: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(12319, MapiPropertyType.SystemTime);
  
//   //  private static ExtendedPropertyDefinition Prop_PR_START_DATE_ETC = new ExtendedPropertyDefinition(0x3019, MapiPropertyType.String); // PR_START_DATE_ETC  GUID 0x30190102
//   private static Prop_PR_ENTRYID: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(4095, MapiPropertyType.Binary);
  
//   //  PidTagEntryId, PidTagMemberEntryId, ptagEntryId
//   private static Prop_PR_STORE_ENTRYID: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(255, B, MapiPropertyType.Binary);
  
//   //  PidTagStoreEntryId
//   // private static ExtendedPropertyDefinition Prop_PR_STORE_ENTRYID = new ExtendedPropertyDefinition(0x0FB0, MapiPropertyType.Binary);  // PidTagStoreEntryId
//   private static Prop_PR_EXTENDED_FOLDER_FLAGS: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(14042, MapiPropertyType.Binary);
  
//   //  PidTagExtendedFolderFlags, ptagExtendedFolderFlags
//   private static Prop_PR_FOLDER_PATH: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(102, B5, MapiPropertyType.String);
  
//   //  Folder Path - PR_Folder_Path
//   private static Prop_PR_FOLDER_TYPE: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(13825, MapiPropertyType.Integer);
  
//   //  PR_FOLDER_TYPE 0x3601 (13825)
//   public static GetFolderPath(oExchangeService: ExchangeService, oFolderId: FolderId, /* ref */sFolderPath: string): boolean {
//       let bRet: boolean = false;
//       let oFolder: Folder = null;
//       let oPropertySet: PropertySet = new PropertySet(BasePropertySet.IdOnly, Prop_PR_FOLDER_PATH);
//       oExchangeService.ClientRequestId = Guid.NewGuid().ToString();
//       //  Set a new GUID
//       oFolder = Folder.Bind(oExchangeService, oFolderId, oPropertySet);
//       bRet = EwsFolderHelper.GetFolderPath(oFolder, /* ref */sFolderPath);
//       return bRet;
//   }
  
//   public static GetFolderPath(oFolder: Folder, /* ref */sFolderPath: string): boolean {
//       let fpPath: Object = null;
//       let bRet: boolean = false;
//       if (oFolder.TryGetProperty(Prop_PR_FOLDER_PATH, /* out */fpPath)) {
//           let fpPathString: String = Encoding.Unicode.GetString(ConversionHelper.HexStringToByteArray(BitConverter.ToString(UnicodeEncoding.Unicode.GetBytes((<String>(fpPath)))).Replace("FE-FF", "5C-00").Replace("-", "")));
//           sFolderPath = fpPathString;
//           bRet = true;
//       }
//       else {
//           sFolderPath = "";
//           bRet = false;
//       }
      
//       // System.Web.Services.Protocols.SoapHttpClientProtocol x;
//       return bRet;
//   }
  
//   public static GetFolderDetails(oFolder: Folder): Folder {
//       let folderPropertySet: PropertySet = new PropertySet(BasePropertySet.FirstClassProperties, [
//                   FolderSchema.DisplayName,
//                   FolderSchema.ChildFolderCount,
//                   FolderSchema.FolderClass,
//                   FolderSchema.ManagedFolderInformation,
//                   FolderSchema.TotalCount,
//                   FolderSchema.UnreadCount,
//                   FolderSchema.Permissions,
//                   FolderSchema.EffectiveRights,
//                   FolderSchema.Permissions,
//                   FolderSchema.ChildFolderCount,
//                   FolderSchema.TotalCount,
//                   FolderSchema.UnreadCount,
//                   FolderSchema.ParentFolderId,
//                   Prop_PR_IS_HIDDEN,
//                   Prop_PR_FOLDER_PATH,
//                   Prop_PR_CREATION_TIME,
//                   Prop_PR_COMMENT,
//                   Prop_PR_CREATION_TIME,
//                   Prop_PR_LAST_MODIFICATION_TIME,
//                   Prop_PR_HAS_RULES,
//                   Prop_PR_FOLDER_TYPE,
//                   Prop_PR_START_DATE_ETC,
//                   Prop_PR_RETENTION_DATE,
//                   Prop_PR_RETENTION_PERIOD,
//                   Prop_PR_RETENTION_FLAGS,
//                   Prop_PR_POLICY_TAG,
//                   Prop_PR_ARCHIVE_TAG,
//                   Prop_PR_ARCHIVE_PERIOD,
//                   Prop_PR_ARCHIVE_DATE,
//                   Prop_PR_ATTR_HIDDEN,
//                   Prop_PR_ATTR_READONLY,
//                   Prop_PR_ATTR_SYSTEM,
//                   Prop_PR_FOLDER_CHILD_COUNT,
//                   Prop_PR_CONTENT_UNREAD,
//                   Prop_PR_CONTENT_COUNT,
//                   Prop_PR_CONTAINER_CLASS,
//                   Prop_PR_ENTRYID,
//                   Prop_PR_STORE_ENTRYID,
//                   Prop_PR_EXTENDED_FOLDER_FLAGS]);
//       oFolder.Service.ClientRequestId = Guid.NewGuid().ToString();
//       //  Set a new GUID
//       oFolder.Load(folderPropertySet);
//       return oFolder;
//   }
// }