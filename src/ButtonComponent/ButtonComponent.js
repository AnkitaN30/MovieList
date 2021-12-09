import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrderBy, getOrderSelect } from "../reducers/movieReducer";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { setOrderBy } from "../reducers/movieReducer";

function ButtonComponent() {
    const orderBy = useSelector(getOrderBy);
    const orderSelect = useSelector(getOrderSelect);
    const dispatch = useDispatch();

    const changeOrder = (order) => {
        dispatch(setOrderBy(order));
    }

    return (
        <Box sx={{ display: "flex",justifyContent:"end",alignItems:"center" }}>
            <Box> Order By:</Box>
            {
                !!orderSelect &&
                orderSelect.map((item, index) =>
                    <Button key={index} variant="contained" sx={{ m: 1 }}
                        disabled={orderBy === item.valueToOrderBy} onClick={() => changeOrder(item.valueToOrderBy)}>
                        {item.label}
                    </Button>
                )               
            }
        </Box>
    )
}

export default ButtonComponent;