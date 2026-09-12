---
title: "Two Incident Cultures, Same Decline Spike"
date: 2026-09-12
description: Two payments teams can run the exact same incident when a graph dips - one closes it with a doc, the other closes it with a fix - and AI just made the expensive option nearly free, which clarifies what the ritual was actually for.
tags:
  - Engineering Culture
  - Incident Response
  - AI
---

Every payments team I've worked with sits somewhere between two poles on incident response, and you can usually spot which one within a week of joining.

**Pole one: the incident isn't closed when the graph recovers.** It's closed when the doc exists.

Timeline to the minute. Five whys. A contributing-factors section written so carefully that "Arun pushed a bad config" becomes "a config change bypassed the staging check" - the depersonalizing isn't politeness, it's the mechanism. There's a 45-minute review on the calendar, action items with owners, and someone who actually chases those items a fortnight later. Done well, it's the best institutional memory an engineering org has. Done badly, it's a 2,000-word doc nobody reads and a standing meeting that outlives its own usefulness. Ritual is only worth its cost when the learning survives the formatting.

**Pole two: the fix is the postmortem.**

Someone finds the acquirer timeout, bumps it back, posts "sorted" in the channel, moves on. In a four-person on-call rotation where everyone already knows every subsystem, that's not negligence - it's proportionate. Writing a formal document about something all four of you watched happen can be pure ceremony.

The cost is deferred, and it lands in two places. The same spike recurs in six weeks because the cause was fixed but never written down, and the one who fixed it is out. And "no blame doc" rarely means no blame - it means the blame relocates to DMs, where it's less visible and much less fair than a postmortem deliberately built to have no villain.

I've watched both poles fail and both poles work. The ritual team's failure mode is theater. The reflex team's failure mode is amnesia. Neither is the safe choice; they're just different bets about where you'd rather pay.

Then the copilot showed up.

The thing quietly rearranging this: the expensive pole got cheap. A copilot reads the logs, the alerts, the deploy history, and drafts a timestamped timeline plus a candidate root cause in about ninety seconds. The half-day writeup that defined the ritual end is now almost free.

That's clarifying, because it separates two things the ritual used to bundle: the document and the reckoning. A model can generate the document. It cannot make a team decide the incident is worth an hour of collective attention, or run the room where someone says "I should've caught that in review." The doc was never the valuable part. It was the byproduct of the valuable part.

So the poles don't merge. They mutate. A fast team can now ship a postmortem document without ever holding a postmortem. A ritual team can keep auto-generating pristine docs while skipping the meeting that was the whole point.

The pattern I keep noticing: once the artifact is free, the real split isn't who writes things down. It's who still thinks an incident is worth stopping for - and teams answer that from what they value, not from what a tool makes easy. Which is roughly where they were before any of this got automated.
