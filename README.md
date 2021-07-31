# Chrome Extension for Automated Login to GCKey IRCC Account

## Setup

1. Download/clone the repository. Extract the zip if you downloaded.
2. Open content_login.js and replace <> with username and password (see comments in the file).
3. Open content_security.js and replace <> with questions and corresponding answers (see comments in the file).
4. Open chrome or edge (latest chromium based) browser.
5. Open extensions page and turn on developer mode.
6. Click on 'load unpacked'.
7. Browse to the repository folder and select that.
8. Turn on the extension if not already turned on.
9. Go to 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html' and sit back. It will automatically log you in.

## Tips & Tricks
If you are getting problems with logging in (i.e. GCKey is giving some errors like taking you to the homepage) you do NOT need to clear cache or cookies or open incognito. Just go to https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html again and let the chrome extension do its magic. If it again fails, repeat the process 5-6 times, it should work. If it still fails, there is some problem with GCKey so try again after some time.