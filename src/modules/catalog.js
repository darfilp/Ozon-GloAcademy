import {renderGoods} from "./renderGoods";
import getData from "./getData";
import {filterGoods, searchCategory} from "./filteres";

export const catalog = () => {
    const catalog = document.querySelector('.catalog');
    const modalItems = document.querySelectorAll('.catalog-list > li');

    document.addEventListener('click', (e) => {
        if (e.target.matches('.catalog-list > li') || !e.target.closest('.catalog-button')) {
            catalog.style.display = 'none';
        } else {
            catalog.style.display = 'block';
        }
    })

    modalItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent;
            getData().then(data => {
                renderGoods(searchCategory(data, text));
            })
        })
    })
}