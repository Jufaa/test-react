/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from "react";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { addFavorite } from "@/redux/states/favorite";

export type PeopleTableProps = {};

const PeopleTable: React.FC<PeopleTableProps> = () => {
  const [peopleSelected, setPeopleSelected] = useState<Person[]>([]);

  const dispatch = useDispatch();
  const statePeople = useSelector((store: AppStore) => store.people);
  const favoritePeople = useSelector((store: AppStore) => store.favorites);

  const findPerson = (person: Person) =>
    !!favoritePeople.find((selected) => selected.id === person.id);

  const filterPerson = (person: Person) =>
    favoritePeople.filter((selected) => selected.id !== person.id);

  const handleChange = (person: Person) => {
    const filterP = findPerson(person)
      ? filterPerson(person)
      : [...peopleSelected, person];
    dispatch(addFavorite(filterP));
    setPeopleSelected(filterP);
  };
  const columns = [
    {
      field: "favorite",
      headerName: "",
      sortable: false,
      type: "favorite",
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of happiness",
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  useEffect(() => {
    setPeopleSelected(favoritePeople);
  }, [favoritePeople]);
  {
    return (
      <DataGrid
        columns={columns}
        rows={statePeople}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        getRowId={(row: any) => row.id}
      />
    );
  }
};
export default PeopleTable;
