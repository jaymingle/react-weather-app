import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";

const Search = () => {

    const [search, setSearch] = useState(null)

    return (
        <div>
            <AsyncPaginate
                placeholder='Search for city!'
                debounceTimeout={700}
                value={search}
            />
        </div>
    );
};

export default Search;
