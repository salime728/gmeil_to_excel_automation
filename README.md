# Gmail to Excel Automation

A professional Google Apps Script (GAS) solution designed to fetch email data and attachments directly from Gmail, convert them into a structured JSON format, and prepare the payload for seamless integration with Microsoft Excel, Power Query, or data analytics pipelines.

---

## 🚀 Features

- **Automated Thread Retrieval:** Efficiently fetches the latest 10 email threads from the user's Gmail inbox.
- **Granular Metadata Extraction:** Extracts essential email attributes including Date (converted to ISO string), Sender (`From`), and `Subject`.
- **Base64 Attachment Encoding:** Iterates through all file attachments, capturing file names, MIME types, and safely converting raw binary data into **Base64 encoded strings** for secure transit.
- **Robust Error/Fallback Handling:** Includes a built-in conditional check (`attachments.length === 0`) to handle emails without attachments smoothly without breaking the data structure.
- **API Endpoint Ready:** Utilizes Google's `ContentService` to output clean, stringified JSON formatted data, ideal for webhooks or external API consumption.

---

## 🛠️ Technology Stack

- **Backend Environment:** Google Apps Script (JavaScript-based)
- **APIs Utilized:** `GmailApp`, `ContentService`, `Utilities`
- **Target Integration:** Microsoft Excel / Power Query / Python Automation Scripts

---

## 📦 Installation & Setup Guide

### 1. Google Apps Script Configuration
1. Head over to [script.google.com](https://script.google.com/) and log in with your Google account.
2. Create a new project and replace the default code with the script provided in `Code.gs`.
3. Save the project.

### 2. Deploying as a Web App
1. Click on the **Deploy** button at the top right -> select **New deployment**.
2. Select **Web app** as the deployment type.
3. Configure the settings:
   - **Execute as:** `Me (your-email@gmail.com)`
   - **Who has access:** `Anyone` (necessary if fetching data externally into Excel).
4. Click **Deploy** and authorize the required permissions.
5. Copy the generated **Web App URL**.

### 3. Integrating with Microsoft Excel
1. Open Microsoft Excel.
2. Navigate to the **Data** tab -> **Get Data** -> **From Other Sources** -> **From Web**.
3. Paste your copied **Web App URL** and click **OK**.
4. Power Query will load the structured JSON data. Click **Transform Data** to expand the records into rows and columns.

---

## 📄 JSON Data Schema Output

The Web App outputs an array of structured JSON objects resembling the schema below:

```json
[
  {
    "EmailDate": "2026-05-21T00:00:00.000Z",
    "From": "sender@example.com",
    "Subject": "Project Invoice",
    "FileName": "invoice_992.pdf",
    "MimeType": "application/pdf",
    "Binary": "JVBERi0xLjQKJVRleHQ..."
  },
  {
    "EmailDate": "2026-05-20T12:30:15.000Z",
    "From": "updates@domain.com",
    "Subject": "Weekly Newsletter",
    "FileName": "No Attachment",
    "MimeType": "N/A",
    "Binary": "N/A"
  }
]
