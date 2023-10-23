## Local DEV Troubleshooting

ERR_CERT_AUTHORITY_INVALID
added this to chrome.... did not work
`chrome://flags/#allow-insecure-localhost`
https://localhost:3000/home
mode: "cors"

Maybe running chrome from the cli like this could work
`chrome --ignore-certificate-errors &`
worked got to the next one.

Might add these to bypass localhost cors problems
--disable-web-security and --user-data-dir flags
`chrome http://localhost:300 --ignore-certificate-errors --disable-web-security --user-data-dir flags --incognito &`
Moved all this into chrome.sh

# 413 Request Entity Too Large | nginx upload

Check the nginx.conf `client_max_body_size` and ensure that it is set higher than the file you want to upload
