# S33 - Board

The **S33 instruments on one board**, connected with cables like a modular rack: **Twin Core**, **Nostos One**, **JSB**, **Drum Machine**, **Granular Machine**, **Stompbox** and the hardware **M-VAVE FM-1**, plus MIDI in/out, a common Clock, a Mixer and an Output with WAV recording.

Made for **Chrome on the Mac** with a MIDI keyboard. It is a **PWA** in a single HTML file (the instruments are built in), with no dependencies.

> A personal project of the S33 family. The full user manual, in Italian, is in [MANUALE.md](MANUALE.md).

---

## Quick start

1. Open `index.html` in **Chrome** (double-click works; MIDI and audio work from a local file too).
2. Press **Start audio** and allow MIDI access.
3. Play the keyboard, press **Play** on the Clock, patch with the cables.

### Install as an app

The service worker needs `http://localhost` or `https://`:

```bash
cd "v22 (1.7.1)"
python3 -m http.server 8000
# open http://localhost:8000 in Chrome → ⋮ menu → Install S33 - Board
```

Or publish the folder on GitHub Pages (Settings → Pages → Deploy from a branch → `main` / root) and install it from there.

Browser storage is per address: a board opened as a file, from `localhost` or from GitHub Pages keeps separate settings. To move your work, **Save** a session in one and **Open** it in the other.

| | Chrome / Edge | Safari | Firefox |
|---|---|---|---|
| Audio, cables, recording | yes | partly | partly |
| MIDI in / out (Web MIDI) | **yes** | no | limited |

---

## Modules

| Module | Jacks | What it does |
|---|---|---|
| MIDI In, MIDI In 2 | MIDI out | Device and channel filter each |
| Clock | CLK out | BPM, Play/Stop, Tap; internal or external MIDI clock |
| Mixer | SEND out | Per instrument: wide fader with the level inside, pan and send knobs, mute, solo |
| Twin Core | MIDI, CLK in · OUT | Mono 2-VCO synth; arpeggiator follows the Clock |
| Nostos One | MIDI, CLK in · OUT | Polyphonic modular synth; arpeggiator and synced delay follow the Clock |
| JSB | CLK in · OUT, P1–P4 MIDI out | 4-playhead sequencer; each playhead sends MIDI on its own channel |
| Drum Machine | CLK in · OUT, MIDI out | 4-voice drum machine; hits go out as MIDI (channel 10, GM notes) |
| Granular | IN, MIDI, CLK in · OUT | 4-track granular sampler; records from its IN jack (or the mic) on the bar; LPD8 pads and knobs |
| Stompbox | IN, CLK in · OUT | Chorus, flanger, delay (follows the Clock), reverb |
| FM-1 | MIDI, CLK in · OUT | The M-VAVE FM-1 over USB-C: notes, program change, a full DX7-style voice editor (SysEx: 6 operators, 32 algorithms, LFO, pitch EG, four .syx banks mirrored on the FM-1's banks A–D) and its six effects (CC on the FX channel) to the synth, MIDI Clock, its USB audio back into the board |
| Output | IN | Volume, limiter, meters, **REC** to WAV (master or stems) |
| MIDI Out | MIDI in | Sends to a Mac MIDI port (IAC bus, Logic…) |

Cable colours: **orange** audio, **blue** MIDI, **green** clock.

Two views (**PLAY / PATCH**, or the Tab key): *Play* shows the instruments with the cables hidden (the **Cables** button shows them); *Patch* shows every module as a simple block with all its jacks, for easy patching (click an output, then an input).

---

## Folder structure

```
index.html              the board with all instruments built in
manifest.webmanifest    PWA manifest
sw.js                   service worker (offline cache)
icons/                  icon.svg, 192/512, maskable, apple-touch, favicon
README.md               this file
MANUALE.md              user manual (Italian)
```

## Rebuilding

The board is generated from the instruments' own files by `build/build.py`; the originals are never modified.

```bash
cd "s33 - Board"
python3 build/build.py \
  "../s33 - Twin Core/v9 (1.0.2)/index.html" \
  "../s33_Stompbox/v3/index.html" \
  "../s33_Drum Machine/s33-Drum Machine-L01/s33-drum-machine-v8/index.html" \
  "../s33 - Nostos One Synth/v7 (1.5.0)/index.html" \
  "../s33 - JSB/v9/index.html" \
  "../s33_Granular/s33_Granular Machine/v4 (Board)/index.html" \
  build/board-template.html "vNN (x.y.z)/index.html"
```

If an instrument changes in a place the script patches, it stops with *"atteso 1 punto da modificare"* and names the instrument: that patch needs updating. After publishing a new version, change `VERSIONE` in `sw.js`.

## Known limits

- One shared audio engine: with every instrument busy the Mac can run out of headroom; the **Load** light in the top bar turns amber or red. Lower Nostos One's voices first.
- Twin Core's own Tempo knob is ignored while its CLK jack is patched.
- Granular: the samples travel inside the session file, which can grow to a few MB.
- Stems: Twin Core reaches the Stompbox through a cable, so the *Stompbox* stem already contains it.

## Use

Personal project, free to study and modify. No warranty of any kind.
