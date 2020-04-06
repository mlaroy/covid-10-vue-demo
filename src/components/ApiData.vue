<template>
    <div>
        <div class="loader" v-if="loading && !storeData.data">
            <p>loading...</p>
        </div>
        <div class="layout" v-else>
            <h2>{{ formattedDate }}</h2>
            <div class="results">
                <div class="box">
                    <h3>Total Cases</h3>
                    <h4>{{ formatNumber(storeData.data.Global.TotalConfirmed) }}</h4>
                </div>
                <div class="box">
                    <h3>Total Deaths</h3>
                    <h4>{{ formatNumber(storeData.data.Global.TotalDeaths) }}</h4>
                </div>
            </div>
            <div class="box countries">
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th><button @click="sortData('TotalConfirmed')">Total Confirmed</button></th>
                            <th><button @click="sortData('NewConfirmed')">New Cases</button></th>
                            <th><button @click="sortData('TotalDeaths')">Total Deaths</button></th>
                            <th><button @click="sortData('NewDeaths')">New Deaths</button></th>
                        </tr>
                    </thead>
                    <tbody v-if="sortedData">
                        <Country
                            v-for="country in sortedData"
                            :country="country"
                            :key="country.slug"
                        />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import Country from './Country';

import store from '../store';

export default {
    name: 'ApiData',
    components: {
        Country
    },
    data() {
        return {
            apiEndpoint: 'https://api.covid19api.com/summary',
            loading: true,
            storeData: store.state,
            sortValue: 'TotalConfirmed'

        }
    },
    async mounted() {
        await store.fetchData(this.apiEndpoint);
        this.loading = false;
    },
    computed: {
        formattedDate() {
            const date = new Date(this.storeData.data.Date);
            return date.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        },

        sortedData() {
            const countries = [...this.storeData.data.Countries]
            return countries.sort( (a, b) => {
                return a[this.sortValue] < b[this.sortValue] ? 1 : -1;
            });
        }
    },
    methods: {
        formatNumber( number ) {
            return number.toLocaleString()
        },
        sortData( newSortValue ) {
            this.sortValue = newSortValue
        }
    }
}
</script>

<style>

button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color:green;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3 ease;
    -webkit-appearance: none;
    appearance: none;
}

button:hover,
button:focus {
    background: #888;
}

</style>
