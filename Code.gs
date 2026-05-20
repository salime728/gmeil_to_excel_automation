function doGet() {
  var threads = GmailApp.getInboxThreads(0, 10); // Get the latest 10 email threads
  var emailData = [];

  threads.forEach(function(thread) {
    var msg = thread.getMessages()[0]; // Get the first message in the thread
    var attachments = msg.getAttachments();

    attachments.forEach(function(att) {
      emailData.push({
        EmailDate: msg.getDate().toISOString(),
        From: msg.getFrom(),
        Subject: msg.getSubject(),
        FileName: att.getName(),
        MimeType: att.getContentType(),
        Binary: Utilities.base64Encode(att.getBytes()) // Store as Binary
      });
    });

    if (attachments.length === 0) {
      emailData.push({
        EmailDate: msg.getDate().toISOString(),
        From: msg.getFrom(),
        Subject: msg.getSubject(),
        FileName: "No Attachment",
        MimeType: "N/A",
        Binary: "N/A"
      });
    }
  });

  return ContentService.createTextOutput(JSON.stringify(emailData))
    .setMimeType(ContentService.MimeType.JSON);
}
