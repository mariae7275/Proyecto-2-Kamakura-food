//DEBE imprimir en pantalla la información de filtros.
import {filters} from "../assets/data/data.js"

function addFilter () {
    const filtersContainer = document.querySelector(".filters-container")
    filtersContainer.innerHTML = "";
    filters.forEach(el => {
        const buttonFilter = document.createElement("button");
        buttonFilter.textContent = el;
        filtersContainer.appendChild(buttonFilter);
        buttonFilter.classList.add("filter");
    })
}
addFilter();
//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.