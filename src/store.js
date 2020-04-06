const store = {
    state: {
        data: null
    },

    async fetchData( url ) {
        const data = await window.fetch(url);
        const json = await data.json();
        this.state.data = json;
    }
}

export default store
