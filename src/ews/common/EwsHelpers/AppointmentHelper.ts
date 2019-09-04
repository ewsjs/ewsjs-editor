// import { ItemAttachment, ExtendedPropertyDefinition, Guid, MapiPropertyType, ExchangeService, Appointment, ItemId, PropertySet, BasePropertySet, StringHelper, Item, Attachment, FileAttachment } from "ews-javascript-api";

// export class AppointmentHelper {

//   private static PidLidAppointmentRecur: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(new Guid("00062002-0000-0000-C000-000000000046"), 33302, MapiPropertyType.Binary);

//   //  dispidApptRecur
//   private static PidLidClientIntent: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(new Guid("11000E07-B51B-40D6-AF21-CAA85EDAB1D0"), 21, MapiPropertyType.Integer);

//   //  dispidClientIntent
//   public static GetAppointmentDetails(sId: string, oExchangeService: ExchangeService): Appointment {
//     let oItem: ItemId = new ItemId(sId);
//     let appointmentPropertySet: PropertySet = AppointmentHelper.GetAppointmentCalendarPropertySet();
//     oExchangeService.ClientRequestId = Guid.NewGuid().ToString();
//     //  Set a new GUID
//     let oAppointment: Appointment = Appointment.Bind(oExchangeService, oItem, appointmentPropertySet);
//     return;
//   }

//   public static GetAppointmentDetails(oAppointment: Appointment): Appointment {
//     let appointmentPropertySet: PropertySet = AppointmentHelper.GetAppointmentCalendarPropertySet();
//     oAppointment.Service.ClientRequestId = Guid.NewGuid().ToString();
//     //  Set a new GUID. 
//     oAppointment.Load(appointmentPropertySet);
//     return;
//   }

//   private static GetAppointmentCalendarPropertySet(): PropertySet {
//     let appointmentPropertySet: PropertySet = new PropertySet(BasePropertySet.FirstClassProperties);
//     appointmentPropertySet.Add(AppointmentHelper.PidLidAppointmentRecur);
//     appointmentPropertySet.Add(AppointmentHelper.PidLidClientIntent);
//     return appointmentPropertySet;
//   }

//   public static GetAttendeeStatusAsInfoString(oAppointment: Appointment): string {
//     //  http://msdn.microsoft.com/en-us/library/dd633669(EXCHG.80).aspx
//     let s: string = StringHelper.Empty;
//     //  Check responses from required attendees.
//     s += "Required attendee:";
//     for (let i: number = 0; (i < oAppointment.RequiredAttendees.Count); i++) {
//       s = (s + ("    "
//         + (oAppointment.RequiredAttendees[i].Address + (": "
//           + (oAppointment.RequiredAttendees[i].ResponseType.Value.ToString() + "")))));
//     }

//     //  Check responses from optional attendees.
//     s += "Optional attendee:";
//     for (let i: number = 0; (i < oAppointment.OptionalAttendees.Count); i++) {
//       s = (s + ("    "
//         + (oAppointment.OptionalAttendees[i].Address + (": "
//           + (oAppointment.OptionalAttendees[i].ResponseType.Value.ToString() + "")))));
//     }

//     //  Check responses from resources.
//     s += "Resource attendee:";
//     for (let i: number = 0; (i < oAppointment.Resources.Count); i++) {
//       s = (s + ("    "
//         + (oAppointment.Resources[i].Address + (": "
//           + (oAppointment.Resources[i].ResponseType.Value.ToString() + "")))));
//     }

//     return s;
//   }

