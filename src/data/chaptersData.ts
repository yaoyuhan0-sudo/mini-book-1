import { Chapter } from "../types";

export const chaptersData: Chapter[] = [
  {
    id: 1,
    slug: "duomo",
    title: "1. Santa Maria del Fiore",
    subtitle: "L'Ingegno Ingegneristico della Cupola",
    period: "Umanesimo Scientifico - XIV-XV Secolo",
    mapX: 250,
    mapY: 130,
    leftPage: {
      chapterLabel: "CAPITOLO I — LA CUPOLA",
      title: "Il Trionfo della Spina di Pesce",
      paragraphs: [
        "Filippo Brunelleschi, architetto e orefice fiorentino, si trovò di fronte alla sfida più titanica del Rinascimento: voltare la gigantesca cupola ottagonale di Santa Maria del Fiore, un'opera rimasta incompiuta a causa delle dimensioni senza precedenti. Nessun sistema di centine di legno dell'epoca poteva reggerne il peso durante la costruzione. L'ingegno brunelleschiano risiede nell'aver ideato una cupola autoportante.",
        "Il segreto risiedeva nella disposizione strutturale dei mattoni denominata 'spina di pesce' (opus spicatum). Sotto la direzione di Brunelleschi, i mattoni non venivano poggiati in piani orizzontali ad arco, ma secondo costoloni elicoidali inclinati. Ciascun mattone verticale fungeva da chiave per fermare la spinta dei mattoni adiacenti distesi, impedendo loro di scivolare verso l'interno prima che la malta si fosse completamente asciugata.",
        "Questo straordinario sistema di ammorsamento, unito all'uso di un doppio guscio (una cupola interna spessa per sostenere lo sforzo e una esterna più leggera a protezione dagli agenti atmosferici), permise di realizzare l'opera senza l'ausilio di impalcature da terra, stupendo l'Europa intera e ponendo le basi della moderna ingegneria civile."
      ],
      task: {
        type: "brick-align",
        instruction: "Allinea i mattoni inclinati del costolone: ruota l'angolazione teorica fino a impostarla sul valore esatto di 45 gradi affinché la 'spina di pesce' si incastri perfettamente e sostenga la centinatura.",
        successMessage: "Eccellente! L'incastro a 45° distribuisce perfettamente le forze tangenziali. Il modulo della cupola è ora autoportante."
      }
    },
    rightPage: {
      paragraphs: [
        "L'armonia estetica della Cattedrale dialoga direttamente con la razionalità delle sue proporzioni. La rigida suddivisione geometrica dell'alveo ottagonale distribuisce le spinte d'angolo sui grandi contrafforti sottostanti, mentre le catene di pietra e legno di quercia poste all'interno fungono da veri e propri cerchiacci di ferro che stringono e contengono la spinta centrifuga della Cupola.",
        "L'osservatore che si posiziona al centro della navata sperimenta un profondo senso di ordine logico. Il contrasto cromatico tra la pietra serena grigia e l'intonaco chiaro delle pareti incarna il manifesto visivo dell'Umanesimo fiorentino: l'uomo che, attraverso la matematica, interpreta ed organizza lo spazio geometrico del sacro, rendendosi partecipe dell'armonia divina nell'universo creato."
      ],
      illustration: {
        id: "duomo-cupola",
        figureNumber: 1,
        title: "Santa Maria del Fiore: Studio della Cupola",
        caption: "Fig. 1 — Sezione assonometrica della doppia calotta brunelleschiana con dettaglio del camminamento interno e orditura dei mattoni a spina di pesce.",
        type: "svg-duomo"
      },
      quiz: {
        question: "Quale fu il vantaggio primario dell'invenzione brunelleschiana del doppio guscio a spina di pesce?",
        options: [
          "Consentire alla cupola di resistere meglio ai terremoti grazie ai giunti flessibili.",
          "Voltare la cupola senza l'ausilio di grandi armature lignee di sostegno ancorate al suolo.",
          "Permettere l'affrescatura simultanea dell'interno e dell'esterno della calotta principale."
        ],
        correctIndex: 1,
        explanation: "La cupola autoportante permise di risparmiare tonnellate di legname e di superare l'altezza immane di oltre 50 metri dal suolo, che rendeva impossibile l'uso delle classiche centine di legno."
      }
    }
  },
  {
    id: 2,
    slug: "signoria",
    title: "2. Piazza della Signoria",
    subtitle: "La Retorica Politica del Marmo",
    period: "Età delle Repubbliche e del Ducato - XV-XVI Secolo",
    mapX: 230,
    mapY: 210,
    leftPage: {
      chapterLabel: "CAPITOLO II — LA SIGNORIA",
      title: "Il Marmo come Strumento di Potere",
      paragraphs: [
        "Piazza della Signoria rappresenta il cuore civile e politico di Firenze, un teatro all'aperto dove le sculture monumentali non avevano una semplice funzione decorativa, bensì una profonda valenza di comunicazione politica e simbolica. Ogni statua collocata davanti al Palazzo dei Priori (Palazzo Vecchio) rispondeva ad una specifica dichiarazione ideologica della fazione egemone.",
        "Quando la Repubblica fiorentina scacciò temporaneamente i Medici alla fine del XV secolo, scelse il 'David' di Michelangelo come guardiano della città. Collocato davanti all'ingresso di Palazzo della Signoria, il giovane eroe biblico che si prepara ad abbattere il gigante Golia simboleggiava il cittadino repubblicano che difende la libertà della sua patria contro i tiranni stranieri ed interni, personificando l'austero rigore morale della gioventù fiorentina.",
        "Con il ritorno definitivo dei Medici e l'istituzione del Granducato sotto Cosimo I, la piazza vide una drastica restaurazione iconografica. Il 'Perseo' di Benvenuto Cellini nella Loggia dei Lanzi, che solleva trionfante la testa recisa di Medusa, divenne il simbolo del duca Cosimo che 'taglia le teste' dell'anarchia repubblicana, ristabilendo l'ordine assoluto dello Stato mediceo attraverso la forza sublime delle arti."
      ],
      task: {
        type: "statue-match",
        instruction: "Associa ciascun capolavoro di marmo o bronzo al suo rispettivo messaggio politico di propaganda: trascina le definizioni o clicca sul corretto accoppiamento.",
        successMessage: "Corretto! Il David repubblicano simboleggia la virtù vigile contro la tirannia; il Perseo mediceo rappresenta lo schiacciamento della sedizione repubblicana."
      }
    },
    rightPage: {
      paragraphs: [
        "La costruzione della Loggia della Signoria (detta dei Lanzi) alla fine del Trecento offrì un riparo coperto per le assemblee dei priori e le cerimonie pubbliche. Sotto il controllo granducale si trasforma in un museo dinastico, dove la monumentalità della pietra serena e le proporzioni classiche degli archi a tutto sesto sanciscono lo status regale della casata regnante.",
        "Anche la maestosa Fontana del Nettuno di Bartolomeo Ammannati (chiamata affettuosamente 'il Biancone' dai fiorentini) celebra l'egemonia marittima di Firenze e le ambizioni territoriali medicee nelle rotte commerciali del Mediterraneo, consolidando l'idea di una repubblica mercantile ormai mutata in uno Stato moderno, burocratico e centralizzato."
      ],
      illustration: {
        id: "signoria-loggia",
        figureNumber: 2,
        title: "Loggia dei Lanzi e Palazzo della Signoria",
        caption: "Fig. 2 — Rilievo geometrico delle arcate a tutto sesto della Loggia e allineamento visivo sul basamento monumentale della statuaria civile fiorentina.",
        type: "svg-signoria"
      },
      quiz: {
        question: "Cosa simboleggiava originariamente il David di Michelangelo per i governanti della Repubblica fiorentina?",
        options: [
          "La purezza teologica contro le filosofie neoplatoniche.",
          "La virtù del cittadino repubblicano capace di sconfiggere i tiranni attraverso l'intelletto e il coraggio.",
          "L'alleanza diplomatica e commerciale con lo Stato Pontificio."
        ],
        correctIndex: 1,
        explanation: "Il David divenne l'emblema della democrazia repubblicana della città, in lotta costante contro i giganti limitrofi e la prepotenza della casata medicea esiliata."
      }
    }
  },
  {
    id: 3,
    slug: "mercato",
    title: "3. Mercato del Porcellino",
    subtitle: "La Via della Seta e il Fiorino d'Oro",
    period: "L'Epoca mercantile e corporativa - XII-XIV Secolo",
    mapX: 180,
    mapY: 260,
    leftPage: {
      chapterLabel: "CAPITOLO III — MERCATO E COINAGE",
      title: "La Macchina Economica delle Arti",
      paragraphs: [
        "La potenza finanziaria di Firenze tra il Medioevo e il Rinascimento fu guidata dalle Arti, le corporazioni di mestiere che detenevano il monopolio economico e la rappresentanza politica nel governo cittadino. Tra queste spiccava l'Arte di Calimala (commercianti e raffinatori di panni di lana esteri) e l'Arte della Lana, le quali controllavano immense rotte manifatturiere e commerciali in tutta Europa.",
        "Il pilastro di questo impero commerciale era il Fiorino d'Oro, coniato per la prima volta nel 1252. Con un peso standard di circa 3,53 grammi di oro quasi puro (24 carati), il fiorino divenne il 'dollaro del Medioevo', la valuta stabile preferita per le grandi transazioni internazionali grazie al rigido controllo di qualità attuato dai saggi di zecca fiorentini.",
        "Nei dintorni del Mercato Nuovo, riparato sotto eleganti loggiati mercatali, fiorivano le botteghe dei banchieri fiorentini (iscritti all'Arte del Cambio). Su semplici tavoli di legno coperti da un panno verde (i 'banchi'), essi inventarono la partita doppia e la lettera di cambio, gettando le fondamenta del sistema creditizio ed assicurativo internazionale."
      ],
      task: {
        type: "guild-trade",
        instruction: "Regola il cambio per i commercianti dell'Arte della Lana: converti 12 libbre di lana finissima inglese nell'esatto controvalore di 4 Fiorini d'Oro, calcolando un tasso storico costante di 3 libbre per fiorino.",
        successMessage: "Transazione approvata dalla Zecca! La bilancia di precisione ha registrato esattamente 4 Fiorini d'Oro a fronte delle 12 libbre di lana."
      }
    },
    rightPage: {
      paragraphs: [
        "La Loggia del Mercato Nuovo ospitava i mercanti di seta e preziosi prima di specializzarsi, nei secoli successivi, nella vendita di paglia e cuoio. Al suo interno è posizionata la famosa 'pietra dello scandalo' (o dell'acculata), punto esatto in cui venivano puniti pubblicamente i mercanti insolventi o falliti, costringendoli a battere ritualmente le natiche sul marmo bicolore.",
        "Poco distante, vigila la celebre fontana bronzea del Porcellino (in realtà un cinghiale), eseguita da Pietro Tacca nel Seicento. La leggenda impone di strisciare la mano sul grugno lucido dell'animale ed inserire una moneta nella bocca: se questa scivola oltre la grata sottostante cadendo nell'acqua, la fortuna arride ai commerci e al ritorno in città dell'accademico."
      ],
      illustration: {
        id: "mercato-fiorino",
        figureNumber: 3,
        title: "Il Fiorino d'Oro e la Bilancia di Zecca",
        caption: "Fig. 3 — Rilievo della moneta fiorentina del 1252 recante il Giglio stilizzato (recto) e San Giovanni Battista protettore della città (verso).",
        type: "svg-mercato"
      },
      quiz: {
        question: "Quale fu il fattore principale che rese il Fiorino d'Oro la valuta più stabile d'Europa?",
        options: [
          "Il peso costantemente garantito di 3,53 grammi di oro a 24 carati senza svalutazioni.",
          "La protezione militare che la marina fiorentina offriva alle flotte mercantili.",
          "L'obbligo imposto da papa Bonifacio VIII di riscuotere le decime solo in fiorini."
        ],
        correctIndex: 0,
        explanation: "La rigidità dei controlli operati dai saggi della Zecca fiorentina assicurò che il fiorino non perdesse mai il suo valore metallico, rendendolo moneta fiduciaria globale."
      }
    }
  },
  {
    id: 4,
    slug: "oblate",
    title: "4. Biblioteca delle Oblate",
    subtitle: "Il Chiostro della Cura e della Memoria",
    period: "La solidarietà e l'istruzione - XIII-XXI Secolo",
    mapX: 340,
    mapY: 170,
    leftPage: {
      chapterLabel: "CAPITOLO IV — OBLATE",
      title: "Dal Convento alla Biblioteca degli Studenti",
      paragraphs: [
        "L'attuale Biblioteca delle Oblate sorge in un antico complesso claustrale fondato nel 1288 per ospitare le Oblate, pie donne laiche che curavano le inferme nel vicino Ospedale di Santa Maria Nuova, fondato da Folco Portinari (padre della Beatrice cantata da Dante Alighieri). Le suore offrivano un servizio di assistenza spirituale e sanitaria gratuito, lavando e ricucendo le bende dei pazienti.",
        "Il chiostro interno trecentesco, con il suo suggestivo doppio ordine di logge ad archi poggianti su eleganti colonne in pietra serena, era il luogo in cui le suore coltivavano erbe officinali nell'orto dei semplici e stendevano il bucato dell'ospedale. Un ambiente pensato per l'isolamento e la contemplazione operosa, protetto dal tumulto delle vie cittadine.",
        "Alla fine del Novecento, con la dismissione delle attività ospedaliere, il complesso è stato restaurato in modo esemplare, trasformandosi in una tra le più vibranti ed amate biblioteche pubbliche d'Europa. Gli studenti universitari si radunano oggi là dove un tempo risuonavano i canti delle suore, creando una sintesi perfetta tra la conservazione della memoria storica fiorentina e la cultura contemporanea dello studio."
      ],
      task: {
        type: "manuscript-translate",
        instruction: "Decifra ed unisci la corretta traduzione del motto delle Oblate scolpito nel portale del chiostro: 'Misericordia et Cura' deve essere decifrato con le giuste corrispondenze in italiano.",
        successMessage: "Ottimo lavoro ermeneutico! Il testo decifrato, 'Pietà e dedizione nell'assistenza quotidiana', corrisponde perfettamente al carisma storico originario."
      }
    },
    rightPage: {
      paragraphs: [
        "La terrazza all'ultimo piano della biblioteca offre uno dei punti panoramici più ravvicinati e sbalorditivi sulla Cupola del Brunelleschi, che svetta monumentale sopra i tetti rossi di Firenze. Questo spazio rappresenta un vero e proprio 'laboratorio visivo' per lo studente di architettura e per l'appassionato d'arte.",
        "Negli scaffali storici della biblioteca sono conservati rari trattati di infermieristica medievale e mappe topografiche di Firenze. Lo studio approfondito di queste fonti documentarie consente di rivalutare il ruolo cardine che la solidarietà laica, associata alla programmazione urbanistica ed edilizia della signoria, ha avuto nello sviluppo sociale del Rinascimento fiorentino."
      ],
      illustration: {
        id: "oblate-chiostro",
        figureNumber: 4,
        title: "Il Chiostro delle Oblate: Studio dei Loggiati",
        caption: "Fig. 4 — Dettaglio prospettico del doppio chiostro loggiato trecentesco con visuale ravvicinata dell'intradosso degli archi ed elemento scolpito angolare.",
        type: "svg-oblate"
      },
      quiz: {
        question: "Quale fu il legame storico originario tra il complesso delle Oblate ed il vicino Ospedale di Santa Maria Nuova?",
        options: [
          "Le Oblate erano le infermiere laiche che lavavano i panni e curavano le donne malate dell'Ospedale.",
          "Il convento fungeva da zecca secondaria per la coniazione dei fiorini destinati alla carità ospedaliera.",
          "I locali delle Oblate erano adibiti a magazzino esclusivo dei marmi bianchi per la Fabbrica del Duomo."
        ],
        correctIndex: 0,
        explanation: "Le Oblate, sotto la guida della badessa, facevano voto di obbedienza e carità dedicando l'intera vita alla cura materiale e al bucato dei malati di Santa Maria Nuova."
      }
    }
  },
  {
    id: 5,
    slug: "spirito",
    title: "5. Santo Spirito",
    subtitle: "L'Armonia Prospettica dell'Oltrarno",
    period: "La Prospettiva e la Vita Popolare - XV-XVI Secolo",
    mapX: 100,
    mapY: 330,
    leftPage: {
      chapterLabel: "CAPITOLO V — SANTO SPIRITO",
      title: "La Proporzione Divina e la Semplificazione Visiva",
      paragraphs: [
        "Attraversando il fiume Arno verso sud, si accede all'Oltrarno, il rione storico degli artigiani e delle tradizioni popolari. Qui sorge la Basilica di Santo Spirito, l'ultimo grandioso progetto concepito da Filippo Brunelleschi a partire dal 1434. La chiesa rappresenta la sintesi estrema della sua concezione dello spazio sacro fondata sulla modularità rigorosa della campata quadrata.",
        "L'interno di Santo Spirito è governato da relazioni matematiche costanti: l'altezza della navata centrale è esattamente il doppio della sua larghezza, e le navatelle laterali sono costituite da una successione perfetta di moduli spaziali identici. L'arredo decorativo è semplificato, caratterizzato dalla bicromia della pietra serena grigia scolpita in capitelli corinzi che si staglia sulle pareti d'intonaco bianco puro.",
        "Al di fuori del tempio, la piazza omonima è da secoli l'agorà informale dell'Oltrarno fiorentino. Un microcosmo dove si intrecciano botteghe tradizionali di restauro di mobili, laboratori di doratura, tipografie artistiche, cartolai e i vivaci mercati rionali. Questa coesistenza tra sublime rigore architettonico e spregiudicata vita quotidiana rende Santo Spirito l'anima più verace e pulsante della fiorentinità."
      ],
      task: {
        type: "golden-ratio",
        instruction: "Regola i rapporti geometrici della navata: imposta il cursore di simmetria modulare sull'esatto rapporto di 1:2 tra larghezza e altezza per stabilire la proporzione brunelleschiana.",
        successMessage: "Armonia raggiunta! I moduli prospettici della navata centrale ora collimano perfettamente con l'asse di fuga dei capitelli in pietra serena."
      }
    },
    rightPage: {
      paragraphs: [
        "La facciata esterna della basilica, priva di marmi di rivestimento e rivestita in semplice intonaco nocciola dalle linee mosse e sinuose, fu ultimata solo alla fine del Settecento. Essa costituisce una celebre icona urbanistica, il cui profilo curvilineo domina pacificamente lo slargo frequentato da studenti, letterati e giovani artisti di tutto il mondo.",
        "Nel refettorio trecentesco attiguo si trova il grandioso affresco della Crocifissione di Andrea Orcagna, sfortunatamente mutilato dal crollo del tetto ma tuttora sublime testimone del passaggio formale tra il gotico e la rivoluzione prospettica rinascimentale operata dagli allievi di Giotto ed immortalata per sempre nell'impianto planimetrico brunelleschiano."
      ],
      illustration: {
        id: "spirito-prospettiva",
        figureNumber: 5,
        title: "Santo Spirito: Analisi della Prospettiva di Navata",
        caption: "Fig. 5 — Disegno geometrico con linee di fuga proiettate sull'abside centrale ed evidenziazione del modulo cubico della navatella laterale.",
        type: "svg-spirito"
      },
      quiz: {
        question: "Quale accoppiamento cromatico e materico predilige Brunelleschi nell'interno delle sue chiese per scandire i volumi architettonici?",
        options: [
          "Broccatello rosso di Siena e marmo giallo di Carrara.",
          "Elementi plastici in pietra serena grigia su fondali di intonaco bianco calce.",
          "Mosaici dorati in stile bizantino alternati a fasce di diaspro verde di Prato."
        ],
        correctIndex: 1,
        explanation: "Brunelleschi rinuncia alla policromia medievale per imporre una chiarezza razionale basata sul contrasto nitido tra il grigio-azzurro della pietra serena e il bianco dell'intonaco."
      }
    }
  }
];
