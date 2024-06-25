import wc1 from "../img/wc.png";
import wc2 from "../img/let.png";
import wc3 from "../img/images.png";
import wc4 from "../img/toi.png";
import wc5 from "../img/toilet.png";
import wc6 from "../img/wc2.png";

const toiletsData = [
    {
        id: 1,
        title: "Toilette Moderne",
        image: wc1,
        description: "Une toilette moderne avec des fonctionnalités avancées.",
        price: 50
    },
    {
        id: 2,
        title: "Toilette futuriste",
        image: wc2,
        description: "Une toilette futuriste comme vous n'avais jamais vue.",
        price: 80,
        isLuxe: false
    },
    {
        id: 3,
        title: "Toilette de Barbie",
        image: wc3,
        description: "Nous avons les toilettes du film !",
        price: 800,
        isLuxe: true
    },
    {
        id: 4,
        title: "Toilette classico",
        image: wc4,
        description: "Des toilettes, tout simplement.",
        price: 20,
        isLuxe: false
    },
    {
        id: 5,
        title: "Toilette de luxe",
        image: wc5,
        description: "Asseyez vous sur de l'or et du bon marbre.",
        price: 1000,
        isLuxe: true
    },
    {
        id: 6,
        title: "Toilette parlante",
        image: wc6,
        description: "Vous ne vous ennuyerez plus aux toilettes.",
        price: 300,
        isLuxe: true
    }
];

export default toiletsData;
