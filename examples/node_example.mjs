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
