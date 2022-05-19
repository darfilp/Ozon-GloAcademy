import getData from "./getData";
import {renderGoods} from "./renderGoods";
import {filterGoods} from "./filteres";

export const search = () => {
    const search = document.querySelector('.search-wrapper_input');
    search.addEventListener('input', (e) => {
        const value = e.target.value;
        getData(value).then(data => {
            renderGoods(filterGoods(data, value));
        })
    })
}

