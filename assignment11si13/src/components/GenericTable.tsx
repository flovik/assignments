import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableBody, TableContainer, TableHead, TableRow, Pagination, Select, Stack, MenuItem, TextField, TableSortLabel, Grid, InputAdornment } from '@mui/material';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';

/** Helpers */

// helper to get an array containing the object values with
// the correct type inferred.
function objectValues<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

type sortColumn = {
  name: string;
  sort: string;
  direction: string[];
}

type filter = {
  name: string;
  result?: string;
}

interface Props {
  simpleColumns: string[];
  sortColumns?: sortColumn[];
  filterField: filter[];
  getAll: (params: object) => any;
  items: object[];
  sizeTable: number;
}

export default function GenericTable({simpleColumns, sortColumns, filterField, getAll, items, sizeTable}: Props) {
  const [data, setData] = useState<object[]>(items);

  const [searchData, setSearchData] = useState<filter[]>(filterField);
  const [sortData, setSortData] = useState<sortColumn[] | undefined>(sortColumns);
  
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const getRequestParams = (searchData : filter[], page, pageSize, sortData: sortColumn[] | undefined) => {
    let params = {};
    if (searchData) {
      for (let index = 0; index < searchData.length; index++) {
        const element = searchData[index];
        if(element.result) {
          params[element.name] = element.result
        }
      }
    }
    if (page) {
      params["PageNumber"] = page;
    }
    if (pageSize) {
      params["PageSize"] = pageSize;
    }
    if(sortData){
      params["SortBy"] = sortData[0].sort;
    }
    return params;
  };

  useEffect(() => {
    const params = getRequestParams(searchData, page, pageSize, sortData);
    getAll(params)
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [page, pageSize, getAll, searchData, sortData]);

  const handleSort = (index: number) => () => {
    var newArr;
    if(sortData){
      newArr = [...sortData];
    }
    else return;

    newArr[index].sort === newArr[index].direction[0] 
    ? newArr[index].sort = newArr[index].direction[1]
    : newArr[index].sort = newArr[index].direction[0];
    setSortData(newArr);
  }

  const handleFilter = name => (e) => {
    let newArr = [...searchData]; //...old array
    let index = newArr.findIndex(e => e.name === name)
    if(index !== 1){
      newArr[index].result = e.target.value;
    }
    setSearchData(newArr);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  return (
    <Grid>
      {filterField.map((field) => (
        <TextField
          id="standard-basic"
          label={field.name + " filter"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            mt: 1,
            mb: 2,
            width: 600,
          }}
          onChange={handleFilter(field.name)}
        />
      ))}
      <TableContainer component={Paper}>
        <Table sx={{ width: sizeTable }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {sortColumns?.map((columnName, i) => (
                <TableCell align="center">
                  {columnName.name}
                  <TableSortLabel
                    direction={
                      columnName.sort === columnName.direction[0] ? "asc" : "desc"
                    }
                    onClick={handleSort(i)}
                  />
                </TableCell>
              ))}
              {simpleColumns.map((columnName) => (
                <TableCell align="center">{columnName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
              >
              {objectValues(item).map((entry) => 
              (
                <TableCell align="center">
                  {entry}
                </TableCell>
              ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mt: 2,
        }}
      >
        <Pagination
          sx={{
            mt: 1,
          }}
          count={10}
          size="small"
          color="primary"
          showFirstButton
          showLastButton
          variant="outlined"
          page={page}
          onChange={handlePageChange}
        />

        <Select
          size="small"
          value={pageSize}
          onChange={handlePageSizeChange}
          label={pageSize}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </Stack>
    </Grid>
  );
}