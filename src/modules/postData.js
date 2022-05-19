const postData = () => {
    return fetch('http://localhost:3000/goods', {
  method: 'POST',
  body: JSON.stringify({
		id: 0,
		title: "Новый файл",
		price: 33990,
		sale: false,
		img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
		hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg",
		category: "Игровая приставка"
	}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => json);
};

export default postData;