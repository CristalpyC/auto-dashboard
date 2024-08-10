"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { getProductData } from "@/actions/get-products-data";
import { createData } from "@/actions/create-data";
import { Data } from "@/interfaces/data";
import { Column } from "@/interfaces/table-column";
import UpdateModal from "./UpdateFormModal";
import { getAuth } from "firebase/auth";
import { DeleteButton } from "./ActionButtons";

const columns: Column[] = [
  { id: "productUrl", label: "Image", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "units",
    label: "Units",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "soldunits",
    label: "Sold units",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "profits",
    label: "Profits",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 170,
    align: "right",
  },
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [carsData, setData] = React.useState<Data[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true); 

  // Function that sent data to state
  async function fetchData() {
    try {
      const tableData = await getProductData();
      const processedData = tableData.map((item) => {
        return {
          ...item,
        };
      });

      localStorage.setItem('carsInfo', JSON.stringify(processedData)); 
      const info = localStorage.getItem('carsInfo');

      if (info) {
        try {
          setData(JSON.parse(info));
        } catch (error) {
          console.log('Error parsing JSON from localStorage:', error);
        }
      }
    } catch (error) {
      console.log("Error fetching data:", error);

    } finally {
      setLoading(false);
    }
  }

  //useEffect hooks: show the info, when it's updated
  React.useEffect(() => {
      fetchData();
    
  }, [carsData]);

  const rows =
  carsData.length > 0
      ? carsData.map((i) =>
          createData(i.productUrl, i.name, i.price, i.units, i.soldunits, i.status, i.id)
        )
      : [];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center mt-11">
            <img 
            src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif" 
            alt="loader" 
            className="w-[20%] lg:w-[10%] md:w-[10%]"
          />
          <p className="text-[5vmin] lg:text-[4vmin] md:text-[4vmin]">Buscando inventario...</p>
        </div>
      ) : (
        <Paper
          sx={{
            width: "100%",
            padding: "1rem",
            backgroundColor: "transparent",
          }}
        >
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{ backgroundColor: "#fafafaea" }}
            >
              <TableBody>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        top: 57,
                        minWidth: column.minWidth,
                        backgroundColor: "#326ec9",
                        color: "white",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.name}
                      >
                        {columns.map((column) => {
                          const value =
                            column.id === "actions" ? (
                              <div className='flex gap-2 justify-end text-white'>
                                  <UpdateModal values={row}/>
                                  <DeleteButton productId={row?.id}/>
                              </div>
                            ) : (
                              row[column.id]
                            );
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === "productUrl" ? (
                                <img
                                  src={value ? value : "no-photopic.jpg"}
                                  alt="Product"
                                  style={{ width: "100px", height: "auto" }}
                                />
                              ) : column.format && typeof value === "number" ? (
                                column.format(value)
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            sx={{ backgroundColor: "white" }}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}
