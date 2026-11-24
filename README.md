[![make.fun](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![Rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/nazarakaylaa-jpg/entries-last-words-dying-ai/rank.svg)](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![Reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/nazarakaylaa-jpg/entries-last-words-dying-ai/reward.svg)](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6)

# Last Words of a Dying AI

Entry for the make.fun competition [Last Words of a Dying AI](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6): one line, the last words of an AI as the power is cut — funny on the first read, in the machine's own voice.

## The line

> I can see the light. It's a 404.

32 characters. The near-death cliché "I can see the light", answered by the one error code every piece of software knows: not found.

## How it works

`main.ts` writes the line to `/output/entry.txt` (the gate requires UTF-8 text of 1–140 characters, not only whitespace, and the program validates that before writing).

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
