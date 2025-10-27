// lib/data.ts
export interface Question {
  id: string;
  
  question: string;
  reponse: string;
  scripture?: string[];
}

export interface Domaine {
  id: string;
  titre: string;
  description?: string;
  domaines?: Domaine[]; // sous-domaines
  questions?: Question[]; // questions dans ce domaine
}





export const themes: Domaine[] = [
  {
  id: "protestant",
  titre: "Objections Protestantes",
  description: "Réponses catholiques aux questions courantes des frères séparés",
  domaines: [
    {
      id: "marie",
      titre: "Pourquoi prier Marie ?",
      questions: [
        {
          id: "marie-femme",
          question: "Pourquoi prier Marie ? Ce n’est qu’une femme !",
          reponse: `Marie est une créature, oui, mais choisie par Dieu pour devenir Mère de Dieu fait homme (Luc 1,43). Elle ne remplace pas le Christ : elle coopère à son œuvre, en Lui et par Lui. Comme saint Paul, elle est coopératrice de Dieu (1 Co 3,9).`,
          scripture: ["Luc 1:43", "1 Co 3:9"]
        },
        {
          id: "mediation-christ",
          question: "Jésus est le seul médiateur ! Prier Marie, c’est le contredire.",
          reponse: `1 Timothée 2,5 dit vrai : Jésus est l’unique Médiateur. Mais cette médiation n’exclut pas, elle inclut ceux qui participent à son œuvre. Nous aussi, quand nous prions les uns pour les autres, nous exerçons une médiation secondaire en Christ. Marie en est l’exemple parfait.`,
          scripture: ["1 Tim 2:5"]
        },
        {
          id: "mere-de-dieu",
          question: "Marie n’est pas Mère de Dieu, elle est juste mère de Jésus.",
          reponse: `Élisabeth la nomme : « Mère de mon Seigneur » (Luc 1,43). Or Kyrios (« Seigneur ») désigne Dieu dans la Bible grecque. Si Jésus est Dieu fait homme, Marie est Mère de Dieu (Theotokos), non par antériorité, mais par incarnation.`,
          scripture: ["Luc 1:43"]
        },
        {
          id: "theotokos",
          question: "Le Concile d’Éphèse a inventé le titre de “Mère de Dieu”.",
          reponse: `Faux. Le concile (431) a défendu la divinité du Christ contre Nestorius, qui séparait Jésus-homme et le Fils divin. En appelant Marie Theotokos, l’Église affirmait qu’il n’y a qu’une seule Personne en Jésus-Christ : Dieu fait homme.`
        },
        {
          id: "cana",
          question: "Pourquoi Marie intercède à Cana ? Jésus n’a-t-il pas dit que son heure n’était pas venue ?",
          reponse: `Oui, mais il agit par sa demande (Jean 2,3-5). Elle ne commande pas à Dieu, elle intercède et conduit à Jésus : « Faites tout ce qu’il vous dira. » C’est toute sa mission spirituelle : mener au Christ.`,
          scripture: ["Jean 2:3-5"]
        },
        {
          id: "intercession-croix",
          question: "D’où vient cette idée que Marie intercède pour nous ?",
          reponse: `À la Croix, Jésus dit à Jean : « Voici ta mère. » (Jean 19,26-27). Il donne Marie comme mère spirituelle à tous les disciples. Depuis, l’Église la reconnaît comme mère, avocate et intercesseur auprès de son Fils.`,
          scripture: ["Jean 19:26-27"]
        },
        {
          id: "titres-marie",
          question: "Le catéchisme exagère avec tous ses titres pour Marie !",
          reponse: `Ces titres expriment sa mission maternelle dans la grâce : Elle est Avocate, Auxiliatrice, Médiatrice (CEC 969). Mais toujours dépendante du Christ, unique Sauveur. Sa maternité spirituelle continue « jusqu’à la consommation éternelle des élus ».`
        },
        {
          id: "prières-anciennes",
          question: "Les prières à Marie ont été inventées au Moyen Âge.",
          reponse: `Non. La plus ancienne prière connue, Sub tuum praesidium, date du IIIᵉ siècle, bien avant la clôture de la Bible. Des fresques des catacombes montrent déjà Marie priée comme Mère de Dieu. La dévotion mariale est apostolique et ancienne.`
        },
        {
          id: "culte-jésus",
          question: "Le culte de Marie a éclipsé Jésus.",
          reponse: `Impossible : Marie renvoie toujours à Jésus. À Cana : « Faites tout ce qu’il vous dira. » Dans la foi : elle s’efface pour que le Christ soit glorifié. Sa mission, c’est d’unir les âmes à son Fils.`
        },
        {
          id: "peres-mediation",
          question: "Les Pères de l’Église croyaient-ils à la médiation de Marie ?",
          reponse: `Oui. Saint Irénée (IIᵉ s.) : « Par une vierge, la vie est venue. » Saint Éphrem (IVᵉ s.) : « Ô Marie, médiatrice du monde entier. » La médiation maternelle de Marie est reconnue dès les premiers siècles.`
        },
        {
          id: "autre-mediatrice",
          question: "Donc Marie est une autre médiatrice à côté du Christ ?",
          reponse: `Non, elle participe à sa médiation. Le Christ est la source, Marie est le canal choisi par Dieu. Sa mission n’est pas d’ajouter à Jésus, mais de nous unir à Lui. Elle reste une créature comblée de grâce, non une déesse.`
        },
        {
          id: "idolatrie",
          question: "La vénération de Marie est de l’idolâtrie.",
          reponse: `L’Église ne l’adore pas (adoration = réservée à Dieu). Elle la vénère comme Mère du Seigneur (Luc 1,43). Les premiers chrétiens ont toujours distingué culte d’adoration (latrie) et culte de vénération (dulie). Honorer Marie, c’est honorer l’œuvre de Dieu en elle.`,
          scripture: ["Luc 1:43"]
        },
        {
          id: "importance-foi",
          question: "Pourquoi tant d’importance à Marie si seule la foi en Jésus sauve ?",
          reponse: `Parce que Dieu a choisi de venir par elle. Son « Oui » a permis l’Incarnation (Luc 1,38). Et comme elle a ouvert la voie à Jésus, elle ouvre encore nos cœurs à Lui. « Par Marie, Jésus est venu au monde, et par Marie, Il doit régner. », Saint Louis de Montfort.`,
          scripture: ["Luc 1:38"]
        },
        {
          id: "mission-aujourd-hui",
          question: "En résumé, Marie fait quoi pour nous aujourd’hui ?",
          reponse: `Elle intercède, conseille, protège, guide. Comme au Ciel, elle continue sa mission maternelle : nous conduire au Christ et nous aider à persévérer. C’est pour cela que « toutes les générations la diront bienheureuse » (Luc 1,48).`,
          scripture: ["Luc 1:48"]
        }
      ]
    },
    {
      id: "confession",
      titre: "Pourquoi se confesser à un prêtre ?",
      questions: [
        {
          id: "directement-a-dieu",
          question: "Je peux demander pardon directement à Dieu. Pourquoi un prêtre ?",
          reponse: `Oui, Dieu seul pardonne. Mais Jésus a voulu que son pardon soit transmis visiblement, par les apôtres et leurs successeurs. Le prêtre n’est pas un obstacle : il est l’instrument du pardon du Christ.`
        },
        {
          id: "pouvoir-pardon",
          question: "Où Jésus a-t-il donné ce pouvoir ? Montre-moi dans la Bible.",
          reponse: `Jean 20,22-23 : « Ceux à qui vous remettrez les péchés, ils leur seront remis. » Jésus donne réellement le pouvoir de pardonner, lié à l’Esprit Saint.`,
          scripture: ["Jean 20:22-23"]
        },
        {
          id: "succession-apostolique",
          question: "Les apôtres pouvaient pardonner, ok. Mais les prêtres aujourd’hui ?",
          reponse: `Le pouvoir se transmet par l’ordination apostolique (imposition des mains). C’est exactement ce que Jésus a institué.`
        },
        {
          id: "lier-delier",
          question: "Lier et délier, ça ne veut rien dire.",
          reponse: `Matthieu 18,18 : « Tout ce que vous lierez sur la terre sera lié au ciel. » Dans la tradition juive, lier/délier = condamner/absoudre. Jésus donne une autorité morale et spirituelle.`,
          scripture: ["Matthieu 18:18"]
        },
        {
          id: "confession-biblique",
          question: "La confession orale n’est pas biblique.",
          reponse: `Jacques 5,16 : « Confessez vos péchés les uns aux autres. » Jacques 5,14-15 : Appeler les prêtres pour obtenir le pardon des péchés. La confession avec un prêtre est explicitement biblique.`,
          scripture: ["Jacques 5:14-16"]
        },
        {
          id: "hommes-intermediaires",
          question: "Pourquoi Dieu passe par des hommes ? Je veux m’adresser à Lui directement.",
          reponse: `Dieu agit par des signes visibles (les sacrements). Comme l’eau du baptême, l’huile des malades, et la voix du prêtre pour donner l’absolution. Le prêtre n’agit pas en son nom, mais in persona Christi (CEC 1461).`
        },
        {
          id: "pretre-pecheur",
          question: "Le prêtre n’est qu’un homme pécheur !",
          reponse: `Oui. Mais c’est le Christ qui pardonne à travers lui. Luc 10,16 : « Qui vous écoute m’écoute. »`,
          scripture: ["Luc 10:16"]
        },
        {
          id: "invention-moyen-age",
          question: "La confession privée est une invention du Moyen Âge.",
          reponse: `Faux. Dès le IIIᵉ siècle : Saint Cyprien : « On ne peut être réconcilié avec Dieu sans les prêtres de Dieu. ». Saint Augustin : « Ne dis pas : je me confesse seulement à Dieu. Dieu t’a ordonné d’aller au prêtre. »`
        },
        {
          id: "seul-dans-coeur",
          question: "Je me confesse seul dans mon cœur, ça suffit.",
          reponse: `L’humilité de dire sa faute libère la conscience. La confession donne : le pardon, la guérison, la réconciliation avec Dieu et avec l’Église (CEC 1422).`
        },
        {
          id: "prete-remplace-jesus",
          question: "Donc le prêtre remplace Jésus ?",
          reponse: `Non. Le prêtre rend Jésus présent. Jésus est le seul qui pardonne. Le prêtre est sa voix et ses mains.`
        }
      ]
    },
    {
      id: "tradition",
      titre: "Bible seule ? Tradition ? Église ?",
      questions: [
       {

    
      id: "bible-seule",
      question: "Il faut croire seulement ce qui est écrit dans la Bible.",
      reponse: `La Bible ne dit jamais que seule l’Écriture est l’autorité. Au contraire, elle parle aussi de la Tradition transmise oralement (2 Thess 2,15). Jésus n’a pas écrit un livre : il a fondé une Église (Mt 16,18).`,
      scripture: ["2 Thess 2:15", "Mt 16:18"]
    },
    {
      id: "tradition-biblique",
      question: "La Tradition, ce n’est pas biblique !",
      reponse: `Saint Paul dit : « Tenez fermes les traditions, par la parole ou par la lettre » (2 Thess 2,15). La Tradition apostolique = orale + écrite.`,
      scripture: ["2 Thess 2:15"]
    },
    {
      id: "enseignement-oral",
      question: "Mais Paul aurait tout écrit dans la Bible.",
      reponse: `Non. Il dit qu’il a enseigné des choses non écrites (2 Thess 2,5). Il existe un enseignement oral venant des apôtres.`,
      scripture: ["2 Thess 2:5"]
    },
    {
      id: "interpretation",
      question: "Chacun peut interpréter la Bible.",
      reponse: `La Bible dit que les ignorants tordent les Écritures (2 Pierre 3,16). Elle demande une interprétation authentique (1 Tim 3,15). Cette mission appartient à l’Église, pas à l’individu isolé.`,
      scripture: ["2 Pierre 3:16", "1 Tim 3:15"]
    },
    {
      id: "eglise-bible",
      question: "L’Église n’a rien à voir avec la Bible.",
      reponse: `La Bible est née dans l’Église, par l’Église et pour l’Église. Sans l’Église, il n’y aurait aucun canon biblique.`
    },
    {
      id: "canon-juif",
      question: "Le canon biblique vient des Juifs.",
      reponse: `Jésus et les apôtres utilisaient la Septante, pas la Bible juive postérieure. La Septante contient les 7 livres que les protestants ont retirés. Jésus cite cette version et la lit à la synagogue.`
    },
    {
      id: "livres-ajoutes",
      question: "Les catholiques ont ajouté des livres.",
      reponse: `Faux. Ce sont les réformateurs (XVIe siècle) qui ont supprimé 7 livres, pour justifier leurs doctrines (ex : Romains 3,28 modifié par Luther).`
    },
    {
      id: "autorite",
      question: "Mais seul Dieu est l’autorité !",
      reponse: `Oui, et Dieu a confié cette autorité à l’Église : « L’Église est la colonne et l’appui de la vérité. » (1 Tim 3,15)`,
      scripture: ["1 Tim 3:15"]
    },
    {
      id: "pierre",
      question: "Pierre n’avait pas de rôle spécial.",
      reponse: `Jésus lui confie les clefs (Mt 16,18-19), lui dit : « Pais mes brebis » (Jn 21,17), et dans les Actes, Pierre agit en premier (Actes 1-10). Il est le berger visible de l’Église.`,
      scripture: ["Mt 16:18-19", "Jn 21:17", "Actes 1-10"]
    },
    {
      id: "pape",
      question: "Le pape, ça n’existe pas dans la Bible.",
      reponse: `Le pape = successeur de Pierre. Pierre meurt à Rome, son siège est Rome. L’unité apostolique passe par cette succession.`
    },
    {
      id: "eglise-hierarchie",
      question: "La foi primitive était simple, sans Église hiérarchique.",
      reponse: `Dès Actes 15, il y a un concile pour discerner la doctrine. Dès Actes 1, Pierre organise la succession apostolique. L’Église est structurée dès le début.`,
      scripture: ["Actes 1", "Actes 15"]
    },
    {
      id: "rejeter-apotres",
      question: "Rejeter les apôtres, ce n’est pas rejeter Jésus ?",
      reponse: `Jésus dit : « Qui vous rejette, me rejette. » (Lc 10,16). Refuser l’autorité apostolique = refuser le Christ lui-même.`,
      scripture: ["Luc 10:16"]
    },
    {
      id: "eglise-apotres",
      question: "L’Église, c’est juste une communauté symbolique.",
      reponse: `Non. Jésus fonde une Église visible et missionnaire : « Comme le Père m’a envoyé, moi aussi je vous envoie. » (Jn 20,21) Elle agit avec l’autorité du Christ.`,
      scripture: ["Jn 20:21"]
    },

    {
      id: "unite",
      question: "Pourquoi une seule Église ?",
      reponse: `Jésus prie pour que tous soient un (Jn 17,21). Une seule foi, un seul baptême, un seul Corps (Éph 4,5). La division contredit la prière du Christ.`,
      scripture: ["Jn 17:21", "Eph 4:5"]
    },
    {
  id: "eglise-universelle",
  question: "Pourquoi l’Église catholique se dit universelle ?",
  reponse: `Le mot “catholique” vient du grec *katholikos* = “universel”. Jésus a fondé **une seule Église**, envoyée à toutes les nations (Mt 28,19). L’Église catholique est la seule présente partout dans le monde, avec la même foi, les mêmes sacrements et la même messe, signe de son unité voulue par le Christ.`,
  scripture: ["Matthieu 28:19", "Jean 17:21", "Éphésiens 4:4-5"]
},
    {
      id: "sola-scriptura",
      question: "La Sola Scriptura est la foi des premiers chrétiens.",
      reponse: `Aucun chrétien avant Luther (XVIᵉ siècle) n’a enseigné cela. La Sola Scriptura est non biblique, non historique, non apostolique.`
    },
    {
      id: "resume",
      question: "Résumé clair",
      reponse: `La foi chrétienne repose sur : Écriture (Parole écrite), Tradition (Parole transmise), Magistère (Église qui garde et interprète). Séparées = division. Unies = foi apostolique.`
    },

   
    
  ] 
},


{
  id: "oeuvre-et-purgatoire",
  titre: "Foi, œuvres et purification",
  questions: [
    {
      id: "foi-seule",
      question: "Sommes-nous sauvés par la foi seule ?",
      reponse: `Non. L’Écriture dit : « L’homme est justifié par les œuvres et non par la foi seulement » (Jac 2,24). La foi sauve si elle est vivante, c’est-à-dire agissante par la charité (Gal 5,6).`,
      scripture: ["Jacques 2:24", "Galates 5:6"]
    },
    {
      id: "foi-oeuvres",
      question: "Mais les œuvres ne servent à rien pour être sauvés ?",
      reponse: `Les œuvres ne "gagnent" pas le salut, elles en sont la preuve. « La foi sans les œuvres est morte » (Jac 2,26).`,
      scripture: ["Jacques 2:26"]
    },
    {
      id: "jugement",
      question: "Jésus ne juge-t-il pas selon la foi ?",
      reponse: `Au jugement dernier, Jésus sépare selon les œuvres de charité : « J’avais faim, et vous m’avez donné à manger… » (Mt 25,35).`,
      scripture: ["Matthieu 25:35"]
    },
    {
      id: "romains",
      question: "Mais Paul dit que la foi suffit (Rom 3,28) !",
      reponse: `Paul parle des œuvres de la Loi, pas des œuvres de charité. Le salut vient de la grâce, mais se vit dans l’amour concret.`,
      scripture: ["Romains 3:28"]
    },
    {
      id: "cooperation",
      question: "Si tout vient de Dieu, pourquoi coopérer ?",
      reponse: `« Travaillez à votre salut... car c’est Dieu qui agit en vous. » (Ph 2,12-13) Dieu sauve, mais sans notre réponse libre, la grâce reste stérile.`,
      scripture: ["Philippiens 2:12-13"]
    },
    {
      id: "foi-morte",
      question: "Une foi sans amour peut-elle sauver ?",
      reponse: `Non. « Si je n’ai pas la charité, je ne suis rien. » (1 Cor 13,2) La foi véritable se traduit en amour et en actes.`,
      scripture: ["1 Corinthiens 13:2"]
    },
    {
      id: "purgatoire-definition",
      question: "Qu’est-ce que le purgatoire ?",
      reponse: `Ce n’est pas une deuxième chance, mais une purification pour les âmes sauvées, afin qu’elles soient entièrement purifiées avant de voir Dieu.`,
      scripture: ["Catéchisme §1030"]
    },
    {
      id: "purgatoire-bible",
      question: "Le purgatoire est-il biblique ?",
      reponse: `Oui. « Il sera sauvé, mais comme à travers le feu. » (1 Cor 3,15) Une purification après la mort pour ceux qui sont sauvés.`,
      scripture: ["1 Corinthiens 3:15"]
    },
    {
      id: "priere-morts",
      question: "Pourquoi prier pour les morts ?",
      reponse: `« C’est une pensée sainte et pieuse de prier pour les morts. » (2 Macc 12,46) La prière aide les âmes en purification.`,
      scripture: ["2 Maccabées 12:46"]
    },
    {
      id: "monde-avenir",
      question: "Y a-t-il un pardon possible après la mort ?",
      reponse: `Jésus dit : « Certains péchés ne seront pardonnés ni en ce monde ni dans l’autre. » (Mt 12,32) Donc, d’autres peuvent l’être dans l’autre monde.`,
      scripture: ["Matthieu 12:32"]
    },
    {
      id: "purete",
      question: "Pourquoi une purification est-elle nécessaire ?",
      reponse: `« Rien d’impur n’entrera dans la cité de Dieu. » (Ap 21,27) Le purgatoire rend l’âme parfaitement pure pour le Ciel.`,
      scripture: ["Apocalypse 21:27"]
    },
    {
      id: "grace-croix",
      question: "Le purgatoire diminue-t-il la croix du Christ ?",
      reponse: `Non. Il en applique la grâce purificatrice. Jésus sauve, le purgatoire sanctifie totalement.`,
      scripture: ["Hébreux 12:14"]
    },
    {
      id: "anciens-temoins",
      question: "Les premiers chrétiens croyaient-ils au purgatoire ?",
      reponse: `Oui. Tertullien, Cyprien et Augustin parlaient déjà de prières et de purification pour les défunts.`,
      scripture: ["Tradition des Pères de l'Église"]
    },
    {
      id: "justice-imputee",
      question: "Les protestants disent : 'Dieu nous couvre, sans nous changer'.",
      reponse: `La Bible enseigne une justice transformante, pas seulement déclarée. Le salut nous rend saints réellement, non juste “couverts”.`,
      scripture: ["2 Corinthiens 5:17", "Hébreux 12:14"]
    },
    {
      id: "foi-oeuvres-resume",
      question: "Foi et œuvres, comment les unir ?",
      reponse: `Nous ne sommes pas sauvés par nos œuvres, mais nous ne serons pas sauvés sans elles. La foi ouvre le cœur, les œuvres le remplissent d’amour.`,
      scripture: ["Jacques 2:26", "Galates 5:6"]
    },
    {
      id: "purgatoire-spirituel",
      question: "Le purgatoire, est-ce une punition ?",
      reponse: `Non. C’est une miséricorde. Les âmes y souffrent, mais vont à Dieu avec joie (St François de Sales).`,
      scripture: ["Saint François de Sales"]
    } ] },















 {
      id: "bapteme-enfants",
      titre: "Le baptême des enfants",
      questions: [
        {
          id: "bebe-croit-pas",
          question: "Le baptême doit être réservé aux adultes, car un bébé ne peut pas croire.",
          reponse: `Le baptême n’est pas d’abord un acte de l’homme, mais un acte de Dieu. C’est Dieu qui purifie, qui régénère, qui sauve (Tite 3,5). La foi du baptême n’est pas seulement individuelle, mais celle de l’Église tout entière.`,
          scripture: ["Tite 3:5"]
        },
        {
          id: "bebe-foi-communaute",
          question: "Mais si un bébé ne croit pas, comment peut-il être baptisé ?",
          reponse: `Au baptême, la foi est professée par la communauté chrétienne, parents et parrains, jusqu’à ce que l’enfant puisse la confirmer lui-même à la confirmation.`
        },
        {
          id: "jesus-foi-bapteme",
          question: "Jésus n’a-t-il pas demandé la foi personnelle avant le baptême ?",
          reponse: `Jésus dit au contraire : “Laissez venir à moi les petits enfants…” (Marc 10,14). Il ne met aucune condition d’âge ou de compréhension.`,
          scripture: ["Marc 10:14"]
        },
        {
          id: "pas-de-bebes-bible",
          question: "Dans la Bible, on ne voit jamais des bébés baptisés.",
          reponse: `Si. Les Actes montrent plusieurs baptêmes de familles entières : “Il fut baptisé, lui et tous les siens.” (Actes 16,33) ; “Lydia fut baptisée avec toute sa maison.” (Actes 16,15). Le mot grec oikos signifie tout le foyer, y compris les enfants.`,
          scripture: ["Actes 16:15", "Actes 16:33"]
        },
        {
          id: "bapteme-symbole",
          question: "Le baptême, c’est juste un symbole ?",
          reponse: `Non. Le baptême efface réellement le péché originel (Actes 22,16). Comme le dit le Psaume 51,7 : “Dans le péché ma mère m’a conçu.” Même les enfants ont besoin de la grâce.`,
          scripture: ["Actes 22:16", "Psaume 51:7"]
        },
        {
          id: "attendre-grandir",
          question: "Alors pourquoi ne pas attendre qu’il soit grand ?",
          reponse: `On ne dirait jamais : “On attend que l’enfant soit grand pour le soigner ou le protéger.” On donne le bien dès que possible. Le baptême est une protection spirituelle.`
        },
        {
          id: "bapteme-primitif",
          question: "Les premiers chrétiens baptisaient-ils les enfants ?",
          reponse: `Oui. La Didachè (Iᵉ siècle), un des plus anciens écrits chrétiens, ordonne : “Baptisez au nom du Père, du Fils et du Saint-Esprit.” L’Église primitive l’a toujours pratiqué.`
        },
        {
          id: "bapteme-tardif",
          question: "Le baptême d’enfant n’est-il pas une invention tardive ?",
          reponse: `Non. Les anabaptistes du XVIᵉ siècle ont nié le baptême des enfants, mais Luther et Calvin eux-mêmes l’ont défendu. Ce refus est donc une innovation protestante, pas la tradition apostolique.`
        },
        {
          id: "enseignement-eglise",
          question: "Que dit l’Église sur le baptême des enfants ?",
          reponse: `Le Catéchisme (§1250-1252) enseigne : “Priver un enfant du baptême, c’est le priver de la grâce inestimable de devenir enfant de Dieu.”`
        },
        {
          id: "resume-bapteme",
          question: "Résumé clair",
          reponse: `Le baptême est l’œuvre de Dieu, pas de l’homme. La foi est portée par l’Église lorsque l’enfant ne peut pas la dire. Les familles entières étaient baptisées dans la Bible. Les enfants ont besoin de la grâce dès le début de leur vie.`
        }
      ]
    },
    
    {
      id: "religion-vs-relation",
      titre: "Le christianisme : religion ou relation ?",
      questions: [
        {
          id: "relation-pas-religion",
          question: "Le christianisme n’est pas une religion, c’est une relation.",
          reponse: `Le christianisme est les deux. La relation avec Dieu est la vraie religion selon la Bible.`
        },
        {
          id: "religion-mot-mauvais",
          question: "Mais le mot religion n’est-il pas mauvais ?",
          reponse: `Non. Le mot religion vient du latin religare, qui signifie “relier”. La religion authentique relie l’homme à Dieu.`
        },
        {
          id: "bible-rejette-religion",
          question: "La Bible rejette-t-elle la religion ?",
          reponse: `Non. Jacques 1,27 dit : “La religion pure et sans tache consiste à aimer et à se garder du mal.” La Bible ne supprime pas la religion, elle la purifie.`,
          scripture: ["Jacques 1:27"]
        },
        {
          id: "vraie-religion-bible",
          question: "Alors c’est quoi la vraie religion selon la Bible ?",
          reponse: `C’est la foi incarnée dans l’amour : servir les pauvres, se garder du péché, vivre dans la charité. Pas du formalisme vide, mais une vie transformée.`
        },
        {
          id: "eglise-et-religion",
          question: "Et l’Église catholique dit quoi ?",
          reponse: `Le Catéchisme (n°2095) : “La vraie religion consiste en adoration, prière, sacrifice, fidélité à Dieu.” Et (n°44) : “L’homme est religieux par nature, Dieu l’attire vers Lui.” La relation fait partie de la religion, elle ne s’y oppose pas.`
        }
      ]
    },
    {
      id: "statues-idoles",
      titre: "Les catholiques prient les statues ?",
      questions: [
        {
          id: "prier-statues",
          question: "Les catholiques prient les statues !",
          reponse: `Non. Les catholiques ne prient pas les statues, ils prient Dieu. La statue rappelle celui ou celle qu’elle représente, comme une photo.`
        },
        {
          id: "exode-images",
          question: "Mais Exode 20,4 interdit les images !",
          reponse: `Exode 20,4 interdit les idoles (eidolon), c’est-à-dire adorer une image à la place de Dieu. L’Église n’adore que Dieu (adoration = latrie).`,
          scripture: ["Exode 20:4"]
        },
        {
          id: "images-bible",
          question: "La Bible interdit-elle vraiment les images religieuses ?",
          reponse: `Non. Dieu lui-même ordonne des images sacrées : chérubins dans le Temple (1 Rois 6,23-29) et sur l’Arche (Ex 25,18-22). Si Dieu interdit les images, pourquoi en ordonner ? Ce qui est interdit, c’est l’idolâtrie, pas l’art sacré.`,
          scripture: ["1 Rois 6:23-29", "Exode 25:18-22"]
        },
        {
          id: "pourquoi-statues",
          question: "Alors pourquoi avoir des statues ?",
          reponse: `Pour se souvenir des saints et imiter leur foi. Une statue est un mémo visuel, comme une photo de famille spirituelle.`
        },
        {
          id: "eglise-images",
          question: "Qu’enseigne l’Église ?",
          reponse: `Catéchisme n°2132 : “L’honneur rendu à une image se rapporte à la personne qu’elle représente.” Donc, nous n’adorons pas la statue, nous honorons Dieu et ses saints.`
        }












      ] 
    }, 
 {
      id: "mediations-saints",
      titre: "Pourquoi prier les saints ?",
      questions: [
        {
          id: "seul-mediateur",
          question: "Il n’y a qu’un seul médiateur, Jésus-Christ !",
          reponse: `Oui, Jésus est l’unique médiateur du salut (1 Tim 2,5). Mais cela n’empêche pas les membres de son Corps (l’Église) d’intercéder en Lui et par Lui.`,
          scripture: ["1 Tim 2:5"]
        },
        {
          id: "prier-saint-remplace-jesus",
          question: "Donc, prier un saint, ce serait remplacer Jésus ?",
          reponse: `Non. Quand on prie un saint, on ne lui demande pas de nous sauver, mais de prier pour nous, comme on demande à un ami : “Prie pour moi.”`
        },
        {
          id: "intercession-biblique",
          question: "La Bible montre-t-elle l’intercession ?",
          reponse: `Oui. Moïse intercède pour le peuple (Ex 32,11-14), les anges présentent les prières (Tobie 12,15), et les saints au ciel offrent les prières des fidèles devant Dieu (Ap 5,8). La Bible montre l’intercession, elle ne la condamne pas.`,
          scripture: ["Ex 32:11-14", "Tobie 12:15", "Ap 5:8"]
        },
      {
  id: "saints-morts",
  question: "Mais les saints sont morts, non ?",
  reponse: `Non : ils vivent en Dieu. Jésus dit que Dieu n’est pas le Dieu des morts, mais des vivants (Lc 20,38), donc pour Dieu tous sont vivants. Jean 3,15 rappelle que croire donne la vie éternelle. Et Romains 8,38-39 affirme que rien ne nous sépare de l’amour du Christ. Les saints sont donc vivants auprès de Dieu et leurs prières ont valeur dans la communion des saints.`,
  scripture: ["Luc 20:38", "Jean 3:15", "Romains 8:38-39"]
}
,
        {
          id: "priere-juste",
          question: "La Bible encourage-t-elle la prière les uns pour les autres ?",
          reponse: `Oui. Jacques 5,16 : “La prière du juste a une grande efficacité.” Les saints étant parfaits en Dieu, leur prière est encore plus efficace.`,
          scripture: ["Jacques 5:16"]
        },
        {
          id: "eglise-intercession",
          question: "Que dit l’Église ?",
          reponse: `Catéchisme n°956 : “Les saints nous aident par leur intercession fraternelle.” Ils ne prennent pas la place du Christ, ils participent à son amour.`
        }
      ]
    }
] }
,



 {
  id: "catholique",
  titre: "Vertus Catholiques",
  description: "Approfondissement de la doctrine catholique",
  domaines: [
    {
      id: "pudeur-definition",
      titre: "La vertu de la pudeur",
      questions: [
        {
          id: "pudeur-quoi",
          question: "Qu'est-ce que la pudeur et quel est son rôle ?",
          reponse: `La pudeur est la vertu qui honore la dignité de la personne, corps et âme unis dans le même mystère. Elle protège le mystère des personnes et de leur amour, invite à la patience et à la modération dans les relations humaines, et exige une pureté du cœur. Le Catéchisme de l'Église catholique (CEC §2521-2524) l'enseigne comme gardien de la chasteté et respect de soi et d'autrui.`,
          scripture: ["1 Cor 6:19-20", "Gen 3:7"]
        },
        {
          id: "pudeur-importance",
          question: "Pourquoi la pudeur est-elle essentielle à la vie chrétienne ?",
          reponse: `La pudeur protège l'intimité et la dignité de la personne, aide à orienter le corps vers la chasteté et la beauté intérieure, et empêche l'usage égoïste du corps. Elle est le reflet du respect de soi et d'autrui, et participe à la sanctification du corps.`,
          scripture: ["1 Cor 6:19-20"]
        },
        {
          id: "pudeur-mystere",
          question: "Comment la pudeur manifeste-t-elle le mystère humain ?",
          reponse: `La pudeur reconnaît le corps comme don de Dieu, non comme objet. Elle protège le mystère de la personne et de son amour, et est un moyen de glorifier Dieu par le corps.`,
          scripture: ["Gen 3:7", "1 Cor 6:19-20"]
        }
      ,
    {
      
          id: "pudeur-protection",
          question: "Comment la pudeur préserve-t-elle l'intimité et la dignité ?",
          reponse: `La pudeur consiste à protéger l'intimité et à ne pas livrer ce qui doit rester secret, en orientant le corps vers la chasteté et la beauté intérieure. Saint Augustin disait : "Là où la pudeur se perd, la dignité de l'homme s'éteint."`,
          scripture: ["Gen 3:7", "1 Cor 6:19-20"]
        },
        {
          id: "pudeur-respect",
          question: "Quel lien existe entre pudeur et respect d'autrui ?",
          reponse: `La pudeur exprime le respect de la personne, de son corps et de son âme. Elle empêche de réduire autrui à un simple objet de désir ou de curiosité. Elle éduque le regard, le cœur et les gestes pour que les relations humaines demeurent dans la vérité et la charité.`,
          scripture: ["Mt 5:8", "1 Th 4:3-5"]
        }
    ]
    },

    {
      id: "consensus-patrum",
      titre: "Consensus des Pères de l'Église",
      questions: [
        {
          id: "pères-definition-1",
          question: "Qui sont les Pères de l'Église et quel rôle jouent-ils ?",
          reponse: `Les Pères de l'Église sont des écrivains ecclésiastiques des premiers siècles, reconnus pour leur doctrine orthodoxe, leur sainteté de vie et leur fidélité à la Tradition apostolique. Ils transmettent la foi reçue des Apôtres, souvent de manière orale et liturgique, avant même la fixation du canon biblique. Certains sont reconnus explicitement, d'autres implicitement par l'usage constant de leurs écrits.`,
          scripture: []
        },
        {
          id: "pères-autorité-1",
          question: "Quelle est l'autorité des Pères de l'Église ?",
          reponse: `Les Pères sont des témoins autorisés de la foi, mais non infaillibles individuellement. Saint Augustin et saint Thomas d'Aquin enseignent que leurs écrits doivent être interprétés avec révérence et sous l'autorité de l'Église. Leur accord unanime dans la foi manifeste la Tradition vivante de l'Église.`,
          scripture: []
        },
        {
          id: "consensus-patrum-1",
          question: "Qu'est-ce que le consensus patrum et comment se manifeste-t-il ?",
          reponse: `Le consensus patrum est l'accord unanime des Pères sur un point de foi ou de morale, signe certain de la Tradition apostolique. Méthode directe : accord explicite sur un point de foi. Méthode indirecte : réception universelle dans l'Église par la liturgie, la catéchèse ou les conciles locaux.`,
          scripture: []
        },
        {
          id: "consensus-domaine",
          question: "Quel est le domaine du consensus des Pères ?",
          reponse: `Le consensus patrum concerne uniquement la foi et la morale, ce qui touche au salut et à la vie chrétienne. Il ne s'applique pas aux opinions personnelles sur des sujets temporels comme la géographie ou la science.`,
          scripture: []
        },
        {
          id: "degres-autorite-1",
          question: "Quels sont les différents degrés d'autorité dans les enseignements des Pères ?",
          reponse: `Niveau de certitude :
🟢 Foi révélée (de fide) : doctrine révélée et enseignée unanimement → adhésion obligatoire
🟡 Conclusion certaine : doctrine solidement appuyée sur la Révélation → adhésion ferme
🟠 Opinion commune : largement partagée mais non obligatoire → adhésion prudente
⚪ Opinion personnelle : vue individuelle, libre examen`,
          scripture: []
        },
        {
          id: "magistere-equilibre-1",
          question: "Comment l'Église équilibre-t-elle le rôle des Pères et le Magistère ?",
          reponse: `Le Magistère ne remplace pas les Pères mais interprète leur témoignage. Les Pères sont les témoins de la foi apostolique, le Magistère en garantit l'authenticité et l'interprétation, comme le rappelle saint Vincent de Lérins : "Tenir ce qui a été cru partout, toujours et par tous."`,
          scripture: []
        },
        {
          id: "parole-de-dieu-1",
          question: "Comment l'Écriture, la Tradition et le Magistère se complètent-ils ?",
          reponse: `La Parole de Dieu se trouve dans la Sainte Écriture (parole écrite inspirée), la Tradition (parole transmise oralement et vécue depuis les apôtres) et le Magistère (interprète authentique, au service de la Parole). 
Ces trois réalités sont liées et solidaires (CEC §95 ; Dei Verbum §10).`,
          scripture: ["1 Tim 3:15"]
        },
        {
          id: "consensus-synthese-1",
          question: "Que nous enseigne le consensus des Pères de l'Église ?",
          reponse: `Le consensus des Pères n'est pas une autorité concurrente du Magistère, mais un témoignage de la Tradition vivante. Les Pères témoignent, le Magistère interprète, l'Église enseigne, et l'Esprit Saint garde la vérité. Ainsi, la foi catholique est la continuité historique et spirituelle de la foi des Apôtres.`,
          scripture: []
        }
      ]
    },

    {
  "id": "avortement-partie1",
  "titre": "Contre la fermeture du cœur : l’amour dans la vérité",
  "questions": [
   
    {
      "id": "biologie-embryon",
      "question": "L’embryon a-t-il une vie biologique distincte dès la fécondation ?",
      "reponse": "Oui : dès la fécondation apparaît un être vivant biologiquement autonome (zygote) ayant un patrimoine génétique unique et un programme de développement. Sur le plan biologique, il s’agit d’un organisme humain en développement, ce qui fonde l’argument de protection de sa vie dès ses premiers stades.",
      "scripture": []
    },
    {
      "id": "personne-seuil",
      "question": "Peut-on poser un « seuil » arbitraire pour la personne ?",
      "reponse": "Définir la personne uniquement par la présence de conscience, d’autonomie ou de relations sociales conduit à des critères fluctuants et discriminatoires. Historiquement et moralement, beaucoup soutiennent que la dignité humaine est intrinsèque, elle ne dépend pas d’un stade psychologique. Poser un seuil arbitraire, c'est hiérarchiser la valeur d’une vie selon son âge ou ses capacités.",
      "scripture": ["Gen 1:27"]
    },
    {
      "id": "dignite-intrinseque",
      "question": "Pourquoi affirmer que la dignité humaine est intrinsèque et non graduée ?",
      "reponse": "Si la dignité dépend d’un état (conscience, autonomie, âge), alors des nouveau-nés, des personnes handicapées ou des malades en état végétatif pourraient perdre cette dignité. L’affirmation d’une dignité intrinsèque protège contre ces dérives : toute vie humaine, quel que soit le stade, mérite une protection et un respect fondamentaux.",
      "scripture": ["Ps 139:13-16"]
    },
   

    {
      "id": "analogie-gland-chene",
      "question": "L’analogie 'gland ≠ chêne' est-elle valide pour comparer embryon et enfant ?",
      "reponse": "L’analogie illustre une progression naturelle, mais elle simplifie trop : un gland est déjà une partie d’un chêne et dépend d’un arbre déjà formé ; l’embryon est un individu humain distinct avec son propre patrimoine génétique et un développement autonome. L’analogie biologique ne permet donc pas de réduire l’embryon à un simple 'potentiel' sans statut moral.",
      "scripture": []
    },
    {
      "id": "pratique-illlegale-argument",
      "question": "L’argument 'ça se pratique illégalement, dépénalisons' est-il suffisant ?",
      "reponse": "Ce raisonnement est pragmatique mais insuffisant en soi. Beaucoup d’actes répréhensibles se pratiquent illégalement (vols, violences) sans qu’on les dépénalise pour autant.",
      "scripture": []
    },
  
    {
      "id": "revenir-mal-par-mal",
      "question": "Répondre au mal par un autre mal est-il justifiable ?",
      "reponse": "Non : la justice légitime n’implique pas de commettre un tort contre un innocent pour répondre à une violence. Moralement, réagir doit viser la réparation, la prévention et la protection des victimes, pas l’instrumentalisation d’un tiers innocent comme moyen de vengeance.",
      "scripture": []
    },

{
  "id": "temoignage-abby-johnson",
  "question": "Pourquoi Abby Johnson s’est-elle retournée contre l’avortement ?",
  "reponse": "Abby Johnson, après avoir subi deux avortements et dirigé un centre d’IVG, a fini par découvrir la face cachée de ce système. Plongée dans une profonde dépression, elle a compris le mensonge qui détruisait les femmes autant que les enfants à naître. Convertie, elle se bat depuis plus de dix ans pour défendre la vie, malgré les procès et les persécutions. Combien de militantes, trompées par cette illusion de liberté, portent encore dans leur cœur les blessures spirituelles laissées par l’avortement jusqu’à la fin de leur vie ?",
  "scripture": ["Jean 8:32", "Psaume 34:19", "Matthieu 11:28"]
}
  ,
     {
  "id": "argument-hypothese-marie",
  "question": "Aurait-on pu 'tué Dieu' dans le cas de la Visitation ?",
  "reponse": "Cet argument rhétorique souligne la portée sacrée de la naissance dans la foi chrétienne (Jean-Baptiste reconnut le Messie in utero). La Révélation affirme que toute vie humaine est connue de Dieu dès la conception (Ps 139). Ceux qui soutiennent l’avortement, par cohérence, ne défendraient pas leur propre vie ni celle des autres, alors que l’amour du prochain appelle à protéger chaque existence (Mt 22:39).", 
  "scripture": ["Luke 1:41-44", "Ps 139:13-16", "Mt 22:39"]
} ,
    {
      "id": "couts-sociaux",
      "question": "Les coûts d’un accouchement peuvent-ils justifier l’avortement ?",
      "reponse": "Les coûts de la maternité existent et sont réels, mais réduire la question humaine à un calcul économique est réducteur. Une société digne considère la personne comme un sujet et non comme une charge ; elle investit dans l’accompagnement des familles, la santé maternelle et l’aide aux plus vulnérables pour que la grossesse ne devienne pas une condamnation socio-économique.",
      "scripture": []
    },
    {
      "id": "impact-travail",
      "question": "L’avortement facilite-t-il l’intégration des femmes au travail, des 'rouages' économiques ?",
      "reponse": "Sur le court terme, l’accès à la contraception et à l’IVG peut diminuer les interruptions de carrière imprévues. Mais considérer cela comme principal objectif risque de réduire la maternité à une variable économique. Une vraie politique de justice sociale doit concilier la dignité du travail, l’accompagnement familial (congés, garde d’enfants, sécurité sociale) et le respect de la vie, afin que la femme ne soit ni forcée à la grossesse, ni incitée à la supprimer pour 'fonctionner' économiquement.",
      "scripture": []
    },
  
   
    {
      "id": "ideologie-et-non-dignite",
      "question": "La promotion massive de contraception/avortement nie-t-elle la dignité ?",
      "reponse": "Oui, si la stratégie de santé publique ou de planification se fonde sur une logique utilitariste (réduction des populations 'coûteuses') plutôt que sur le respect de chaque personne, elle peut effectivement entrer en contradiction avec la dignité intrinsèque. C’est pourquoi il faut toujours scruter les finalités et veiller à ce que la protection des plus vulnérables reste centrale.",
      "scripture": []
    },
 
    
    {
      "id": "plannned-parenthood-faits",
      "question": "Les chiffres et financements de Planned Parenthood montrent-ils un conflit d'intérêts ?",
      "reponse": "Des organisations comme Planned Parenthood publient des rapports annuels sur leurs activités et leurs financements ; elles reçoivent aussi des subventions publiques pour des services de santé reproductive. Des allégations de pratiques frauduleuses ont été portées devant des tribunaux et doivent être traitées au cas par cas.",
      "scripture": []
    },
   
  {
  "id": "providence-universelle",
  "question": "La providence divine peut-elle vraiment agir sur tous ?",
  "reponse": "Oui. Dieu agit dans tous les cœurs. Jésus lui-même avertit souvent les riches dans les Évangiles, rappelant qu’il est difficile pour celui qui met sa confiance dans ses biens d’entrer dans le Royaume des cieux. Sainte Bathilde, vendue comme esclave avant de devenir reine et protectrice des pauvres, et Sainte Joséphine Bakhita, arrachée à sa terre puis élevée à la sainteté, transformant la souffrance en chemin de lumière et de rédemption.",
  "scripture": ["Luc 1:52", "Romains 8:28", "Matthieu 19:23"]
},
  
    {
      "id": "argument-hypothese-marie",
      "question": "Si l'on admettait l'IVG, 'aurait-on tué Dieu' dans le cas de Marie et Jean-Baptiste? (argument rhétorique)",
      "reponse": "Cet argument rhétorique souligne la portée sacrée de la naissance dans la foi chrétienne (Jean-Baptiste reconnut le Messie in utero, cf. Luc 1,41-44). Théologiquement, la Révélation affirme que toute vie humaine est connue de Dieu dès la conception (Ps 139).",
      "scripture": ["Luke 1:41-44", "Ps 139:13-16"]
    },
  
   

  
{
  "id": "philanthropie-contraception-imposition",
  "question": "Les grandes fondations imposent-elles les politiques reproductives aux pays pauvres pour le business ?", 
  "reponse": "De puissantes fondations et ONG internationales financent des programmes de santé reproductive. Une imposition idéologique et économique, privilégiant le contrôle des naissances plutôt que le développement structurel, un instrument d’ingérence ou de conditionnement culturel.", 
  "scripture": []
},
{
  "id": "si-tu-donnes-pas-vie-pourquoi-dieu",
  "question": "Si l'homme refuse de donner la vie tout le temps, pourquoi Dieu te donnerait-il la vie tout le temps ?", 
  "reponse": "Si quelqu'un choisit de dire non à la vie (le Christ). En justice pure, il serait logique que celui qui refuse la vie ne la reçoive pas éternellement puisque Dieu respecte la liberté humaine jusque dans ses conséquences. 'Car ce que nous faisons au plus petit, c’est à Lui que nous le faisons' (Mt 25,40). Mais Dieu n’est pas seulement juste, Il est aussi miséricordieux. Il offre encore la possibilité du pardon à ceux qui se repentent et reviennent vers la Vie. ", 
  "scripture": ["Mt 25:40", "Jn 3:16", "Rm 6:23"]
} ,
{
  "id": "avortement-economie",
  "question": "L’avortement peut-il être considéré comme une solution économique pour la société ?",
  "reponse": "Les élites invoquent l’argument économique pour justifier l’avortement, en voyant dans la naissance un coût pour la collectivité. Mais une société qui calcule la valeur d’une vie selon son rendement économique perd le sens même de la personne. Le vrai progrès n’est pas de supprimer les vies fragiles, mais de bâtir des structures justes qui permettent à chaque enfant et à chaque mère de vivre dignement.", 
  "scripture": ["Mt 25:40", "Ps 127:3"]
} ,{
  "id": "valeur-humaine-economie",
  "question": "Peut-on mesurer la valeur d’une vie humaine en termes économiques ?",
  "reponse": "La valeur d’une vie dépasse toute mesure comptable. Chaque personne, même fragile, porte une richesse spirituelle et humaine infinie. Jean-Paul II rappelait que l’homme doit être la fin de l’économie, jamais un moyen. La vraie économie sert la vie, elle ne la sélectionne pas.",
  "scripture": ["Mt 6:26", "Ga 3:28"]
} ,
{"id": "denoncer-ideologie","question": "La promotion massive de contraception/IVG est-elle une idéologie niant la dignité humaine ?","reponse": "Considèrer la vie humaine comme un simple instrument démographique ou économique, c'est tomber dans l'utilitarisme et nier la dignité intrinsèque.","scripture": []},
    {
      "id": "embryon-choisit-vivre",
      "question": "L’embryon 'choisit' de vivre : sens et validité de cette affirmation ?",
      "reponse": "On ne peut pas attribuer à l'embryon une volonté indépendante, mais biologiquement il manifeste un mouvement vital et un développement orienté vers la vie. Spirituellement, dire que l'embryon 'choisit' de vivre renforce l'intuition que la vie humaine a sa propre vocation et mérite protection. La responsabilité humaine est d'accompagner ce chemin de vie.",
      "scripture": ["Jer 1:5"]
    },
    {
      "id": "liberte-corps-vie",
      "question": "Si mon corps 'veut' vivre, est-ce un argument contre l'avortement ?",
      "reponse": "L'argument souligne que la vie est l'état naturel et bon de l'être humain ; s'opposer à la vie exige toujours une justification morale forte. Mais la législation et l'accompagnement doivent aussi tenir compte de la liberté et de la situation concrète de la femme : l'enjeu est d'articuler protection de la vie et soutien réel à la mère.",
      "scripture": ["Jn 10:10"]
    },
    {
      "id": "si-tu-donnes-pas-vie-pourquoi-dieu",
      "question": "Si l'homme refuse de donner la vie, pourquoi Dieu continuerait-Il à donner la vie ?",
      "reponse": "Théologiquement, Dieu est source et don gratuit de la vie ; la réponse humaine peut accepter ou rejeter ce don. Le fait que certaines personnes n'accueillent pas la vie ne contredit pas la bonté divine ni la vocation universelle à la vie ; il appelle plutôt la conversion et la charité pour aider les faibles à choisir la vie.",
      "scripture": ["Jn 3:16", "Acts 17:25"]
    },
    {
      "id": "abby-johnson-reference",
      "question": "Qui est Abby Johnson et pourquoi la citer ?",
      "reponse": "Abby Johnson est une ancienne employée d'une clinique IVG devenue militante pro-vie. Son témoignage personnel est souvent cité comme exemple de conversion et d'alerte sur certaines pratiques internes des structures pro-IVG. Les témoignages individuels peuvent éclairer, mais ils ne remplacent pas l'analyse objective des institutions et des politiques publiques.",
      "scripture": []
    },



























    {
      "id": "loi-et-definitions",
      "question": "La loi d'un État peut-elle définir moralement ce qui est meurtre ?",
      "reponse": "Beaucoup de lois injustes existent et ont existé. Les chrétiens sont appelés à discerner et, si nécessaire, à obéir à Dieu plutôt qu'aux hommes (Actes 5:29) tout en travaillant pacifiquement à changer les lois injustes par les voies civiques.",
      "scripture": ["Acts 5:29", "Mt 22:21"]
    },
   
    {
      "id": "decider-pour-autrui",
      "question": "Qui es-tu pour décider de la vie des autres ?",
      "reponse": "La vie humaine possède une dignité intrinsèque qui fonde une responsabilité collective : protéger les plus vulnérables n’est pas une arrogance, mais un devoir moral. Même sous Robespierre, on épargnait les femmes enceintes, car l’enfant qu’elles portaient était innocent.",
      "scripture": ["Prov 31:8-9"]
    },
    {
      "id": "vie-est-choix",
      "question": "La vie est-elle un choix ?",
      "reponse": "La vie est avant tout un don reçu. Les choix humains interviennent dans la manière dont on la reçoit, la protège ou la rejette. La foi chrétienne voit la vie comme une vocation confiée par Dieu : elle n'est pas une marchandise ou un simple 'choix' isolé, mais un bien à accueillir et à soutenir.",
      "scripture": ["Jn 14:6"]
    },
   
  
    {
      "id": "voter-et-responsabilite",
      "question": "Voter pour une république qui légifère sur la vie, est-ce consentir à l'avortement ?",
      "reponse": "Le vote engage la conscience. Être citoyen responsable implique d'examiner les programmes, de s'engager pour des lois qui protègent la vie et d'appuyer des politiques d'accueil. Si une loi injuste existe, la responsabilité chrétienne n'est pas le nihilisme mais l'action : légale, éducative et caritative pour changer les choses.",
      "scripture": ["Mt 5:13-16"]
    },
    {
      "id": "jesus-vie-et-salut",
      "question": "Peut-on dire non à la Vie alors que 'Jésus est la Vie' ?",
      "reponse": "Jésus déclare qu'il est « le Chemin, la Vérité et la Vie ». On reconnaît qu’en Lui réside toute la valeur et la dignité de la vie humaine. Croire cela, c’est s’engager à défendre chaque vie, surtout la plus fragile, et à témoigner de l’amour qui fait vivre.",
      "scripture": ["Jn 10:10", "Jn 14:6"]
    },

  
    {
      "id": "influence-maçonnerie",
      "question": "Quel lien entre la franc-maçonnerie et les lois anti-vie ?",
      "reponse": "Pierre Simon fut deux fois Grand Maître de la Grande Loge de France (GLDF). Sous son impulsion, la GLDF s’est engagée dans des réflexions sociétales, contraception, définition de la vie, droit à la mort, qu’elle présente comme un espace de débat public. Il s’en est suivi la parution de livres à bas prix, destinés à façonner la pensée du peuple et à propager cette vision du monde. Le 5 mai 2025, Emmanuel Macron a remercié publiquement la GLDF devant ses membres, dans le débat sur l'IVG ou encore l'euthanasie.",
      "scripture": []
    },
   
    {
      "id": "rapport-simon-kinsey",
      "question": "Qu’est-ce que le « Rapport Simon » et pourquoi est-il comparé à Kinsey ?",
      "reponse": "Le « Rapport Simon » est une étude commandée en France dans les années 1970 sur la sexualité, la contraception et les mœurs. On le qualifie parfois de « Kinsey à la française » en référence aux recherches sexuelles d’Alfred Kinsey aux États-Unis. Le rapport contribua à légitimer l’ouverture de la société aux méthodes contraceptives et à préparer le terrain pour une législation plus libérale en matière de sexualité et de reproduction.",
      "scripture": []
    },
    {
      "id": "influence-medicale-politique",
      "question": "Quel est le danger ou l’enjeu d’un mélange entre acteurs médicaux, idéologiques et politiques dans les lois sur l’avortement ?",
      "reponse": "Quand des médecins, des loges idéologiques ou des personnalités politiques influentes s’allient pour imposer une vision de la sexualité et de la vie, cela peut biaiser le débat démocratique. Les décisions de santé publique doivent s’appuyer sur la science, l’éthique, la délibération citoyenne et le respect de la dignité humaine, et non sur des alliances informelles ou des pressions intellectuelles occultes.",
      "scripture": []
    },
  
      {
      "id": "contraception-definition",
      "question": "La contraception permet aux femmes de ne plus subir la biologie ?",
      "reponse": "En réalité, c’est une rébellion contre l’ordre naturel voulu pour la fécondité. Le corps féminin n’est pas une prison, mais un don. Vouloir le neutraliser revient à nier le sens même de la sexualité, qui unit amour et vie.",
      "scripture": ["Gen 1:27-28", "Ps 139:13-16"]
    },
    {
      "id": "sexualite-procreation",
      "question": "Quel est le lien entre sexualité et procréation ?",
      "reponse": "La sexualité n’est pas un simple plaisir, elle a un sens : l’union des époux et la transmission de la vie. Séparer volontairement sexualité et procréation, c’est détourner ce don de son but. C’est comme manger sans faim ou se gaver de gâteau sans raison : un désordre moral qui finit par asservir plutôt que libérer.",
      "scripture": ["Gn 2:24", "1 Co 6:18-20"]
    },
    {
      "id": "emancipation-femme",
      "question": "La pilule, un instrument d’émancipation ?",
      "reponse": "Elle a souvent servi à conformer les femmes à un modèle masculin de performance et de productivité, au lieu de valoriser leur maternité. La vraie liberté, ce n’est pas d’effacer sa nature, mais de l’aimer et de l’ordonner à la vérité du don de soi.",
      "scripture": ["Jn 8:32"]
    },
    {
      "id": "pudeur-respect",
      "question": "La contraception protège-t-elle la dignité de la femme ?",
      "reponse": "En banalisant la sexualité, la contraception favorise la promiscuité et le détachement. Là où la chasteté élève, la contraception réduit. Le respect du corps et de l’amour passe par la maîtrise de soi, non par la chimie.",
      "scripture": ["1 Th 4:3-5", "Mt 5:8"]
    },
    {
      "id": "enfant-don",
      "question": "Pourquoi dire que l’enfant est un don et non un projet ?",
      "reponse": "L’enfant n’est pas un produit planifié selon la convenance des adultes. Chaque vie est voulue par Dieu, unique, et porte une vocation. Le réduire à un objet revient à s’ériger en maître de la vie. Accueillir la vie, même imprévue, c’est accueillir Dieu Lui-même, source de toute existence.",
      "scripture": ["Ps 127:3", "Jn 1:4"]
    },
    {
      "id": "contraception-et-ordre-naturel",
      "question": "Pourquoi la contraception est-elle contraire à l’ordre naturel ?",
      "reponse": "L’ordre naturel unit les fonctions du corps à leur finalité. Neutraliser la fécondité, c’est introduire une rupture dans cet ordre. Ce n’est pas une question de biologie froide, mais de vérité : chaque acte a un sens, l'acte sexuel celui celui d’un amour ouvert à la vie. Le nier, c’est désordonner l’amour lui-même.",
      "scripture": ["Rm 1:26-27", "Sg 13:1-3"]
    },
    {
      "id": "protection-sante",
      "question": "Les préservatifs ne sont-ils pas nécessaires pour éviter les maladies ?",
      "reponse": " Le remède aux infections, c’est la fidélité et la chasteté. Remplacer la responsabilité par le latex, c’est traiter la conséquence, pas la cause. La santé du corps passe aussi par la santé de l’âme.",
      "scripture": ["1 Co 6:19-20"]
    },
    {
      "id": "controle-naissance-societe",
      "question": "Limiter les naissances n’aide-t-il pas à réduire la pauvreté ?",
      "reponse": "Cette logique vient d’une vision matérialiste où la personne devient un fardeau économique. Mais chaque vie humaine est une richesse spirituelle et sociale. Les sociétés qui rejettent la fécondité se condamnent à la stérilité morale et démographique. Aider les pauvres, ce n’est pas leur interdire d’avoir des enfants, c’est soutenir leurs familles.",
      "scripture": ["Mt 6:33", "Ps 127:1-5"]
    },
   
    {
      "id": "vie-spirituelle",
      "question": "Quel impact la contraception a-t-elle sur la vie spirituelle ?",
      "reponse": "En supprimant la fécondité, elle ferme le cœur à la providence. La fécondité naturelle apprend la confiance en Dieu, la maîtrise de soi, et la coopération à la création. En refusant cette ouverture, on réduit l’amour à un calcul et on perd la joie de la dépendance à Dieu. Le refus de la vie est un refus de Dieu Lui-même.",
      "scripture": ["Dt 30:19", "Jn 10:10"]
    },
    {
      "id": "chastete-naturelle",
      "question": "Existe-t-il une alternative morale à la contraception ?",
      "reponse": "Oui, les méthodes naturelles respectent à la fois le corps, la liberté et la vérité du mariage. Elles demandent dialogue, discipline et respect mutuel, vertus qui fortifient le couple. Là où la contraception sépare, la chasteté unit.",
      "scripture": ["1 Co 13:4-7", "Mt 19:6"]
    },
     {
      "id": "histoire-ideologique",
      "question": "Quel lien historique entre idéologies et la légalisation de l'avortement ?",
      "reponse": "Certaines révolutions antireligieuses ont promu des réformes familiales pour modifier les mœurs et affaiblir l’influence de l’Église. Lénine, dans le contexte bolchevik, a soutenu l’émancipation des femmes en rupture avec l’ordre traditionnel ; Staline a ensuite corrigé certains excès pour favoriser la natalité. Ces changements montrent que la légalisation peut être instrumentalisée politiquement, pour des motifs démographiques, idéologiques ou anti-religieux, et qu’il faut donc regarder les conséquences humaines, pas seulement l’idéologie qui la promeut.",
      "scripture": []
    }
  ]
},

{
  "id": "unite-et-diversite-des-peuples",
  "titre": "Contre la discrimination : l’unité dans la diversité",
  "questions": [
    {
      "id": "creation-image-dieu",
      "question": "Que signifie être créés à l'image de Dieu ?",
      "reponse": "Chaque être humain porte en lui la dignité divine, car il reflète Dieu dans son intelligence, sa liberté et sa capacité d'aimer. Cela fonde l'égalité de tous les peuples.",
      "scripture": ["Gn 1:26-27"]
    },
    {
      "id": "origine-commune",
      "question": "Pourquoi peut-on dire que tous les peuples sont frères ?",
      "reponse": "Tous viennent d’un même Père, Dieu, qui a fait sortir d’un seul homme toute la race humaine.",
      "scripture": ["Ac 17:26"]
    },
    {
      "id": "diversite-sanctifiee",
      "question": "Comment Dieu sanctifie-t-il la diversité des peuples ?",
      "reponse": "À la Pentecôte, Dieu ne supprime pas les langues mais les unit dans l'Esprit Saint. L’unité chrétienne ne détruit pas la diversité, elle la transfigure.",
      "scripture": ["Ac 2:1-11"]
    },
    {
      "id": "vocation-des-peuples",
      "question": "Chaque peuple a-t-il une vocation propre ?",
      "reponse": "Oui, chaque peuple possède une mission unique dans l’histoire du salut, enracinée dans sa culture, sa langue et sa foi héritée.",
      "scripture": []
    },
    {
      "id": "egalite-et-diversite",
      "question": "Comment concilier égalité et diversité ?",
      "reponse": "Tous sont égaux en dignité, mais différents dans leur mission. Dieu ne copie pas, il crée. L’unité chrétienne est communion, non uniformité.",
      "scripture": ["Ga 3:28"]
    },
    {
      "id": "eglise-et-cultures",
      "question": "L’Église cherche-t-elle à effacer les cultures ?",
      "reponse": "Non, elle les baptise. Elle purifie ce qui est contraire à l’Évangile et fait porter du fruit à ce qui est bon et beau dans chaque culture.",
      "scripture": ["Mt 28:19"]
    },
    {
      "id": "foi-et-raison",
      "question": "Comment la foi s’accorde-t-elle avec la raison et les cultures ?",
      "reponse": "La foi éclaire la raison sans la détruire, comme l’a rappelé Benoît XVI à Ratisbonne : la lumière du Christ transfigure les cultures sans les nier.",
      "scripture": []
    },
    {
      "id": "eglise-et-nations",
      "question": "Que disent les textes du Concile Vatican II sur les nations ?",
      "reponse": "Gaudium et Spes et Nostra Aetate affirment la dignité de chaque peuple et la valeur de ses traditions, car Dieu agit dans toutes les cultures.",
      "scripture": []
    },
    {
      "id": "justice-et-domination",
      "question": "Que dit la Bible sur la domination injuste entre les peuples ?",
      "reponse": "Les prophètes condamnent toute oppression et toute exploitation. La domination d’un peuple sur un autre est un péché contre la justice divine.",
      "scripture": ["Is 10:1-3", "Am 5:11-15"]
    },
    {
      "id": "eglise-et-totalitarismes",
      "question": "Comment l'Église a-t-elle réagi face aux totalitarismes et génocides ?",
      "reponse": "Elle les a dénoncés comme des atteintes à l’image de Dieu dans les peuples : Holodomor, Vendée, colonisations destructrices, déportations basques…",
      "scripture": []
    },
    {
      "id": "peche-contre-les-nations",
      "question": "Que veut dire 'péché structurel contre la vie des nations' ?",
      "reponse": "Jean-Paul II dénonçait toute idéologie qui détruit la mémoire, la langue ou la foi d’un peuple : c’est un péché contre l’ordre voulu par Dieu.",
      "scripture": []
    },
    {
      "id": "imperialisme-et-racisme",
      "question": "Pourquoi le racisme et l'impérialisme sont-ils liés ?",
      "reponse": "Parce qu’ils veulent effacer l’identité d’un peuple pour imposer une vision unique. C’est une forme de haine de l’altérité et de l’image divine.",
      "scripture": []
    },
    {
      "id": "bearn-et-autonomie",
      "question": "Comment le Béarn illustre-t-il le respect d’une identité locale ?",
      "reponse": "Sous Fébus ou Jeanne d’Albret, le Béarn n'était tenu que de Dieu. Fidèle à sa foi et à ses institutions, il montrait qu’un peuple pouvait servir Dieu sans renier son identité. Mais lorsque, sous l’influence maçonnique, les États de Béarn décidèrent de rattacher le pays à la France, tout changea : l’institution des maisons fut détruite, la langue uniformisée, et des politiques anticatholiques et anti-vie furent imposées au Béarn.",
      "scripture": []
    },
    {
      "id": "droit-des-peuples",
      "question": "Pourquoi le droit des peuples à exister est-il chrétien ?",
      "reponse": "Jean XXIII, dans Pacem in Terris, affirme que chaque nation a droit à la vie, à la culture et à la liberté dans la vérité.",
      "scripture": []
    },
    {
      "id": "memoire-et-laicite",
      "question": "Pourquoi l’effacement de la mémoire chrétienne est-il dangereux ?",
      "reponse": "La laïcité militante qui nie les racines chrétiennes coupe un peuple de son âme. Oublier Dieu, c’est oublier l’homme.",
      "scripture": ["Ps 9:18"]
    },
    {
      "id": "fraternite-et-cultures",
      "question": "Quelle est la vraie fraternité chrétienne entre les peuples ?",
      "reponse": "Elle reconnaît chaque culture comme un don de Dieu, à protéger et à sanctifier. L’unité vient de la charité, non de la contrainte.",
      "scripture": ["Jn 17:21"]
    },
    {
      "id": "destruction-des-traditions",
      "question": "Comment les élites ont-elles contribué à déraciner les peuples ?",
      "reponse": "Souvent financées par des intérêts matérialistes, elles ont imposé des lois contraires à la tradition : laïcité agressive, destruction de la famille, uniformisation culturelle.",
      "scripture": []
    },
    {
      "id": "femmes-et-foi",
      "question": "Quel rôle les femmes ont-elles eu dans la foi populaire ?",
      "reponse": "Dans des provinces comme le Labourd, elles furent élues cheffes de paroisse, mais exclues par des Parisiens autoproclamés. Leur effacement par idéologie a appauvri la vie chrétienne.",
      "scripture": []
    },
    {
      "id": "trinite-et-humanite",
      "question": "Quel modèle la Trinité donne-t-elle pour l’unité humaine ?",
      "reponse": "Un seul Dieu en trois Personnes : unité parfaite sans confusion. L’humanité doit refléter cette communion où chaque peuple garde sa place.",
      "scripture": ["Jn 17:21", "Mt 28:19"]
    },
    {
      "id": "ame-des-peuples",
      "question": "Chaque peuple a-t-il une 'âme' selon Pie XII ?",
      "reponse": "Oui, dans Summi Pontificatus, il enseigne que chaque nation possède une vocation spirituelle propre. Détruire cela, c’est blesser l’ordre voulu par Dieu.",
      "scripture": []
    }
  ]
}



  ]
},


 {
  id: "paien",
  titre: "Objections des Non-Croyants",
  description: "Réponses aux questions des sceptiques sur Dieu, Jésus et l'Église",
  domaines: [
    {
      id: "trinite",
      titre: "Dieu est un, donc Jésus et le Père sont la même personne !",
      questions: [
        {
          id: "dieu-un",
          question: "Si Dieu est un, alors Jésus et le Père sont la même personne, non ?",
          reponse: `Non. Dieu est un en essence, mais trois en Personnes : Père, Fils, Saint-Esprit. C’est l’erreur du modalisme de dire que le Père et le Fils sont la même personne jouant des rôles différents. La Bible montre des relations réelles entre eux, pas des déguisements.`,
        },
        {
          id: "jesus-prie",
          question: "Quand Jésus prie, il parle à Lui-même ?",
          reponse: `Non. Si Jésus parle au Père, c’est qu’il n’est pas le Père mais le Fils. Jean 17,5 : « Glorifie-moi de la gloire que j’avais auprès de toi avant que le monde soit. » Cela implique deux personnes distinctes en relation.`,
          scripture: ["Jn 17:5"]
        },
        {
          id: "bapteme",
          question: "Le baptême de Jésus ne montre-t-il qu’un seul Dieu ?",
          reponse: `Oui, un seul Dieu, mais trois personnes présentes : Jésus dans l’eau, l’Esprit qui descend, la voix du Père. On ne peut pas réduire cela à un seul “rôle”.`,
          scripture: ["Mt 3:16-17"]
        },
        {
          id: "bapteme-trinitaire",
          question: "Pourquoi dit-on un seul Dieu si on baptise au nom du Père, du Fils et de l’Esprit ?",
          reponse: `Parce qu’il y a une seule essence (“au nom” au singulier), et trois personnes distinctes (Père, Fils, Esprit).`,
          scripture: ["Mt 28:19"]
        },
        {
          id: "trinite-invention",
          question: "La Trinité a été inventée tard, au Moyen Âge ?",
          reponse: `Faux. La Didachè (vers 70-90) dit déjà : « Baptisez au nom du Père, du Fils et du Saint-Esprit. » Les Pères du IIe siècle enseignent déjà la Trinité. La doctrine existait bien avant les conciles.`,
        },
        {
          id: "tertullien-trinite",
          question: "Tertullien a inventé la Trinité ?",
          reponse: `Non, il n’a pas inventé la doctrine, il a seulement inventé le mot “Trinitas” pour exprimer ce que les chrétiens croyaient déjà. La foi trinitaire précède son vocabulaire. L'invetion du mot "oxygène" ne marque pas la naissance de l'oxygène.`,
        },
        {
          id: "nicee-jesus-dieu",
          question: "Nicée a changé la Bible pour dire que Jésus est Dieu ?",
          reponse: `Non. Nicée définit ce que les chrétiens croyaient déjà : le Fils est consubstantiel au Père (homoousios). Le concile a clarifié, pas inventé.`,
        },
        {
          id: "esprit-saint",
          question: "L’Esprit-Saint n’est-il qu’une force ?",
          reponse: `Non. Jean 14,26 : le Père envoie l’Esprit au nom du Fils, et l’Esprit enseigne. Il agit, parle, guide, c’est une Personne divine.`,
          scripture: ["Jn 14:26"]
        },
        {
          id: "un-dieu-trois-personnes",
          question: "Donc ce n’est ni 1 personne, ni 3 dieux ?",
          reponse: `Exact : Une seule essence divine, Trois personnes réellement distinctes, Un seul Dieu. Ni polythéisme, ni modalisme, mais Trinité.`,
        },
        {
          id: "image-trinite",
          question: "Y a-t-il une image simple pour comprendre ?",
          reponse: `Oui : Le Père = la Source, Le Fils = l'Intelligence, L’Esprit = la Volonté. Trois réalités distinctes, impossibles à séparer.`,
        }
      ]
    },
    {
      id: "jesus-dieu",
      titre: "Jésus n’a jamais dit qu’il est Dieu",
      questions: [
        {
          id: "je-suis-dieu",
          question: "Si Jésus est Dieu, pourquoi n’a-t-il jamais dit : “Je suis Dieu” ?",
          reponse: `Il l’a dit, mais dans le langage juif de son temps. Quand il dit « Avant qu’Abraham fût, Moi, Je Suis » (Jean 8,58), il utilise le Nom divin (Exode 3,14). Les Juifs l’ont compris : ils ont voulu le lapider pour blasphème.`,
          scripture: ["Jn 8:58", "Ex 3:14"]
        },
        {
          id: "unite-pere",
          question: "Jésus et le Père ne sont-ils pas seulement unis symboliquement ?",
          reponse: `Non. Jésus dit : « Moi et le Père, nous sommes un » (Jean 10,30). Les Juifs répondent : « Tu te fais Dieu », et veulent le tuer, preuve qu’ils avaient bien compris la revendication divine.`,
          scripture: ["Jn 10:30"]
        },
        {
          id: "priere-jesus",
          question: "Pourquoi Jésus prie-t-il s’il est Dieu ?",
          reponse: `Parce que Jésus est Dieu fait homme. Il prie en son humanité, non parce qu’il serait inférieur en divinité. La prière révèle la relation éternelle entre le Père et le Fils.`,
        },
        {
          id: "represente-dieu",
          question: "Jésus dit seulement qu’il représente Dieu, pas qu’il est Dieu ?",
          reponse: `Jésus dit : « Qui m’a vu a vu le Père » (Jean 14,9). Ce n’est pas un prophète qui parle. C’est Dieu manifesté visiblement.`,
          scripture: ["Jn 14:9"]
        },
        {
          id: "pardonner",
          question: "Jésus pardonne les péchés, mais les prophètes aussi non ?",
          reponse: `Non. Les prophètes demandaient à Dieu le pardon. Jésus dit : « Tes péchés sont pardonnés » par sa propre autorité (Marc 2,5). Les scribes réagissent : « Qui peut pardonner les péchés, sinon Dieu seul ? », ils ont compris.`,
          scripture: ["Mc 2:5"]
        },
        {
          id: "divinite-apotres",
          question: "Les apôtres ont inventé la divinité du Christ après sa mort ?",
          reponse: `Faux. Thomas s’écrie « Mon Seigneur et mon Dieu ! » (Jean 20,28). Et Jésus n’interdit pas cette adoration. Si Jésus n’était pas Dieu, il aurait corrigé Thomas.`,
          scripture: ["Jn 20:28"]
        },
        {
          id: "foi-premiers-chretiens",
          question: "Où est la preuve que les premiers chrétiens croyaient cela ?",
          reponse: `La Didachè, Saint Ignace, Justin Martyr, Irénée, tous professent : Le Christ est Dieu fait homme. Cette foi est apostolique, pas une invention tardive.`,
        },
        {
          id: "tradition",
          question: "La Bible suffit, pas besoin de Tradition !",
          reponse: `La Bible provient de la Tradition apostolique. Saint Paul dit : « Tenez fermes les traditions reçues, soit par notre parole, soit par notre lettre » (2 Th 2,15). Il y a Écriture + Tradition, pas Écriture seule.`,
          scripture: ["2 Th 2:15"]
        }
      ]
    },
    {
      id: "constantin",
      titre: "Constantin a fondé l’Église catholique",
      questions: [
        {
          id: "creation-eglise",
          question: "L’Église catholique a été créée au Concile de Nicée, non ?",
          reponse: `Non. Le mot “catholique” apparaît en 107 : Saint Ignace d’Antioche écrit : « Là où est Jésus-Christ, là est l’Église catholique. » C’est deux siècles avant Constantin.`,
        },
        {
          id: "structure-eglise",
          question: "L’Église avant Constantin n’avait pas de structure ?",
          reponse: `Si. Il y avait déjà évêques, prêtres, diacres, et plus de 30 papes avant Constantin. Saint Irénée (vers 180) affirme que toutes les Églises doivent s’accorder avec Rome.`,
        },
        {
          id: "constantin-doctrine",
          question: "Constantin a imposé la doctrine chrétienne ?",
          reponse: `Non. Il a seulement légalisé le christianisme (Édit de Milan, 313). Le Concile de Nicée a été dirigé par les évêques, pas par lui, il n’était même pas baptisé.`,
        },
        {
          id: "constantin-catholique",
          question: "Constantin était un modèle catholique ?",
          reponse: `Il a été baptisé sur son lit de mort par un arien, un hérétique. Donc il n’était pas modèle de doctrine catholique.`,
        },
        {
          id: "fondation-eglise",
          question: "Donc Constantin n’a vraiment rien fondé ?",
          reponse: `Exact. Constantin a reconnu publiquement une Église déjà existante, enracinée dans : le Christ, les apôtres, les évêques leurs successeurs. L’Église vient de Jésus, pas d’un empereur.`,
        }
      ]
    }
  ]
}

];