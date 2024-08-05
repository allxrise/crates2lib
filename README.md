# Crates2Lib Chrome/Chromium/Firefox* Extension
Redirects [crates.io](https://crates.io) links to [lib.rs](https://lib.rs).
# Usage
- Download this repository as ZIP
- Extract downloaded repository to anywhere you want, must be a place that you can't delete the folder anyhow.
- Go to extensions page of your chromium based browser, example: `chrome://extensions` or `edge://extensions`.
- Enable developer mode.
- Click to load unpacked.
- Select the root the extracted repository folder, must contain the `manifest.json`.
# *For Firefox
Firefox loads this extension with a warning for `service_worker`. Service workers currently haven't implemented in Firefox so I added a trick to `manifest.json` that adds fields for both browsers can understand.
# License
Nope!
