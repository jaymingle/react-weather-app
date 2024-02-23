import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {GEO_API_URL, geoApiOptions} from "../../api.js";

const Search = ({onSearchChange}) => {


    const [search, setSearch] = useState(null)

    const loadOptions = inputValue => {

        // try {
        //     const response = await fetch(GEO_API_URL, geoApiOptions);
        //     const result = await response.text();
        //     console.log(result);
        // } catch (error) {
        //     console.error(error);
        // }
        fetch(`${GEO_API_URL}?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map(city => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, `
                        }
                    })
                }
            })
            .catch(error => console.error(error))

    }

    const fetchWeatherHandler = (searchData) => {

        setSearch(searchData)
        onSearchChange(searchData)

    }


    return (
        <div>
            <AsyncPaginate
                placeholder='Search for city!'
                debounceTimeout={700}
                value={search}
                onChange={fetchWeatherHandler}
                loadOptions={loadOptions}

            />
        </div>
    );
};

export default Search;
