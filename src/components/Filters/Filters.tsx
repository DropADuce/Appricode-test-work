import React, {FC} from 'react'
import './style.scss'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FilterTypes} from "../../models/types";

interface FiltersProps {
    filter: string,
    setFilter: (filterValue: string) => void
}

const Filters: FC<FiltersProps> = ({filter, setFilter}) => {
    return (
        <div className="filters">
            <FormControl fullWidth>
                <InputLabel id="filter-label">Фильтры</InputLabel>
                <Select
                    labelId="filters-label"
                    id="filters"
                    value={filter}
                    label="Фильтры"
                    onChange={(e: SelectChangeEvent) => setFilter(e.target.value)}
                >
                    <MenuItem value={FilterTypes.COMPLETED}>Заверешенные</MenuItem>
                    <MenuItem value={FilterTypes.UNCOMPLETED}>Не завершенные</MenuItem>
                    <MenuItem value={FilterTypes.ALL}>Все</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Filters;