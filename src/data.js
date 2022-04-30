import prod1 from "../src/img/OtherProducts/prod01.svg"
import prod2 from "../src/img/OtherProducts/prod02.svg"
import prod3 from "../src/img/OtherProducts/prod03.svg"
import prod4 from "../src/img/OtherProducts/prod04.svg"
import azul from "./img/Colors/azul.svg"
import marrom from "./img/Colors/marrom.svg"
import preto from "./img/Colors/preto.svg"
import vinho from "./img/Colors/vinho.svg"




export const OtherProductss = [
        {
        id: 1,
        price: "R$:204,90",
        color: [{name: "vinho",src:(require("../src/img/Colors/vinho.png"))},{name: "azul",src:(require("../src/img/Colors/azul.png"))}, {name: "marrom",src:(require("../src/img/Colors/marrom.png"))}, {name: "preto",src:(require("../src/img/Colors/preto.png"))} ],
        img: prod1,
    },
    {
        id: 2,
        price: "R$:204,90",
        color: [{name: "vinho",src:(require("../src/img/Colors/vinho.png"))},{name: "azul",src:(require("../src/img/Colors/azul.png"))}, {name: "marrom",src:(require("../src/img/Colors/marrom.png"))}, {name: "preto",src:(require("../src/img/Colors/preto.png"))}],
        img: prod2,
    },
    {
        id: 3,
        price: "R$:204,90",
        color: [],
        img: prod3,
    },
    {
        id: 4,
        price: "R$:204,90",
        color: [{name: "azul",src:(require("../src/img/Colors/azul.png"))}, {name: "marrom",src:(require("../src/img/Colors/marrom.png"))}, {name: "preto",src:(require("../src/img/Colors/preto.png"))}],
        img: prod4,
    },
    ]


    // color: [(require("../src/img/Colors/preto.png")), (require("../src/img/Colors/vinho.png"))],
