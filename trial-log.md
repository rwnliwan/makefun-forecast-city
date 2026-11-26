# Trial log — makefun-forecast-city (builder 6, batch 9prog)

## Competition

- Slug: `u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf`
- Title: Funniest Forecast for a City That Isn't
- Deadline: 26 Nov 2026 23:25 WITA (15:25 UTC)
- Prize: $2, first place only (winner takes all, free entry)
- Gate: `/output/entry.txt` must be UTF-8 text of 1–120 characters, not only whitespace
- Judge: house judge picks the funnier of each pair (Swiss rounds + playoff among top 3)
- Kit limits: program/v1 harness, sandbox with no network, program writes one text to
  `/output/entry.txt`, up to 60 seconds per run, transcripts of the building agent sessions required

## Entry text (selected by coordinator, built verbatim)

> Tomorrow in Clashford: rain and sun are double-booked for noon. Bring an umbrella and sunglasses.

- Length: 97 characters (Python `len()`), 97 bytes UTF-8 — under the 120-character limit.
- The joke: rain and sun are double-booked for the same noon slot, so the forecast
  ends with the practical punchline of bringing both an umbrella and sunglasses.

## Build steps

1. Downloaded a fresh kit from
   `https://make.fun/c/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/kit`
   into `build-6/kit.tar.gz` and extracted it.
2. Verified `kit.json` `bundle_sha256` against `comp-6.json` `bundleSha256` (see below).
3. Wrote `main.ts` (Node 22 stdlib only) — writes the entry line to
   `process.env.ENTRY_OUTPUT ?? "/output/entry.txt"` with no trailing newline.
4. Wrote `README.md` (3 live make.fun badges + entry text + character count),
   `LICENSE` (MIT), `.makefun/owner.json`, and this trial log.
5. Ran `main.ts` locally and checked the output file byte-for-byte (see below).
6. Created the public GitHub repo, pushed, set the homepage and topics.
7. Bundled the repo + this session's transcripts with the kit CLI and ran `check`.

## Verification

- Kit `bundle_sha256` (kit.json): `ff65f6fdd038be266f832102fd0be1b5d32780e155ce880cc48a8dfd7418a924`
- Expected `bundleSha256` (comp-6.json): `ff65f6fdd038be266f832102fd0be1b5d32780e155ce880cc48a8dfd7418a924`
- Match: yes (first download, no re-download needed)
- Kit file: `kit.tar.gz`, 15,990,960 bytes, sha256
  `e53a3da0deeb386e133a67e958f564270d7e26b1a454912932a3b4406a280a66`
- CLI: `kit/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf-kit/cli/makefun.mjs`

## Local run

- Command: `ENTRY_OUTPUT=/tmp/entry-test.txt node main.ts`
- Output file: 97 bytes, no trailing newline, content identical to the entry text above.
- Check: `python3 -c` length of the entry text = 97 characters, 97 bytes UTF-8.

## Bundle and check

- Bundle: `build-6/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf-bundle-v1.tar.gz`
  (filled in after bundling; see "Bundle and check — final numbers" below)
- Check result: (filled in after checking)

## Bundle and check — final numbers

- Commit SHA (full, 40 chars): (filled in after final commit)
- Bundle path: `build-6/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf-bundle-v1.tar.gz`
- Bundle sha256: (filled in after bundling)
- Bundle size: (filled in after bundling)
- Check result: (filled in after checking, target 14/0)
