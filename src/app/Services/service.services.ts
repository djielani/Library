import { Injectable } from "@angular/core";
import { model } from "../model/model.app";

@Injectable({
  providedIn : 'root'
})

export class Services {
  book : model[] = 
    [
        {
            id: 1,
            title: 'Père riche, Père pauvre',
            type: '',
            auteur: 'Robert Kiyosaki',
            description: " J'ai lu ce que tu as publié sur ton compte Insta. Tu es comme un pigeon qui m'aurait chié sur l'épaule en passant. C'est salissant, et très désagréable. Ouin ouin ouin je suis une petite baltringue qui n'intéresse personne et je couine comme un chihuahua parce que je rêve qu'on me remarque. Gloire aux réseaux sociaux : tu l'as eu, ton quart d'heure de gloire. La preuve : je t'écris. Après le triomphe de sa trilogie Vernon Subutex, le grand retour de Virginie Despentes avec ces Liaisons dangereuses ultra-contemporaines. Roman de rage et de consolation, de colère et d'acceptation, où l'amitié se révèle plus forte que les faiblesses humaines...",
            prix: 2000,
            imageURL: '/assets/images/prpp.jpg',
            compteur: 5,
            created_date: new Date()
        },
        {
            id: 2,
            title: 'Une Si Longue Lettre',
            type: '',
            auteur:'Mariama Ba',
            description: 'Une si longue lettre est une oeuvre majeure, pour ce qu\'elle dit de la condition des femmes. Au coeur de ce roman, la lettre que l\'une d\'elle, Ramatoulaye, ...',
            prix: 2000,
            imageURL: '/assets/images/unesilonguelettre.jpg',
            compteur: 5,
            created_date: new Date()
        },
        {
            id: 3,
            title: 'L\'étranger',
            type: '',
            auteur:'Albert Camus',
            description: 'L\'Étranger est le premier roman publié d\'Albert Camus, paru en 1942. Il prend place dans la tétralogie que Camus nommera « cycle de l\'absurde » qui décrit ...',
            prix: 2000,
            imageURL: '/assets/images/letranger.webp',
            compteur: 5,
            created_date: new Date()
        },
        {
            id: 4,
            title: 'Une Vie De Boy',
            type: '',
            auteur:'Ferdinand Oyono',
            description: 'Une vie de boy, publié en 1956, est centré sur le personnage de Joseph, boy instruit placé chez le commandant d\'un district de la colonie française. Le roman dénonce les pratiques autoritaires de la colonisation et au-delà, la négation de l\'humanité des colonisés à qui on ne pardonne pas de quitter leur place en découvrant l\'envers du décor des maîtres blancs. ',
            prix: 2000,
            imageURL: '/assets/images/uneviedeboy.jpg',
            compteur: 5,
            created_date: new Date()
        },
        {
            id: 5,
            title: 'L\'Enfant Noir',
            type: '',
            auteur:'Camara Laye',
            description: 'L\’Enfant noir est le premier roman de Camara Laye, publié à Paris en 1953. Considérée comme « l\'un des textes fondateurs de la littérature africaine contemporaine », cette œuvre largement autobiographique a reçu le prix Charles Veillon 1954 et inspiré en 1995 un film du même nom, réalisé par Laurent Chevallier.',
            prix: 2000,
            imageURL: '/assets/images/lenfantnoir.jpeg',
            compteur: 5,
            created_date: new Date()
        },
        {
            id:6,
            title: 'Batouala',
            type: '',
            auteur:'René Marant',
            description: "Le grand chef Batouala ne peut plus dormir comme avant dans la quiétude de ta haute brousse. De nombreux soucis l'empêchent de rejoindre \" Le doux feu intérieur du sommeil \" : ses fonctions rituelles, la proximité des chasses, l'éloignement manifeste de sa femme... Et surtout, cette sourde rumeur qui répète que l'homme blanc accable l'homme noir et Le traite moins bien que son chien. ",
            prix: 2000,
            imageURL: '/assets/images/batouala.jpg',
            compteur: 5,
            created_date: new Date()
        },
        {
            id:7,
            title: "L'Aventure ambiguë",
            type: '',
            auteur:'Cheikh Hamidou Kane',
            description: 'De manière significative L\'aventure ambiguë, histoire d\'un itinéraire spirituel, porte en sous-titre \"récit". Ce qui frappe en effet le lecteur de ce livre, c\'est le classicisme dû autant à la retenue du ton qu\'à la portée universelle de la réflexion philosophique. Sans doute l\'auteur oppose-t-il à la pensée technique de l\'Occident, essentiellement tournée vers l\'action, la pensée de l\'Islam...',
            prix: 2000,
            imageURL: '/assets/images/aventureambigue.webp',
            compteur: 5,
            created_date: new Date()
        },
        {
            id:8,
            title: 'Lait et miel',
            type: '',
            auteur:'Rupi Kaur',
            description: 'Lait et miel est un recueil poétique que toutes les femmes devraient avoir sur leur table de nuit ou la table basse de leur salon. Accompagnés de ses propres dessins, ses poèmes, d\'une honnêteté et d\'une authenticité rares, se lisent comme les expériences collectives et quotidiennes d\'une femme du XXIe siècle. ',
            prix: 2000,
            imageURL: '/assets/images/laitetmiel.jpg',
            compteur: 5,
            created_date: new Date()
        }
    ];

  getProduitByid(id : number):model{
    const dir = this.book.find(dir => dir.id === id);
    if(dir)
    {
      return dir
    }else{
      throw new Error('Book not found')
    }
  }
}