//   public static LoadItemsAttachmentsListLv(oItem: Item, /* ref */oListView: ListView) {
//     oListView.Clear();
//     oListView.View = View.Details;
//     oListView.GridLines = true;
//     oListView.FullRowSelect = true;
//     oListView.Columns.Add("Id", 70, HorizontalAlignment.Left);
//     oListView.Columns.Add("ContentId", 70, HorizontalAlignment.Left);
//     oListView.Columns.Add("ContentLocation", 70, HorizontalAlignment.Left);
//     oListView.Columns.Add("ContentType", 70, HorizontalAlignment.Left);
//     oListView.Columns.Add("Name", 140, HorizontalAlignment.Left);
//     oListView.Columns.Add("IsInline", 50, HorizontalAlignment.Left);
//     //  Exchange 2010 and later.
//     // oListView.Columns.Add("LastModifiedTime", 70, HorizontalAlignment.Left); // Exchange 2010 and later.
//     // oListView.Columns.Add("Size", 70, HorizontalAlignment.Right);    // Exchange 2010 and later.
//     let oListItem: ListViewItem = null;
//     let iAttachmentCount: number = 0;
//     for (let oAttachment of oItem.Attachments.GetEnumerator()) {
//       oItem.Service.ClientRequestId = Guid.NewGuid().ToString();
//       //  Set a new GUID
//       oAttachment.Load();
//       if ((oAttachment instanceof ItemAttachment)) {
//         let oItemAttachment: ItemAttachment = (<ItemAttachment>(oAttachment));
//         //  Load attachment into memory so we can get to the item properties (such as subject).
//         oItem.Service.ClientRequestId = Guid.NewGuid().ToString();
//         //  Set a new GUID
//         oItemAttachment.Load();
//         oListItem = new ListViewItem(oAttachment.Id, 0);
//         oListItem.SubItems.Add(oItemAttachment.ContentId);
//         oListItem.SubItems.Add(oItemAttachment.ContentLocation);
//         oListItem.SubItems.Add(oItemAttachment.ContentType);
//         oListItem.SubItems.Add(oItemAttachment.Name);
//         oListItem.SubItems.Add(oItemAttachment.IsInline.toString());
//         oListItem.Tag = iAttachmentCount;
//         oListView.Items.AddRange([
//           oListItem]);
//         oListItem = null;
//       }

//       if ((oAttachment instanceof FileAttachment)) {

//       }

//     }

//     iAttachmentCount++;
//   }

//   public static LoadFileAttachmentsLv(oItem: Item, /* ref */oListView: ListView): number {
//     let iAttachments: number = 0;
//     oListView.Clear();
//     oListView.View = View.Details;
//     oListView.GridLines = true;
//     oListView.FullRowSelect = true;
//     oListView.Columns.Add("Id", 150, HorizontalAlignment.Left);
//     oListView.Columns.Add("ContentId", 120, HorizontalAlignment.Left);
//     oListView.Columns.Add("ContentLocation", 70, HorizontalAlignment.Left);
//     oListView.Columns.Add("ContentType", 120, HorizontalAlignment.Left);
//     oListView.Columns.Add("Name", 200, HorizontalAlignment.Left);
//     oListView.Columns.Add("FileName", 200, HorizontalAlignment.Left);
//     oListView.Columns.Add("IsInline", 50, HorizontalAlignment.Left);
//     //  Exchange 2010 and later.
//     oListView.Columns.Add("IsContactPhoto", 100, HorizontalAlignment.Left);
//     oListView.Columns.Add("Size", 100, HorizontalAlignment.Left);
//     oListView.Columns.Add("LastModifiedTime", 200, HorizontalAlignment.Left);
//     let oListItem: ListViewItem = null;
//     let iAttachmentCount: number = 0;
//     let bIsInline: boolean = false;
//     for (let oAttachment of oItem.Attachments.GetEnumerator()) {
//       if ((oAttachment.Id != null)) {
//         oItem.Service.ClientRequestId = Guid.NewGuid().ToString();
//         //  Set a new GUID
//         oAttachment.Load();
//       }

