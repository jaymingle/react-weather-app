import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";

const Search = ({onSearchChange}) => {


    const [search, setSearch] = useState(null)

    const loadOptions = inputValue => {

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
