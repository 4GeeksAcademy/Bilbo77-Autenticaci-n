const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [{ title: "FIRST", background: "white", initial: "white" }, { title: "SECOND", background: "white", initial: "white" }],
			isLogin: false,
			user: ''
		},
		actions: {
			exampleFunction: () => { getActions().changeColor(0, "green"); },  // Use getActions to call a function within a fuction
			changeColor: (index, color) => {
				const store = getStore();  // Get the store
				// We have to loop the entire demo array to look for the respective index and change its color.
				const demo = store.demo.map((element, i) => {
					if (i === index) element.background = color;
					return element;
				});
				setStore({ demo: demo });  // Reset the global store
			},
			getMessage: async () => {
				const options = {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				}
				const response = await fetch(process.env.BACKEND_URL + "/api/hello", options)
				if (!response.ok) {
					console.log("Error loading message from backend", response.status, response.statusText)
					return response.status
				}
				const data = await response.json()
				setStore({ message: data.message })
				return data;
			},
			setIsLogin: (login) => {setStore({ isLogin: login})},
			setCurrentUser: (user) => {setStore({ user: user})},
			profile: async () => {
				const token = localStorage.getItem('token');
				const url = `${process.env.BACKEND_URL}/api/profile`;
				const options = {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${token}`
					}
				}
				const response = await fetch(url, options)
				if (!response.ok) {
					console.log('Error: ', response.status, response.statusText);
					return
				}
				const data = await response.json()
				console.log(data);

			}
		}
	};
};


export default getState;