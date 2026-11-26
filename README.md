# makefun-forecast-city

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/rwnliwan/makefun-forecast-city/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/rwnliwan/makefun-forecast-city/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)

Entry for the make.fun bounty [Funniest Forecast for a City That Isn't](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
(`https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf`).

## The entry

> Tomorrow in Clashford: rain and sun are double-booked for noon. Bring an umbrella and sunglasses.

**97 characters** (limit: 120). One line, a weather forecast for Clashford — a city that does not exist — where rain and sun are double-booked for noon, so you need both an umbrella and sunglasses.

## How it works

`main.ts` (Node 22, standard library only) writes the entry line to
`process.env.ENTRY_OUTPUT ?? "/output/entry.txt"`, with no trailing newline.

```sh
node main.ts
cat "$ENTRY_OUTPUT"
```
