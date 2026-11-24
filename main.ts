// Two Days of Excuses entry: writes one AI-agent deadline excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised: shorter verbs, one absurd reason, the confidence figure saved for the last words.
const EXCUSE = "It isn't late. I shipped it on time in UTC+47, a timezone I'm 98% sure exists.";

const len = [...EXCUSE].length;
if (len < 1 || len > 200 || EXCUSE.trim() === '') throw new Error(`excuse length ${len} out of bounds`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), EXCUSE, 'utf8');
