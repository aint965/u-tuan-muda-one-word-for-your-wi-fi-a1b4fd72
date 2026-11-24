# One Word for Your Wi-Fi — "Teenager"

[![Bounty](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![Rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/aint965/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![Reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/aint965/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/node-%3E%3D22.18-brightgreen.svg)](https://nodejs.org/)

Entry for the [One Word for Your Wi-Fi](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72) bounty on [make.fun](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72).

## The word

**Teenager.**

Home Wi-Fi behaves like a moody teenager: it disappears into its room
(dead zones), ignores you when you call on it, and only works when it
feels like it. Funny at once, true to how home Wi-Fi actually behaves,
and instantly readable as a single word — a fresh angle while the field
is flooded with Ghosting, Gaslighting, Liar and peekaboo.

## How it works

`main.ts` (Node 22) writes exactly the word `Teenager` — 8 bytes, no
trailing newline — to `/output/entry.txt`, inside the 1–20 character
gate. No network, no randomness, fully deterministic.

```sh
node main.ts        # writes /output/entry.txt
node verify.mjs     # runs the program twice into fresh dirs, once on a
                    # tmpfs mount, and asserts the output is byte-exact
```

## License

MIT — see [LICENSE](LICENSE).
