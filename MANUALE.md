# S33 - Board · Manuale

La board mette insieme gli strumenti della famiglia S33 su un unico tavolo, collegati con cavi come in un rack modulare. Tutto suona con un unico motore audio, a tempo con un solo Clock, e si può registrare in WAV o salvare come sessione.

Funziona in **Chrome sul Mac**. Safari non supporta il MIDI dal browser.

---

## 1. Primi passi

1. **Apri** `index.html` in Chrome: doppio clic sul file oppure dall'app installata (vedi § 12).
2. **Avvia l'audio**: premi **Start audio** in alto a sinistra e consenti l'accesso ai dispositivi MIDI.
3. **Suona**: con i cavi di partenza, la tastiera suona **Twin Core** e il Clock fa partire **Drum Machine**, **JSB** e gli arpeggi quando premi **Play**.

All'apertura tutti i moduli entrano nella finestra (vista d'insieme). Da lì:

- **Doppio clic sulla barra del titolo** di un modulo: si apre a tutta pagina. Altro doppio clic o **Esc** per tornare alla griglia.
- **Trascinare la barra del titolo**: sposta il pannello.
- **Trascinare l'angolo in basso a destra**: ridimensiona il pannello.
- **Arrange** (in alto a destra): riporta la griglia, se hai spostato i pannelli.

---

## 2. I cavi

La board ha due viste, scelte con l'interruttore **PLAY / PATCH** in alto a destra o con il tasto **Tab**:

- **PLAY**: gli strumenti, per suonare. I cavi sono **nascosti**. Le prese restano visibili sui bordi dei pannelli, con il centro colorato quando hanno un cavo, e si possono collegare anche da qui. Il pulsante **Cables** li mostra finché non lo premi di nuovo; mentre tiri un cavo si vedono da soli.
- **PATCH**: ogni modulo è un blocco semplice, col nome, il colore e tutte le prese in chiaro: ingressi a sinistra, uscite a destra con l'etichetta crema. Qui si collega comodamente.

**Collegare nella vista Patch**

- **Clic e clic**: un clic su una presa la accende e illumina quelle compatibili; un clic su una di esse crea il cavo. Un altro clic sulla stessa presa, un clic sul vuoto o **Esc** annullano.
- **Trascinando**: come nella vista Play.
- **Doppio clic su un cavo**: lo stacca.
- **Blocchi**: si spostano trascinando la barra del titolo, e **Arrange** li rimette in ordine da sinistra a destra. La loro disposizione è separata da quella dei pannelli ed entra nelle sessioni.
- **Doppio clic sul titolo di un blocco**: torna alla vista Play con quello strumento a tutta pagina.
- **Attività**: sui blocchi lampeggiano un LED blu quando passa MIDI e un LED verde a ogni battito del Clock; una barra in basso mostra il livello audio. Così vedi subito se un collegamento funziona.

L'audio non si ferma quando cambi vista: cambia solo quello che vedi.

**I cavi in generale**

| Colore | Porta | Esempi |
|---|---|---|
| **Arancio** | audio | OUT di uno strumento → IN della Stompbox o dell'Output |
| **Blu** | note MIDI | MIDI In → MIDI di Twin Core; P1 della JSB → Nostos |
| **Verde** | clock | CLK del Clock → CLK degli strumenti |

- **Collegare**: trascina da una presa all'altra. Le prese compatibili si illuminano.
- **Staccare**: trascina via un ingresso già collegato, oppure fai doppio clic sul cavo.
- **Più cavi dalla stessa uscita**: sono permessi, per esempio una tastiera che suona due synth insieme.
- **Più cavi nello stesso ingresso audio**: si sommano.

Gli ingressi stanno sul bordo sinistro di ogni modulo, le uscite su quello destro.

---

## 3. MIDI In e MIDI In 2

Ogni ingresso ha due menu:

- **Dispositivo**: *All inputs*, oppure un dispositivo preciso (la tastiera, *Logic Pro Virtual Out*…).
- **Canale**: *All*, oppure da *Ch 1* a *Ch 16*.

**Panic** manda un "tutte le note spente" a ogni strumento.

