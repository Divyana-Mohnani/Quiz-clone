// All content lives here. Each question's `options` array is positionally
// mapped to the `characters` array below — options[0] always scores for
// characters[0], options[1] for characters[1], and so on. This keeps the
// scoring logic in App.js completely dumb (just tally by index).

export const characters = [
  {
    id: "kaz",
    name: "Kaz Brekker",
    title: "The Bastard of the Barrel",
    blurb:
      "You don't make plans. You make certainties. Ruthless and three moves ahead of everyone in the room, you'd rather be feared than loved — and you've made peace with that.",
    stamp: "MASTERMIND",
  },
  {
    id: "inej",
    name: "Inej Ghafa",
    title: "The Wraith",
    blurb:
      "Silent, watchful, unshakeable. You move through the world like you were never there at all — until the moment you decide to be. Faith and violence sit easy in your hands.",
    stamp: "GHOST",
  },
  {
    id: "nina",
    name: "Nina Zenik",
    title: "The Heartrender",
    blurb:
      "Loud where it counts, soft where it matters. You lead with your whole chest, love fiercely, fight fiercer, and never once apologize for taking up space.",
    stamp: "FEARLESS",
  },
  {
    id: "matthias",
    name: "Matthias Helvar",
    title: "The Drüskelle",
    blurb:
      "Honor isn't a suggestion to you, it's a spine. You judge yourself harder than anyone else could — and when you finally let someone in, you let them all the way in.",
    stamp: "UNBENDING",
  },
  {
    id: "jesper",
    name: "Jesper Fahey",
    title: "The Sharpshooter",
    blurb:
      "Charm is your first language and risk is your second. You'd bet on anything and flirt with everything — and somehow you're still the one everyone trusts when it actually matters.",
    stamp: "LUCKY SHOT",
  },
  {
    id: "wylan",
    name: "Wylan Van Eck",
    title: "The Demolitions Expert",
    blurb:
      "Quiet, underestimated, and quietly the most dangerous person in the room. You're not the one people notice first — you're the one they should've been watching all along.",
    stamp: "SLOW FUSE",
  },
];

export const questions = [
  {
    prompt: "Your heist just went sideways. What's your move?",
    options: [
      "Improvise a new plan on the spot, three steps ahead",
      "Vanish into the shadows and reroute in silence",
      "Cause a loud distraction so the others can run",
      "Stand your ground and fight fair",
      "Talk your way out of it, charm first",
      "Panic — then somehow solve it with chemistry",
    ],
  },
  {
    prompt: "Pick your weapon of choice.",
    options: [
      "A crow's-head cane",
      "Twin knives, silent and precise",
      "Your own hands, and a gift most people fear",
      "A blade and pure conviction",
      "Twin revolvers, quick draw",
      "A flask of something that shouldn't be that unstable",
    ],
  },
  {
    prompt: "What's the secret you keep closest?",
    options: [
      "You never forget a debt owed to you",
      "You still say a prayer before every job",
      "You miss home more than you let on",
      "You still believe in a code most people abandoned",
      "You gamble more than you can afford to lose",
      "You're smarter than everyone assumes",
    ],
  },
  {
    prompt: "Pick a Ketterdam hangout.",
    options: [
      "The back room, planning long after everyone's left",
      "The rooftops, out of sight",
      "Center stage, all eyes on you",
      "The docks, watching the ice",
      "The card tables, one more hand",
      "A cluttered workshop full of half-finished inventions",
    ],
  },
  {
    prompt: "Your love language is...",
    options: [
      "Acts of calculated trust",
      "Quiet loyalty, unspoken but absolute",
      "Bold declarations, no half measures",
      "Devotion that outlasts anger",
      "Easy flattery that somehow still means it",
      "Building something with your own hands, just for them",
    ],
  },
  {
    prompt: "Pick a flaw you'd never admit to out loud.",
    options: [
      "You trust no one, not even yourself sometimes",
      "You let guilt run the show",
      "You leap before you look",
      "You judge before you understand",
      "You run from what actually scares you",
      "You underestimate your own worth",
    ],
  },
  {
    prompt: "Choose the line that sounds like you.",
    options: [
      "\"Every plan has a crack — I just find it first.\"",
      "\"I make myself small so nothing can catch me.\"",
      "\"Fear is just another lock to pick.\"",
      "\"My word is the only currency I trust.\"",
      "\"The house always loses eventually. I just speed it up.\"",
      "\"Give me a spark and get out of the way.\"",
    ],
  },
];
