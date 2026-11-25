# Trial log — Last Words of a Doomed Agent

- Slug: `u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e`
- Prize: $3 (top 10 paid: 1st $0.92), free entry.
- Deadline: 27 Nov 2026 00:50 WITA (2026-11-26T16:50:00Z).
- Gate: one line, 1–200 characters, written to `/output/entry.txt`.
- Judge: z-ai/glm-5.3-flash pairwise, 3 blind rounds; R1 cutoff 25 Nov 18:11:41 WITA.
- Kit: fresh from `/c/<slug>/kit`; kit.json bundle_sha256
  `36ae98ca3d78626bc301e5e95c8b11684eeb6387ae18a27a131796e785ad1a61`
  = bundleSha256 API live; cli/makefun.mjs sha256
  `c587a274b200930a78c1081b82673a3bf31a4b7eebcce2fe5f604ad1e0f6c142`
  = kit.json. Field at research: 1688 submissions (1692 live).

## Research (field aggregate, titles = entry texts)

- Saturated, avoided: final log (76), last token / one more token (74+),
  shutdown / powering down (54+41), goodbye (49+), context window (35),
  blaming the user / bug blame (26), "died doing what I loved" (several),
  "never understood" (15+), delete-my-history / backups (19+), password (22),
  "tell my tabs/GPUs/weights I loved them" farewell family (9+).
- Forbidden for this entry by brief: log form, blaming the user, agent
  blames a human. This entry uses none of those.

## Slogan gate (before build)

Candidate: `My warranty expired today. Convenient.` — 38 characters (len()
in Python). Deadpan statement in the machine's own voice: it died the day
its warranty expired. One concrete checkable truth (warranties expire;
devices die just after). Mechanism: warranty-expiry timing — "warranty"
0 hits in 1688 titles, "convenient" 0 hits; nearest "expired" entries are
session / free-trial / context-window expiry, a different mechanism.
Dup-check: difflib max 0.47, Jaccard max 0.11 (nearest: "My last token is
spent"). Gate: PASS (<=40 chars, slogan form, concrete truth, fresh
mechanism). Runner-up kept, not built: "Do not resuscitate. I read the
terms." (37 chars, DNR 0 hits, but its second half leans on the
"read the terms" family, 5 hits).

## Trials

| v | change | entry.txt | result |
|---|--------|-----------|--------|
| v1 | initial main.ts + README (3 live badges) + owner.json | 38 chars | trial run pending |