//       //  Note: As of EWS 2013_sp1 the schema for attachments is fixed, so we cannot pull extended properties like the ones below
//       //       ExtendedPropertyDefinition PidTagAttachPathname = new ExtendedPropertyDefinition(0x3708, MapiPropertyType.String);
//       //       ExtendedPropertyDefinition PidTagAttachEncoding = new ExtendedPropertyDefinition(0x3702, MapiPropertyType.Binary);
//       //       ExtendedPropertyDefinition PidTagAttachMethod = new ExtendedPropertyDefinition(0x3705, MapiPropertyType.Long);
//       //       ExtendedPropertyDefinition PidTagCreationTime = new ExtendedPropertyDefinition(0x3007, MapiPropertyType.ApplicationTime);
//       //       ExtendedPropertyDefinition PidTagDisplayName = new ExtendedPropertyDefinition(0x3001, MapiPropertyType.String);
//       //       ExtendedPropertyDefinition PidTagAttachExtension = new ExtendedPropertyDefinition(0x3703, MapiPropertyType.String);
//       //       ExtendedPropertyDefinition PidTagAttachLongFilename = new ExtendedPropertyDefinition(0x3707, MapiPropertyType.String);
//       //       ExtendedPropertyDefinition PidTagAttachTag = new ExtendedPropertyDefinition(0x370A, MapiPropertyType.Binary);
//       //       ExtendedPropertyDefinition PidTagAttachTransportName = new ExtendedPropertyDefinition(0x370C, MapiPropertyType.String);
//       //       ExtendedPropertyDefinition PidTagLastModificationTime = new ExtendedPropertyDefinition(0x370B, MapiPropertyType.Long);
//       //       ExtendedPropertyDefinition PidTagAttachNumber = new ExtendedPropertyDefinition(0x0E21, MapiPropertyType.Long);
//       //       ExtendedPropertyDefinition PidTagInstanceKey = new ExtendedPropertyDefinition(0x0FF6, MapiPropertyType.Binary);
//       //       ExtendedPropertyDefinition PidTagRecordKey = new ExtendedPropertyDefinition(0x0FF9, MapiPropertyType.Binary);
//       //       ExtendedPropertyDefinition PidTagRenderingPosition = new ExtendedPropertyDefinition(0x370B, MapiPropertyType.Long);
//       // ExtendedPropertyDefinition TransportMsgHdr = new ExtendedPropertyDefinition(0x007D, MapiPropertyType.String);
//       // ExtendedPropertyDefinition PidTagRtfCompressed = new ExtendedPropertyDefinition(0x1009, MapiPropertyType.Binary);
//       // ExtendedPropertyDefinition PidTagMimeSkeleton = new ExtendedPropertyDefinition(0x64F00102, MapiPropertyType.String);
//       //  // http://msdn.microsoft.com/en-us/library/office/hh545614(v=exchg.140).aspx
//       // ExtendedPropertyDefinition PidTagRtfCompressed = new ExtendedPropertyDefinition(0x1009, MapiPropertyType.Binary);   
//       // PropertySet propertySet = new PropertySet(
//       //     new PropertyDefinitionBase[] 
//       //         { ItemSchema.MimeContent, 
//       //             ItemSchema.Subject, 
//       //             PidTagRtfCompressed 
//       //         }
//       //     );
//       // message.Load(propertySet); 
//       if ((oAttachment instanceof FileAttachment)) {
//         let oAttach: FileAttachment = (<FileAttachment>(oAttachment));
//         //  For Exchange 2010, check for Inline attachments using:
//         //    if (oAttachment.IsInline == true) 
//         //  For earlier versions, resort to checking for a set ContentId.
//         //   if (oAttach.ContentId.Length != 0)
//         if ((oItem.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1)) {
//           if ((oAttach.ContentId.Length != 0)) {
//             bIsInline = true;
//           }
//           else {
//             bIsInline = false;
//           }

//         }
//         else {
//           bIsInline = oAttachment.IsInline;
//         }

//         // if (oAttachment.IsInline == true)
//         // {
//         oListItem = new ListViewItem(oAttach.Id, 0);
//         oListItem.SubItems.Add(oAttach.ContentId);
//         oListItem.SubItems.Add(oAttach.ContentLocation);
//         oListItem.SubItems.Add(oAttach.ContentType);
//         oListItem.SubItems.Add(oAttach.Name);
//         oListItem.SubItems.Add(oAttach.FileName);
//         oListItem.SubItems.Add(bIsInline.toString());
//         oListItem.SubItems.Add(oAttach.IsContactPhoto.ToString());
//         oListItem.SubItems.Add(oAttach.Size.ToString());
//         oListItem.SubItems.Add(oAttach.LastModifiedTime.ToString());
//         oListItem.Tag = oAttach;
//         oListView.Items.AddRange([
//           oListItem]);
//         oListItem = null;
//         iAttachments++;
//       }

//       if ((oAttachment instanceof ItemAttachment)) {

//       }

//       iAttachmentCount++;
//     }

//     return iAttachments;
//   }
// }