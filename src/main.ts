import "./styles/style.scss";
import { pokemonArray } from "./data/pokemon";

const cardContainer = document.querySelector<HTMLElement>(".card-container");

if (!cardContainer) throw new Error("Issue with card container selector");

const generatePokemonHTML = (pokemonArray: Pokemon[]): void => {
  cardContainer.innerHTML = pokemonArray
    .map((pokemon) => {
      const capitalizedName: string =
        pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
      const typeString: string = pokemon.types.join(" & ");

      return `
    <div class="card">
    <img src="${pokemon.sprite}" alt="picture of the ${capitalizedName} pokemon" class="card__image">
    <div class="card__content">
    <h2 class="card__heading">${capitalizedName}</h2>
    <p class="card__text"></p>${capitalizedName} (#${pokemon.id}) is a ${typeString} type pokemon.</p>
    </div>
    </div>`;
    })
    .join("");
};

generatePokemonHTML(pokemonArray);
