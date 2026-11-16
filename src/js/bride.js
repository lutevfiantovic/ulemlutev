import {data} from "../assets/data/data.js";
import {renderElement} from "../utils/helper.js";

export const bride = () => {
    const brideCouple = document.querySelector('.bride_couple ul');
    const brideListItem = (data) => {
        const arabicName = data.id === 1
            ? 'محمّد لوطفيانطا نوكراها'
            : 'فتحية الطيّبة';

        return `<li data-aos="zoom-in" data-aos-duration="1000">
              <figure>
                   <img src="${data.image}" alt="${data.name} animation">
                   <span class="bride-arabic-name" lang="ar">${arabicName}</span>
                   <figcaption>${data.name}</figcaption>
              </figure>
              <p>${data.child} <br>dari <br> Bapak ${data.father} & Ibu ${data.mother}</p>
              <span style="display: ${data.id === 2 ? 'none' : 'block'}">&</span>
        </li>`;
    };

    const brideData = [data.bride.L, data.bride.P];

    renderElement(brideData, brideCouple, brideListItem);
}
