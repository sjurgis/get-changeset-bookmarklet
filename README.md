# get-changeset-bookmarklet
This bookmarklet is an alternative to Workbench method of retrieving package.xml and components.
It can be used with ANT migration toolkit, as a way to backup or distribute your application.


# Requirements
User must have 'API Enabled' and 'Modify All Data' permissions enabled.
(Optional) Bookmarklet uses notifications to let you know on retrieve status.

# How it works
Session cookie is extracted from cookies store, while package name is scraped out of DOM
Bookmarklet uses salesforce-metadata wrapper that uses connection.js file from Salesforce.
It performs retrieve() call to metadata API, does some magic around base64binary decode and uses FileSaver.js to download file to your file system.