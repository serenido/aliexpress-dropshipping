import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

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
