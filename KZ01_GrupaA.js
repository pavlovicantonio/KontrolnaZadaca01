//1 (3 BODA)
//Napisi funkciju koja ispisuje parne brojeve od 0 do 100 (ukljucujuci 100)
function parni() {
    for (let i = 0; i <= 100; i += 2) {
        console.log(i)
    }
}
parni();

//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u dan u tjednu. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Ponedjeljak";
//INPUT: 5; OUTPUT: "Petak"; 
function dani(input) {
    switch (input) {
        case 1: {
            console.log("Ponedjeljak");
            break;
        }
        case 2: {
            console.log("Utorak");
            break;
        }
        case 3: {
            console.log("Srijeda");
            break;
        }
        case 4: {
            console.log("Četvrtak");
            break;
        }
        case 5: {
            console.log("Petak");
            break;
        }
        case 6: {
            console.log("Subota");
            break;
        }
        case 7: {
            console.log("Nedjelja");
            break;
        }
        default: {
            console.log("Unos broja mora biti u rasponu od 1 do 7 !");
            break;
        }
    }
}
//Poziv funkcije 
dani(5);
dani(8);

//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere ne uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao";
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 35)

function reverse(param) {
    let a = []
    let i = 0;
    for (let j = param.length - 1; j > i; j--) {
        a.push[j];
    }
    console.log(a)
}

reverse("Pero");
//4 (4 BODA)
//Napisi funkciju koja vraca najkraci kljuc u danom objektu
const somePeople = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}
function najkraci(somePeople) {
    let min = 100;
    let najkraci;
    for (let i = 0; i < somePeople.length; i++) {
        if (somePeople[i] < min) {
            somePeople[i] = najkraci;
        }
    }
    console.log(najkraci);
}
najkraci(somePeople);
console.log(somePeople.size);
//INPUT: somePeople
//OUTPUT: "Ada"

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca proste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [3, 5, 11]

//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja kvadrira i vraca dane inpute
//INPUT: [2, 4, 6, 0, 1]
//OUTPUT: [4, 16, 36, 0, 1]

//6 (4 BODA)
//Napisi funkciju koja vraca sve dogadaje koji su se dogodili prije od vrijednosti iz ulaznog parametra
const someEvents = [
    {
        eventName: "Izasla je Java",
        eventYear: 1995,
    },
    {
        eventName: "Izasao je C#",
        eventYear: 2000,
    },
    {
        eventName: "Izasao je Python",
        eventYear: 1991,
    },
    {
        eventName: "Izasao je C++",
        eventYear: 1985,
    },
    {
        eventName: "Izasao je JavaScript",
        eventYear: 1995,
    },
];
//INPUT: (someEvents, 1992)
//OUTPUT: [{eventName: "Izasao je Python", eventYear: 1991}, {eventName: "Izasao je C++", eventYear: 1985}]
