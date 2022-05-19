import getData from "./getData";
import postData from "./postData";

const cart = () => {
    const cart = document.querySelector('#cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseModal = document.querySelector('.cart-close');

    const openCard = () => {
        cartModal.style.display ='flex';
    };

    const closeCard = () => {
        cartModal.style.display ='none';
    };

    cart.addEventListener('click', openCard);

    cartCloseModal.addEventListener('click', closeCard);
};

 export default cart;

