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
import { DeleteButton } from "./ActionButtons";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/redux/slices/data.slice";
import { setError } from "@/redux/slices/error.slice";
import { setLoading } from "@/redux/slices/loading.slice";
import { setPage } from "@/redux/slices/tablePages.slice";
import { setRowsPerPage } from "@/redux/slices/rowsPage.slice";
import { StateProps } from "@/interfaces/state";
import { useUser } from "@/hooks/useUser";

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
  //Slices
  const page = useSelector((state: StateProps) => state.page);
  const rowsPerPage = useSelector((state: StateProps) => state.rowsPerPage);
  const carsData = useSelector((state: StateProps) => state.carsData);
  const loading = useSelector((state: StateProps) => state.isLoading);
  const error = useSelector((state: StateProps) => state.errorData);

  const safePage = page ?? 0;
  const safeRowsPerPage = rowsPerPage ?? 10;

  const dispatch = useDispatch();
  const userUid = useUser() || "";

  // Function that sent data to state
  async function fetchData() {
    try {
      if (userUid){
        const tableData = await getProductData(userUid);
        const processedData = tableData.map((item) => {
          return {
            ...item,
          };
        });

        localStorage.setItem("carsInfo", JSON.stringify(processedData));
        const info = localStorage.getItem("carsInfo");

        if (info) {
          try {
            const parseInfo = JSON.parse(info);
            dispatch(setData(parseInfo));
          } catch (error) {
            console.log("Error parsing JSON from localStorage:", error);
          }
        }
      }

    } catch (error) {
      dispatch(setError("An error occurred on the server. Please check back later."));

    } finally {
      dispatch(setLoading(false));
    }
}

  //useEffect hooks: show the info, when it's updated
  React.useEffect(() => {
    if (userUid) {
      fetchData();
    }
  }, [userUid, carsData]);
  
  const rows =
    carsData && carsData.length > 0
      ? carsData.map((i: Data) =>
          createData(
            i.productUrl,
            i.name,
            i.price,
            i.units,
            i.soldunits,
            i.status,
            i.id
          )
        )
      : [];

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setRowsPerPage(+event.target.value));
    dispatch(setPage(0));
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
          <p className="text-[5vmin] lg:text-[4vmin] md:text-[4vmin]">
            Buscando inventario...
          </p>
        </div>
      ) : (
        <div>
          {error?.length === 0 ? (
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
                      .slice(
                        safePage * safeRowsPerPage,
                        safePage * safeRowsPerPage + safeRowsPerPage
                      )
                      .map((row: any) => {
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
                                  <div className="flex gap-2 justify-end text-white">
                                    <UpdateModal values={row} />
                                    <DeleteButton productId={row?.id} />
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
                                  ) : column.format &&
                                    typeof value === "number" ? (
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
                rowsPerPage={safeRowsPerPage }
                page={safePage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          ) : (
            <div className="p-5">
              <Alert color="error" sx={{ padding:'2rem' }}>
                {error}
              </Alert>
            </div>
          )}
        </div>
      )}
    </>
  );
}
