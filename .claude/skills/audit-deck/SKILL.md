---
name: audit-deck
description: Audit whether an HTML "pitch deck" actually feels like a deck you'd present, not a scrolling website wearing deck chrome. Use when asked to "audit the deck", "does this feel like a pitch deck", "review the deck", "is this presentable", or before shipping any new version of a slide-based deck in this project.
---

# Audit: Does It Feel Like a Pitch Deck

A slide counter, a dot nav, and full-viewport sections do not make something a pitch deck. A pitch deck is an artifact built to be *driven by a person, out loud, in front of someone deciding whether to buy*. This skill exists because it is easy to ship something that looks like a deck in a screenshot and behaves like a website under a real presenter's hands. Your job is to catch that gap and say so plainly, even when the honest answer is uncomfortable. Do not soften a real verdict into "looks great, a few tweaks." If it does not hold up, lead with that.

## Before you start

Identify the target file. If the user names one, use it. If not, look for the most recently modified deck-shaped HTML file in the working directory (slide markup, a `.deck`/`.slide` pattern, a slide counter) and confirm which one you're auditing before proceeding. Do not silently guess between two candidates (e.g. a scrolling landing page vs. an actual paginated deck) if more than one exists.

Render it, don't just read it. Markup can imply a layout that doesn't hold at real viewport sizes or under real motion timing. Where you have a headless browser available, actually load the file and inspect slides at a normal laptop viewport (~1440×900) with animations forced to their settled end-state (add a stylesheet override that zeroes transitions/opacity rather than trying to time a screenshot mid-animation; timing-based captures are unreliable and will produce false negatives that look like bugs but aren't). If you cannot render it, say so, and audit from markup/CSS with that caveat stated up front.

## The five things that actually separate a deck from a website

Work through all five for the *whole* deck before writing a single line of the report. Reference specific slides by number and name, never a vague "some slides."

**1. Mechanics: is it driven, or is it scrolled?**
A deck advances in discrete, deliberate steps a presenter controls: click, arrow key, remote clicker. A website scrolls continuously, and a fast trackpad flick can blow past three slides at once. Check: does one input (click / arrow key / spacebar) reliably move exactly one slide? Is there a position indicator (n / total)? Can you jump to any slide without scrolling through the ones between? Is there a way to present this full-bleed, with no browser chrome, URL bar, or scrollbar visible on a shared screen? If the honest answer is "you could screen-share this while clicking through it and no one would think 'that's a webpage,'" it passes. If the browser chrome, a scrollbar, or a stray hover state would break the illusion, it doesn't.

**2. Narrative: could someone talk over this?**
Every real slide in a real pitch exists because a person is about to say one sentence and this is the visual for that sentence. For each slide, write the one sentence a presenter would say while it's on screen. If you can't write one sentence because the slide actually contains three or four separate claims bundled together (a stat block *and* a comparison table *and* a checklist *and* a call to action, say), that's not one slide, it's a webpage section wearing a slide's clothes. Flag every slide where this happens by name, and say what it should split into.
Also check the arc across the whole sequence: hook, problem, proof, offer, mechanism, objection-handling, close. Does tension build before it resolves, or does the deck give away the ask before it's earned it?

**3. Density & pacing: does it read in the time a presenter would actually leave it up?**
A slide behind someone talking gets two to ten seconds of real attention. Look at each slide and time-box yourself: could a first-time viewer identify the single most important thing on it within two seconds? Count independent "chunks" of information per slide (a chunk is anything a viewer has to separately parse: a stat, a table, a list, a quote). More than two or three chunks on one slide is a pacing failure, not a design choice, unless the slide is explicitly a reference/appendix slide meant to be lingered on rather than talked over.

**4. Craft & signature: would this be interchangeable with a competitor's deck if you removed the logo?**
Motion should be legible as *meaning something* (marking a transition, revealing a hierarchy, drawing the eye to the one thing that matters), not just present because motion is expected. Note anywhere animation is decorative rather than purposeful. Separately, look for a signature: one consistent device (a numbering system, a shape, a motif, a specific transition) that a viewer would recognize as belonging to this deck specifically, not to "decks in general." If every choice could have come from a generic template, say so.

**5. Trust & close: does it actually ask for something?**
Proof should sit next to the claim it backs, not get exiled to a separate "proof" slide disconnected from where the claim was made. Risk reversal should be concrete (specific terms, specific numbers) not just asserted ("no risk!"). And the final slide needs exactly one unambiguous next action. If there are two competing CTAs with equal visual weight and no clear primary, that's a real close-rate problem, not a nitpick.

## Report format

Lead with a direct verdict in plain language: does this feel like a pitch deck, or does it feel like a website with slide chrome bolted on? One or two sentences, no hedging.

Then list findings ranked by how much they hurt the *presenting* experience (not by how easy they are to fix). For each: name the slide, state the problem in one sentence, state the concrete fix in one sentence. Skip generic praise. If something works, it doesn't need a bullet point; spend the space on what's actually wrong. End with the single highest-leverage fix if the user only does one thing.

House rule: the deck must contain no em dashes (U+2014 or its HTML/JS escapes) in any copy or prospect data. Flag any you find as a finding and replace them before shipping.

Do not use this skill's checklist as a excuse to write a wall of text. A sharp five-finding report beats an exhaustive twenty-finding one. Prioritize ruthlessly and only surface what would actually change whether this closes a deal in a room.
