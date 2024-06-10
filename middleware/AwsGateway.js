
const fetchAirportsByCity = async (city) => {
    try {
        const response = await fetch(`https://a32isr3851.execute-api.us-east-2.amazonaws.com/dev/airports?city=${city}`, {
            method: 'GET',
        });

        const data = response.data;
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchAirportsByCity()
