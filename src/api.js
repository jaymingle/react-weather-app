export const GEO_API_URL= 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoApiOptions= {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '35dd0f30bfmshda5176cb8edb13bp11c2c5jsne40364b929d9',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

try {
    const response = await fetch(GEO_API_URL, geoApiOptions);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}