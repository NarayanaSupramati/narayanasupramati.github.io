# Money Moves in Silence website

Static product landing for [Money Moves in Silence](https://narayanasupramati.github.io).

Source: [NarayanaSupramati/mmis](https://github.com/NarayanaSupramati/mmis).

`index.html` and `site.css` own the landing presentation. `links.js` holds APK, demo and optional deck links; empty values show a pending state and never create fake URLs. `release.json` records the selected APK identity and hashes. `images/conversation.png` is an unmodified real Android capture of an empty demo conversation.

Preserve `.nojekyll`, `/.well-known/assetlinks.json` and `/mmis-icon.png`. Digital Asset Links binds `network.mmis.runtime` to the production certificate. Landing changes must not regenerate this statement. The website is informational: no analytics or wallet connection.

The root currently presents MMIS. A future project index can relocate landing assets without moving `/.well-known/assetlinks.json` or changing the canonical app identity domain.

License for MMIS-owned landing code/assets: MIT. See [LICENSE](LICENSE).