**Esempio con Logic.** Le tracce External MIDI di Logic escono su *Logic Pro Virtual Out*, Twin Core sul canale 1 e Nostos sul canale 2.

- MIDI In: Logic, *Ch 1* → Twin Core.
- MIDI In 2: Logic, *Ch 2* → Nostos.

> Se il **MIDI Out** scrive su un bus IAC, non lasciare un MIDI In su *All inputs*: le note tornerebbero dentro la board.

---

## 4. Clock

- **BPM**: slider da 40 a 240, oppure **Tap**.
- **Play / Stop**: avvia e ferma tutto quello che è collegato al Clock: Drum Machine, JSB e registrazione (se "Clock" è spuntato nell'Output). Con Play attivo, arpeggi e sequencer cadono sulla stessa griglia.
- **LED**: lampeggia a ogni battito, bianco sul primo della battuta.
- **Sorgente**: *Internal*, oppure *MIDI clock* da un dispositivo, per esempio Logic con "Trasmetti MIDI Clock" attivo. Compare **EXT**: tempo, Start e Stop arrivano da fuori.

Cosa riceve chi è collegato al Clock:

| Modulo | Cosa segue |
|---|---|
| Twin Core | Arpeggiatore (la manopola Tempo viene ignorata) |
| Nostos One | Arpeggiatore e delay sincronizzato |
| Vega | Arpeggiatore in sedicesimi sulla griglia del Clock (lo slider RATE viene ignorato); nell'intestazione ARPEGGIO compaiono i BPM |
| JSB | Tempo, Play/Stop, griglia |
| Drum Machine | Tempo, Play/Stop, griglia; il primo step coincide con la battuta |
| Stompbox | Tempo del delay = un battito (come il TAP) |
| Granular | SYNC dei grani, delay a tempo, registrazione sulla battuta |

---

## 5. Mixer

Un canale per strumento: **TWIN**, **NOST**, **VEGA**, **JSB**, **DRUM**, **GRAN**, **STOMP**. Nella versione ingrandita i nomi sono interi, le manopole mostrano il valore e la corsia ha la scala in dB.

- **PAN**: manopola della posizione stereo. Trascina in su o in giù (Maiusc per la regolazione fine) o usa la rotella del mouse. Doppio clic per il centro.
- **SND**: manopola della mandata verso la presa **SEND** del Mixer, presa dopo il fader. Doppio clic per azzerarla.
- **Fader**: una corsia larga con il cappuccio nel colore del canale. Trascina il cappuccio, oppure clicca in un punto della corsia per portarlo lì; la rotella del mouse lo sposta a piccoli passi; Maiusc rende tutto più fine. 0 dB è la tacca chiara a circa 4/5 della corsa, +6 dB in cima, silenzio in fondo. Doppio clic per 0 dB.
- **Livello**: scorre dentro la corsia stessa, dietro il cappuccio (verde, giallo, rosso), preso dopo fader e pan.
- **M** (mute) e **S** (solo).

**Il fader agisce sull'uscita dello strumento**, ovunque sia collegata: il fader di Twin Core lo regola anche se passa dalla Stompbox.

**Il Solo segue i collegamenti.** Lo strumento in solo resta acceso insieme a quello che sta a valle (la Stompbox, se ci passa o se riceve la sua mandata) e a monte (Twin Core, se metti in solo la Stompbox).

**La Stompbox come effetto in mandata**

1. Collega **SEND** (Mixer) → **IN** (Stompbox) e **OUT** (Stompbox) → **IN** (Output).
2. Alza **SND** sugli strumenti che vuoi mandare al riverbero o al delay. Abbassa il canale STOMP per dosare il ritorno.

Se Twin Core è collegato direttamente alla Stompbox, resta anche in serie: puoi usare le due cose insieme.

---

## 6. Gli strumenti

Ogni strumento ha la sua interfaccia completa, con preset e manopole, ed è lo stesso dell'app singola.

- **Twin Core**: monofonico, due oscillatori, patch bay interna, molla. Prese: MIDI, CLK, OUT.
- **Nostos One**: polifonico (fino a 8 voci), modulare. Le sue facce Panel e Board sono interne al modulo. Prese: MIDI, CLK, OUT.
- **Vega**: polifonico a 8 voci in stile anni '80 (tipo Juno), con chorus, arpeggiatore, modi Poly/Unison/Mono, memoria a banchi e libreria di patch Juno-106. Prese: MIDI, CLK, OUT. Di serie riceve dal **MIDI In 2**: scegli lì la tastiera e il canale, oppure sposta il cavo su MIDI In. Il pulsante POWER di Vega avvia anche l'audio della board.
- **JSB**: quattro playhead su una griglia nella scala scelta. Prese:
  - **OUT**: la voce interna della JSB. Per sentire solo i synth, abbassa o metti in mute il canale JSB nel Mixer.
  - **P1–P4**: le note di ogni playhead, sul canale 1–4. Le note lunghe durano davvero. Il Mute di un playhead ferma anche le sue note MIDI.
- **Drum Machine**: Kick, Snare, Hat e Clap, pattern fino a 7/4 con griglia da 1/8 a 1/32. Prese: CLK, OUT, **MIDI**. Ogni colpo esce anche come nota sul canale 10: Kick 36, Snare 38, Clap 39, Hat 42. Collegata a un synth, gli fa suonare quelle note.
- **Granular**: la Granular Machine a quattro tracce (vedi sotto). Prese: **IN**, **MIDI**, **CLK**, OUT.
- **Stompbox**: chorus, flanger, delay e riverbero. Si accendono con l'interruttore e si riordinano trascinando ≡. Prese: IN, CLK, OUT. Nella board ricorda i suoi pedali. I pulsanti Microfono, File e Test funzionano anche qui, come sorgenti in più.

### Granular

Quattro tracce, ognuna con la sua catena **Material → Granular → Filter → Color → Space**. Si lavora su una traccia alla volta: clic su **1–4** nel blocco TRACKS (o tasti 1–4, o i pad 1–4 dell'LPD8) e tutti i blocchi mostrano quella traccia. **M** e **S** sono mute e solo delle tracce; **TRACK MIX** regola livello e pan di ognuna. Nel Mixer della board la Granular ha un solo canale, **GRAN**.

- **Material**: il campione della traccia. **REC** registra da **IN** (quello che arriva dal cavo) oppure da **MIC**; **File** apre un file audio (anche trascinandolo sulla forma d'onda), **Demo** carica un suono di prova. Sulla forma d'onda trascini la porzione da usare; doppio clic per tornare al campione intero. **Reverse** lo suona al contrario, **Own / = track N** usa il campione di un'altra traccia.
- **Granular**: il pad sceglie la posizione (in orizzontale) e la densità (in verticale); **Auto** li fa vagare da soli. **Grains / Loop**: grani accesi oppure la porzione in loop. **Sync**: i grani cadono sulla griglia del Clock e l'altezza del pad sceglie il ritmo (da 1/4 a 1/32).
- **Filter**: Low, Band, High oppure **Tuned bank** (36 risonatori accordati su una scala, con Scale, Root, Width e Mix). **Motion** e **Rate** muovono il taglio.
- **Color**: Drive, Crush, Tilt, Comp. **Space**: delay (libero o a tempo), riverbero, **Freeze**.
- **Mod**: quattro modulatori per traccia. Clic sul nome per scegliere cosa muovono, clic su SINE/DRIFT/STEP per la forma, poi Speed e Amount. **Evolve** accelera o rallenta tutti i modulatori della traccia, **Events** aggiunge salti e freeze a caso.

**Campionare uno strumento della board**: collega la sua uscita (per esempio **OUT** della Drum Machine) all'**IN** della Granular, scegli **IN** sotto *Rec from* e premi **REC**. Per sentire anche lo strumento, lascia collegata la sua uscita anche all'Output: le uscite possono avere più cavi. Con il Clock in Play la registrazione aspetta la battuta 1 successiva (*next bar*) e, quando premi di nuovo REC, si ferma alla fine della battuta: il campione dura un numero esatto di battute. A Clock fermo parte e si ferma subito. Al massimo 30 secondi.

**LPD8**: collega MIDI In 2 (con il dispositivo LPD8) alla presa **MIDI** della Granular. Le assegnazioni sono quelle della Granular Machine: pad 1–4 scelgono la traccia, pad 5 cambia banco dei knob, pad 6 muta la traccia, pad 7 ferma tutto, pad 8 freeze; i knob K1–K8 sono segnati sulle manopole. **Learn**, **Pads** e **Reset** funzionano come nell'app.

---

## 7. Output e registrazione

- **Volume** d'ascolto, con indicatori L/R e un limiter che protegge le casse.
- **● REC / ■ STOP**: registra in WAV stereo a 24 bit. I file vanno nella cartella Download alla fine della registrazione.
- **Master**: un solo file con quello che senti, dopo il limiter e prima del volume d'ascolto.
- **Stems**: il Master più un file per strumento, dopo fader e pan. Gli strumenti muti non si salvano. Chrome può chiedere di consentire i download multipli.
- **Clock** (spuntato): REC diventa **ARMED** e parte esattamente sul primo battito al Play del Clock, si ferma allo Stop. In Logic, con lo stesso BPM, i file vanno alla battuta 1 e sono a tempo.

Nome dei file: `S33 Board <data ora> <BPM>bpm - <parte>.wav`.

> Negli Stems, il file *Stompbox* contiene già Twin Core quando Twin Core passa dalla pedaliera: in Logic usa uno dei due.

---

## 8. MIDI Out

Manda a un dispositivo del Mac le note che riceve dalla sua presa: di serie, quelle della Drum Machine.

- **Dispositivo**: per Logic attiva un bus del **driver IAC** (Configurazione MIDI Audio → Studio MIDI → Driver IAC → "Il dispositivo è online"), poi sceglilo qui.
- **Canale**: *As is* lascia il canale originale (10 per la batteria), oppure lo forza.

---

## 8b. FM-1 (synth hardware)

Il modulo **FM-1** porta nella board l'M-VAVE FM-1 collegato al Mac con il cavo USB-C. Il Mac lo vede due volte: come porta MIDI e come ingresso audio.

- **Prese**: *MIDI* (note, pitch bend e controlli verso il synth), *CLK* (MIDI Clock, Start e Stop), *OUT* (il suono dell'FM-1 che rientra nella board). Di partenza l'OUT è collegato all'Output.
- **Porta e canale**: dopo *Start audio* la board cerca da sola una porta che si chiama "FM-1"; altrimenti la scegli dal menu. Il canale è quello su cui ascolta l'FM-1 (di solito 1): tutto quello che arriva dai cavi viene mandato su quel canale.
- **Audio in**: il pulsante apre l'ingresso audio USB dell'FM-1 (al primo uso Chrome chiede il permesso). Il menu sotto serve se il nome non viene riconosciuto. *Trim* regola il livello in ingresso (doppio clic: 100%). L'FM-1 ha anche un canale nel **Mixer** e uno stem nella registrazione.
- **Attenzione al feedback**: se il Mac suona *attraverso* l'FM-1 (uscita audio di sistema = FM-1) il suono rientra dall'ingresso. Il modulo lo segnala: scegli un'altra uscita nelle Impostazioni di sistema.
- **Le note suonate sull'FM-1** non gli vengono rimandate indietro, così non suonano doppie anche se il MIDI In ascolta "All inputs".
- **Send MIDI clock**: con la presa CLK collegata al Clock, arpeggiatore e sequencer dell'FM-1 seguono il tempo della board; Play e Stop del Clock fanno partire e fermare l'FM-1.
- **Prog ‹ ›**: sceglie la voce dell'FM-1 (Program Change, voci 001–128).
- **Effects**: i sei effetti dell'FM-1 (Filter, Reverb, Delay, Distortion, Chorus, Phaser), ognuno con il suo interruttore e tre parametri, presi dalla guida MIDI di M-VAVE. Filter e Reverb hanno il tipo su un pulsante che si cambia a ogni clic (LPF/BPF/HPF, Room/Hall/Plate). Cutoff va da 0 a 107, Q da 0 a 10, tutto il resto da 0 a 100. Doppio clic su una manopola: valore di partenza.
- **Canale degli effetti**: l'FM-1 riceve gli effetti su un canale a parte (*effectch*, di default il 2), da impostare nel menu accanto a *Effects*. Deve essere diverso dal canale delle note: sullo stesso canale la rotella di modulazione (CC 1) cambierebbe il tipo di filtro, e il modulo lo segnala.
- **Send**: rimanda all'FM-1 tutte le impostazioni degli effetti. Utile dopo aver aperto una sessione o acceso il synth, perché la board non legge lo stato dell'FM-1 e all'inizio le manopole possono non corrispondere a quello che senti. Porta, canali, ingresso audio ed effetti sono salvati nella sessione.
- **Schede**: il modulo ha tre schede. *Setup* (porta, canale, audio, clock, Prog), *Voice* (l'editor della voce) e *FX* (gli effetti).

### FM-1 · editor della voce (scheda Voice)

L'FM-1 è un DX7 in piccolo: ogni voce ha 6 operatori, 32 algoritmi, LFO e inviluppo di pitch. La scheda *Voice* li rende tutti modificabili. Nel pannello piccolo trovi solo nome, banco e invio; **doppio clic sulla barra del titolo** per l'editor completo.

- **Enable SysEx**: l'editor scrive nell'FM-1 un parametro alla volta con messaggi SysEx (`F0 43 10 pp qq vv F7`). Chrome chiede il permesso la prima volta, poi la board lo richiede da sola a ogni avvio. Senza SysEx le modifiche restano nella board e partono quando lo attivi (premendo *Send voice*).
- **Da dove si parte**: la board non può leggere la voce che l'FM-1 sta suonando. Si parte da **Init** (un'onda sinusoidale sull'OP1) o da un banco **.syx** DX7 (*Load .syx…*: banchi da 32 voci o voci singole).
- **Bank A B C D**: la board tiene quattro banchi da 32 voci, come l'FM-1. *Load .syx…* carica il file nel banco selezionato.
- **on the FM-1**: spunta se quel banco è salvato anche nello stesso banco dell'FM-1 (per esempio ROM1A in A, ROM1B in B, ROM2A in C, ROM2B in D). Allora scegliere una voce manda solo un **Program Change** (A = 1–32, B = 33–64, C = 65–96, D = 97–128): l'FM-1 richiama la voce salvata e **mostra il suo nome sul display**, e l'editor carica la stessa voce. Senza spunta la board manda tutta la voce via SysEx (155 parametri): il suono cambia, ma il display dell'FM-1 resta sul nome di prima, perché il firmware aggiorna lo schermo solo quando richiama una voce dalla memoria. Anche *Prog* nella scheda Setup porta l'editor sulla stessa voce, se quel banco è caricato e spuntato.
- Dopo una modifica il nome sul display resta quello della voce salvata: per vederlo cambiato, *Store* nel banco, poi *Bank → FM-1* e salvalo sull'FM-1 nello stesso banco.
- **Algorithm ‹ ›**: lo schema mostra come sono collegati gli operatori: in giallo i portanti (quelli che si sentono), in blu i modulatori, tratteggiato il feedback. *Feedback*, *Transpose* e *Osc sync* stanno sotto lo schema.
- **A tutta pagina** l'editor si ingrandisce da solo fino a riempire il pannello (le intestazioni delle colonne degli operatori stanno una volta sola in cima); su uno schermo più stretto si rimpicciolisce invece di uscire dai bordi.
- **Operatori (OP1–OP6)**: per ognuno, *Freq* (RATIO segue la tastiera, FIXED dà la stessa frequenza su tutti i tasti; Coarse, Fine, Detune), *Level* (per i modulatori è la quantità di modulazione, quindi la brillantezza del suono), l'*inviluppo* con 4 rate e 4 livelli e il disegno accanto, la *sensibilità* (Velocity, Amp mod dall'LFO, Rate scaling) e la *key scaling* (punto di rottura, profondità e curve a sinistra e a destra). *Mute* ammutolisce un operatore senza perdere il suo livello.
- **LFO** e **Pitch envelope**: forma d'onda, velocità, ritardo, profondità di modulazione di pitch e di ampiezza; l'inviluppo di pitch ha il centro a 50.
- **Banco**: *Store* mette la voce modificata nella posizione scelta del banco; *Save voice* e *Save bank* salvano file .syx DX7 (si aprono anche in Dexed); *Bank → FM-1* manda all'FM-1 il banco selezionato, che poi sull'FM-1 salvi nella stessa lettera.
- Voce, banco e muti finiscono nella sessione della board.

- **Latenza**: il suono dell'FM-1 torna nella board con un piccolo ritardo (l'ingresso USB): rispetto agli strumenti interni può arrivare qualche millisecondo dopo.

## 9. Sessioni

In alto, il blocco **Session**:

- **Nome** della sessione.
- **Save** (⌘S): la prima volta chiede dove salvare `Nome.s33session.json`, poi sovrascrive lo stesso file.
- **Save as…** (⇧⌘S): salva una copia in un nuovo file.
- **Open…**: apre una sessione e ricarica la board. Poi premi **Start audio**.
- **New**: tutto torna allo stato iniziale. Chiede conferma con un secondo clic.

Una sessione contiene cavi, disposizione, Clock, Mixer, MIDI, Output e lo stato di ogni strumento: suono di Twin Core, patch di Nostos, suono corrente di Vega, griglia della JSB, pattern della Drum Machine, pedali della Stompbox, tracce e **campioni** della Granular (per questo una sessione con campioni lunghi può pesare qualche MB). Restano fuori le librerie dei tuoi preset (anche i banchi B–D e la libreria Juno di Vega) e la skin di Nostos.

---

## 10. Indicatore di carico

Accanto a *Running*, in alto:

- **verde** (*Load OK*): nessuna interruzione dell'audio negli ultimi 10 secondi;
- **giallo**: qualche interruzione;
- **rosso**: interruzioni frequenti.

Passa il mouse sopra la spia per vedere il dettaglio e la latenza. Se diventa rossa, abbassa prima le voci di Nostos One (da 8 a 4), metti Vega in MONO se non ti servono gli accordi e chiudi le app pesanti.

---

## 11. Scorciatoie

| Tasto | Azione |
|---|---|
| Tab | Vista PLAY / PATCH |
| Doppio clic sul titolo | Ingrandisci / riduci il modulo (nella vista Patch: apri lo strumento) |
| Esc | Chiudi il modulo ingrandito · annulla la presa accesa nella vista Patch |
| ⌘S / ⇧⌘S | Salva sessione / Salva come |
| Doppio clic su un cavo | Stacca il cavo |
| Doppio clic su fader, PAN, SND | Valore di partenza |
| Maiusc mentre trascini o usi la rotella su fader e manopole | Regolazione fine |

Dentro gli strumenti valgono le loro scorciatoie: tasti A–K in Twin Core, Nostos e Vega, spazio nella Drum Machine, tasti 1–4 e spazio (ferma tutto) nella Granular.

---

## 12. Installare la board come app

Il file funziona anche aperto con un doppio clic. Per averla come app sul Mac, con icona propria e funzionamento offline, serve un indirizzo http:

```bash
cd "s33 - Board/v17 (1.3.0)"
python3 -m http.server 8000
```

Apri `http://localhost:8000` in Chrome e scegli **Installa S33 - Board** dal menu ⋮. In alternativa pubblica la cartella su GitHub Pages, come le altre app S33.

> Ogni indirizzo ha la sua memoria: la board aperta come file, da `localhost` o da GitHub Pages non condivide le impostazioni. Per portare il lavoro da una all'altra, salva una **sessione** e aprila nell'altra.

---

## 13. Aggiornare la board

Quando aggiorni uno strumento, la board si rigenera con lo script nella cartella `build`; i file originali non vengono mai modificati. Il comando completo è nel README. Se lo script si ferma con *"atteso 1 punto da modificare"*, quello strumento è cambiato proprio dove la board lo collega: va adattato lo script.
