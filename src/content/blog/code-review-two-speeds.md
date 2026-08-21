---
title: "Code Review, Two Speeds"
date: 2026-08-21
description: Two teams can run the exact same code review process and mean completely different things by it — and AI-generated code is quietly collapsing that spectrum around one question, "does anyone actually understand it."
tags:
  - Engineering Culture
  - Code Review
  - AI
---

Say "I've been stuck on this PR for three rounds of comments" out loud. On one team you get a sympathetic nod. On another, someone asks what's wrong with your code. Same sentence, opposite reactions. The habit is universal; the meaning isn't.

**One end: every line gets read.**

A PR sits open until a reviewer has traced the whole thing. They question the naming. They ask why this approach and not the other, and they want it answered in the thread. A five-line change picks up fifteen comments. A "small fix" takes two days - not because it was wrong, but because the process exists to catch what a fast glance misses. Push, wait, get a batch, address it, re-request, wait again. Somebody leaves a comment at 11pm because they actually read it.

**Other end: the diff gets skimmed.**

Open it, scroll it, tests green, "LGTM," merged inside the hour. The bar isn't "best version of this change." It's "does this obviously break anything." Ships same day. If something's off, the next commit fixes it - you don't debate it in this one. The whole thing is tuned to keep the line moving.

Neither team thinks it's careless or slow. The first is protecting a codebase that's expensive to get wrong - and in payments, expensive is literal. The second is protecting momentum, because standing still costs more than a rough edge does. Both built a stack of instincts on top of the same ten-minute activity, and both are convinced they're the responsible ones.

I've watched engineers move between these two worlds and spend a month bewildered. The fast-team veteran on a thorough team feels blocked at every turn. The thorough-team veteran on a fast team feels like nobody's watching the road. Neither is right or wrong. They just recalibrated to a different default and forgot the default was ever a choice.

Now the AI part, because it's actually doing something here.

Volume is up, and a lot of the code showing up in review wasn't typed by a human. Some teams are seeing PR counts push toward double year-over-year while review capacity stays flat. The thorough teams can't read every line anymore; the math stopped working, so they're automating the pass a human used to do by eye. The fast teams are finding that "skim and merge" was quietly leaning on the fact that a human wrote the code and could vouch for it. Take that away and skimming means less than it did.

Both ends land on the same question from opposite sides. Not "did a human read this," but "does anyone actually understand it." The thorough team gets there because they can't read everything now. The fast team gets there because reading was never the real safeguard, and the code got less familiar.

The spectrum's still there. It's just reorganizing itself around comprehension instead of coverage, and plenty of teams won't notice which end they were on until the volume makes them.
</content>
