const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			
			],
			message : [],
			personajes: [],
			planetas: []
			
			
		},
		actions: {
			
			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				
					fetch("https://swapi.dev/api/people/")
					  .then((res) => res.json())
					  .then((data) => setStore({personajes: data.results}));

					  fetch("https://swapi.dev/api/planets/")
					  .then((res) => res.json())
					  .then((data) => setStore({planetas: data.results}));
				  
				
			},

			cambiarMensaje: (messageText) => {
				const store = getStore()
				setStore({
					message: [...store.message, messageText] // Agregar el nuevo mensaje al arreglo
				})
				// console.log(store.message)
				 
			  },
			  FavoriteRemove: (name) => {
				
				const store = getStore();
				setStore({
					message: store.message.filter(uid => uid !== name)
				});
			  },


			  
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store 
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
