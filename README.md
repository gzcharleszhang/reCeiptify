# re:Ceiptify - Winner of Hack the North 2018 API Prizes

## Prizes won at Hack the North 2018
- Intuit Quickbooks Online API Prize
- XE.com Currency Data API Prize

## Inspiration
At UofTHacks V, we built Lejr, an app that allows you to request money from your friends using "inverse" e-transfers, so you don't have to remind them to pay you back. This inspired us to build something greater, for both expanding towards both personal and enterprise uses.

## What it does
Upload and take a picture of a receipt, our backend service will parse the amount, line items, merchant name, and currency from that image using OCR technology. The app then converts the amount to local currency and splits it among a group of users. Each user is able to transfer each other money to pay back their loans at a click of a button. For enterprise solutions, we also log each transaction to QuickBooks accounting software.

## How we built it
We built it using a receipt parsing API that uses Google Cloud and Microsoft Cognitive Services behind the scenes. We used Firebase as a live database to stream data between our applications. We used XE Currency API, TD DaVinci API, and Intuit QuickBooks API for currency exchange, money transfer, and logging accounting information. We built an node.js API server, an Angular web application, and an android application for all these services.

## Challenges we ran into
Figuring out OAuth took a while when we were trying to integrate Intuit QuickBooks API.

## Accomplishments that we're proud of
- The machine learning model can parse receipts really well, even in other languages
- Offers automatic currency exchange and currency conversion
- Integrates with accounting software for business users
- Cross-platform on web and mobile

## What we learned
- Discovered the awesomeness of firebase

## What's next for re:Ceiptify
- Enabling the parsing of invoices and other accounting documentations for enterprise solutions
