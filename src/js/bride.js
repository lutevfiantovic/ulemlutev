import {data} from "../assets/data/data.js";
import {renderElement} from "../utils/helper.js";

export const bride = () => {
    const brideCouple = document.querySelector('.bride_couple ul');

    const brideListItem = (person) => {
        const arabicText = person.arabicName || (person.id === 1 ? 'لوتيف فيانتوفيتش' : 'توي');

        return `
        <li data-aos="zoom-in" data-aos-duration="1000">
            <figure class="bride-figure-row">
                <div class="bride-media-wrapper">
                    <img src="${person.image}" alt="${person.name} animation">
                    <span class="bride-arabic-side" lang="ar">${arabicText}</span>
                </div>
                <figcaption>${person.name}</figcaption>
            </figure>
            <p>${person.child} <br>dari <br> Bapak ${person.father} &amp; Ibu ${person.mother}</p>
            <span class="ampersand-symbol" style="display: ${person.id === 2 ? 'none' : 'block'}">&amp;</span>
        </li>`;
    };

    const brideData = [data.bride.L, data.bride.P];

    renderElement(brideData, brideCouple, brideListItem);
};
