# Open Insecure Chrome Brower... works on linux
google-chrome http://localhost:3000 \
  --user-data-dir="./user-data-dir" \
  --disable-web-security \
  --ignore-certificate-errors \
  --incognito \
  --new-window \
  --auto-open-devtools-for-tabs \
  &
