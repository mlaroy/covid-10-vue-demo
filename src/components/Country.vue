<template>
    <tr>
        <th>{{ country.Country }}</th>
        <td class="numbers">{{ formatNumber( country.TotalConfirmed) }}</td>
        <td class="numbers">{{ formatNumber( country.NewConfirmed) }}</td>
        <td class="numbers">{{ formatNumber( country.TotalDeaths) }}</td>
        <td class="numbers">{{ formatNumber( country.NewDeaths) }}</td>
    </tr>
</template>

<script>
export default {
    name: 'country',
    props: ['country'],
    methods: {
         formatNumber( number ) {
            return number.toLocaleString()
        },
    }
}
</script>
