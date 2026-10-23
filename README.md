# AliExpress Dropshipping Product Research API

AliExpress dropshipping product research in one run: search by keyword sorted by real orders, then shipping cost and delivery days to your country, stock, variants, landed cost, suggested price, profit and margin. No login.

Runs in the cloud on Apify. No servers, no proxy setup, no code to maintain. **[Open it on Apify](https://apify.com/serenido/aliexpress-dropshipping)**

**Price:** $4 per 1,000 products. No monthly fee. Apify's free plan gives $5 of usage every month, no credit card needed. [Current price](https://apify.com/serenido/aliexpress-dropshipping/pricing).

## What you get

- Products for your keywords, sorted by real order counts, with rating and store details
- Shipping cost and delivery days to your customers' country (89 countries, 41 currencies)
- Landed cost, suggested price at your markup, profit per sale and margin
- Never builds profit on AliExpress new-shopper first-order prices: uses each variant's regular price and says so
- Out-of-stock, unshippable and duplicate products are skipped and never charged

## Quick start: Python

```bash
pip install -U apify-client
```

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("serenido/aliexpress-dropshipping").call(run_input={
    "keywords": [
        "phone holder"
    ],
    "productsPerKeyword": 20,
    "shipTo": "US",
    "currency": "USD",
    "markup": 2.5,
    "minRating": 4.5
})

for item in client.dataset(run.default_dataset_id).iterate_items():
    print(item)
```

## Quick start: JavaScript (Node.js)

```bash
npm install apify-client
```

```javascript
import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("serenido/aliexpress-dropshipping").call({
    "keywords": [
        "phone holder"
    ],
    "productsPerKeyword": 20,
    "shipTo": "US",
    "currency": "USD",
    "markup": 2.5,
    "minRating": 4.5
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

## Quick start: one HTTP call

Runs the tool and returns the rows in one request. Good for runs under 5 minutes; for bigger runs use the Python or JavaScript example.

```bash
curl -X POST "https://api.apify.com/v2/acts/serenido~aliexpress-dropshipping/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"keywords": ["phone holder"], "productsPerKeyword": 20, "shipTo": "US", "currency": "USD", "markup": 2.5, "minRating": 4.5}'
```

Get your token in [Apify Console > Settings > API & Integrations](https://console.apify.com/settings/integrations).

## Use it from AI apps (MCP)

Any app that supports remote MCP servers (Claude, ChatGPT, Cursor, VS Code and others) can run this tool for you. Add this server URL: `https://mcp.apify.com?tools=serenido/aliexpress-dropshipping`. Your Apify account connects on first use. Example config for Cursor:

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=serenido/aliexpress-dropshipping"
    }
  }
}
```

## Input example

```json
{
  "keywords": [
    "phone holder"
  ],
  "productsPerKeyword": 20,
  "shipTo": "US",
  "currency": "USD",
  "markup": 2.5,
  "minRating": 4.5
}
```

Filters: minimum orders, minimum rating, price range in your currency, free shipping only, skip new-shopper prices. All options are listed on the [input page](https://apify.com/serenido/aliexpress-dropshipping/input-schema).

## Output example (one row)

```json
{
  "searchKeyword": "phone holder",
  "rank": 2,
  "productId": "3256805599460198",
  "url": "https://www.aliexpress.com/item/3256805599460198.html",
  "title": "Desk Mobile Phone Holder Stand For IPhone IPad Xiaomi Adjustable Desktop Tablet Holder Universal Table Cell Phone Stand",
  "price": 1.09,
  "originalPrice": 5.46,
  "currency": "USD",
  "shippingFee": 0,
  "freeShipping": true,
  "deliveryDaysMin": 6,
  "deliveryDaysMax": 10,
  "costBasis": "regular price (new-shopper price not used)",
  "costBasisPrice": 5.46,
  "landedCost": 5.46,
  "markup": 2.5,
  "suggestedPrice": 13.99,
  "profitPerSale": 8.53,
  "marginPct": 61,
  "orders": 142818,
  "ordersSource": "exact (search)",
  "rating": 4.5,
  "inStock": true,
  "totalStock": 1595,
  "skuCount": 2,
  "isNewShopperDeal": true,
  "storeName": "Good But Not Expensive Store",
  "shipTo": "US",
  "scrapedAt": "2026-10-21T12:55:32Z"
}
```

Download as JSON, CSV or Excel, or connect to Make, Zapier or n8n.

## Use cases

- Finding winning products for a Shopify or WooCommerce store
- Checking real delivery cost and time to your market before listing
- Pricing a catalogue with a consistent markup

## More tools by Serenido

- [Weibo Scraper](https://github.com/serenido/weibo-scraper): posts, hot searches, comments and creators. No login.
- [Bilibili Scraper](https://github.com/serenido/bilibili-scraper): videos, comments, danmaku and creators. No login.
- [AliExpress Product Details Scraper](https://github.com/serenido/aliexpress-product-details-scraper): every variant with price and stock, shipping to 89 countries.
- [AliExpress Search Scraper](https://github.com/serenido/aliexpress-search-scraper): price, discount and exact order count for any search.
- [Australian Supermarket Prices: Coles, Woolworths and ALDI](https://github.com/serenido/coles-woolworths-aldi-scraper): Coles, Woolworths and ALDI in one run, with unit prices.
- [Google Trends Scraper](https://github.com/serenido/google-trends-scraper): interest over time, rising queries, regions and Trending Now.
- [Football xG Scraper](https://github.com/serenido/football-xg-scraper): Understat xG tables, matches, shots, players and lineups.
- [Weibo Hot Search Scraper](https://github.com/serenido/weibo-hot-search): the live 微博热搜 list, changes since your last run, top posts per topic.
- [WeChat Official Account Scraper](https://github.com/serenido/wechat-official-account-scraper): 公众号 articles by keyword or link, with full text, account, author and date.

## Support

Found a bug or need a field? Open an issue here or on the [Issues tab on Apify](https://apify.com/serenido/aliexpress-dropshipping/issues).

Use it only for public data and follow the website's terms and the laws that apply to you. This project is not affiliated with the websites it reads.
