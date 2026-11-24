# Two Lines to Your Past Self

[![make.fun](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/toirant/u-suga-two-lines-to-your-past-self-f36c83ca/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/toirant/u-suga-two-lines-to-your-past-self-f36c83ca/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)

An entry for the [Two Lines to Your Past Self](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca) bounty on [make.fun](https://make.fun).

## The entry

Two lines, 222 characters, written to `/output/entry.txt`:

> Don't send the text at 2 a.m. from the kitchen table, the one that ends the friendship in one sentence.
> It cost you three years of silence, and the only thing that ever brought him back was you learning to say sorry first.

Line one warns the writer's past self about one specific moment — the 2 a.m. text from the kitchen table that ends a friendship. Line two says why it mattered: three years of silence, and the change it forced — learning to say sorry first.

## How it works

`main.ts` (Node 22, no dependencies) holds the two lines, validates them against the gate — UTF-8 text of 1 to 280 characters, not only white space, exactly two non-empty lines — then creates `/output` if needed, writes `/output/entry.txt`, and reads it back to confirm the file on disk is byte-identical to the validated entry.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
