const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlStarWars: "https://www.swapi.tech/api",
			characters: [],
			planets: [],
			starships: [],
			favorites: [],


		},
		actions: {
			addFavorites: (fav) => {
				let store= getStore() 
				let verify = store.favorites.some((item)=> fav._id == item._id)
				if (verify) {
					let newFavorites = store.favorites.filter((item)=> item._id != fav._id)
					setStore({
						favorites: newFavorites
					})
				} else {
					setStore({
						favorites: [...store.favorites, fav]
					})
				}
			},
			getCharacters: () => {
				fetch (`${getStore().urlStarWars}/people`)
				.then ((response) => response.json())
				.then ((data) =>{
					for(let item of data.results){
						fetch(item.url)
						.then((response) => response.json())
						.then((data)=>{
							setStore({
								characters: [...getStore().characters, data.result]
							});
						}).catch((error)=>{
							console.log(error);
						})
					}
				}).catch((error)=>{
					console.log(error);})
			},
			getPlanet: () => {
				fetch (`${getStore().urlStarWars}/planets`)
				.then ((response) => response.json())
				.then ((data) =>{
					for(let item of data.results){
						fetch(item.url)
						.then((response) => response.json())
						.then((data)=>{
							setStore({
								planets: [...getStore().planets, data.result]
							});
						}).catch((error)=>{
							console.log(error);
						})
					}
				}).catch((error)=>{
					console.log(error);})
			},
			getStarship: () => {
				fetch (`${getStore().urlStarWars}/starships`)
				.then ((response) => response.json())
				.then ((data) =>{
					for(let item of data.results){
						fetch(item.url)
						.then((response) => response.json())
						.then((data)=>{
							setStore({
								starships: [...getStore().starships, data.result]
							});
						}).catch((error)=>{
							console.log(error);
						})
					}
				}).catch((error)=>{
					console.log(error);})
			},
		}
	};
};

export default getState;
