import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./datatable.scss";

const Datatable = ({columns}) => {
  const location = useLocation();
  
  const path = location.pathname.split("/")[1];

  const url = `http://localhost:5000/api/${path}`;
  
  const [list, setList] = useState();
console.log(list)
  const { data, loading, error } = useFetch(url, {
    withCredentials: true,
  });

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${_id}`,{
        withCredentials: true,
      });
    } catch (error) {}
    setList(list.filter((item) => item._id !== _id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      {list? <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      /> : <p>loading...</p>}
    </div>
  );
};

export default Datatable;
