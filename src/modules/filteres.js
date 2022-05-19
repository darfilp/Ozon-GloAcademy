export const filterGoods = (goods, value) => {
    return goods.filter(good => {
        return good.title.toLowerCase().includes(value.toLowerCase());
    });
};

export const searchCategory = (goods, value) => {
    return goods.filter(good => {
        return value === good.category
    });
};