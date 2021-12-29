import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrderBy, getOrderSelect } from "../../reducers/movieReducer";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { setOrderBy } from "../../actions/movieActions";
import "./orderByButton.scss";

/***
 * ButtonComponent will render the buttons which is active in two conditons on load and on click, active status is indicatied with green
 */
function ButtonComponent() {
    const orderBy = useSelector(getOrderBy);
    const orderSelect = useSelector(getOrderSelect);
    const dispatch = useDispatch();

    const changeOrder = (order) => {
        dispatch(setOrderBy(order));
    }

    return (
        <Box className="order-by-button">
            <Box> Order By:</Box>
            {
                !!orderSelect &&
                orderSelect.map((item, index) =>
                    <Button key={index}
                        variant="contained"
                        sx={{ m: 1 }}
                        className={ item.valueToOrderBy === orderBy && "active"}
                        data-testid="order-by"
                        onClick={() => changeOrder(item.valueToOrderBy)}>
                        {item.label}
                    </Button>
                )
            }
        </Box>
    )
}

export default ButtonComponent;