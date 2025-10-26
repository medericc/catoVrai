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
  description: string;
  questions: Question[];
}

export const themes: Domaine[] = [
   {
    id: "protestants",
    titre: "Objections Protestantes",
    description: "Réponses aux questions courantes des frères séparés",
    domaines: [
      {
        id: "intercession",
        titre: "Marie et les Saints",
        questions: [
          {
            id: "prier-saints",
            question: "Il n'y a qu'un seul médiateur, Jésus-Christ ! Pourquoi prier les saints ?",
            reponse: `Le Christ est l’unique Médiateur (1 Tim 2,5), mais les membres de son Corps participent à son intercession. La Bible montre les saints vivants intercédant (Ap 5,8) et nous demande de prier les uns pour les autres (Jc 5,16).`,
            scripture: ["1 Tim 2:5", "Ap 5:8", "Jc 5:16"]
          }
        ]
      },
      {
        id: "autorite",
        titre: "Écriture et Tradition",
        questions: [
          {
            id: "sola-scriptura",
            question: "Pourquoi ne pas se contenter de la Bible seule ?",
            reponse: `La Bible elle-même renvoie à la Tradition vivante : “Tenez les traditions reçues par parole ou par lettre” (2 Thess 2,15). Et c’est l’Église qui a défini la Bible au IVe siècle.`,
            scripture: ["2 Thess 2:15", "1 Tim 3:15"]
          }
        ]
      }
    ]
  },

  {
    id: "catholique",
    titre: "Questions Catholiques",
    description: "Approfondissement de la doctrine catholique",
    domaines: [
      {
        id: "magistere",
        titre: "Pères de l'Église",
        questions: [
          {
            id: "consensus-peres",
            question: "Pourquoi le consensus des Pères de l'Église est-il important ?",
            reponse: `Ils sont les témoins directs de la Tradition apostolique. Leur accord exprime la foi transmise dès l’origine.`
          }
        ]
      }
    ]
  },

  {
    id: "paiens",
    titre: "Objections des Non-Croyants",
    description: "Dialogue avec les sceptiques",
    domaines: [
      {
        id: "christologie",
        titre: "Identité du Christ",
        questions: [
          {
            id: "jesus-dieu-affirmation",
            question: "Jésus a-t-il affirmé être Dieu ?",
            reponse: `Oui : “Avant qu’Abraham fût, Je Suis” (Jn 8,58) — le nom divin révélé à Moïse (Ex 3,14).`,
            scripture: ["Jn 8:58", "Ex 3:14"]
          },
          {
            id: "jesus-unite-du-pere",
            question: "Jésus se présente-t-il comme un avec le Père ?",
            reponse: `"Moi et le Père, nous sommes un" (Jn 10,30). Les Juifs voulaient le lapider car il se faisait Dieu.`,
            scripture: ["Jn 10:30"]
          },
          {
            id: "jesus-autorite-pardon",
            question: "Pourquoi ses miracles prouvent-ils sa divinité ?",
            reponse: `Jésus pardonne les péchés (Mc 2,5-7) — or seul Dieu peut remettre les fautes.`,
            scripture: ["Mc 2:5-7"]
          },
          {
            id: "adoration",
            question: "Les disciples l'ont-ils adoré comme Dieu ?",
            reponse: `Thomas dit à Jésus : “Mon Seigneur et mon Dieu !” (Jn 20,28). Jésus ne le corrige pas.`,
            scripture: ["Jn 20:28"]
          }
        ]
      }
    ]
  }
];