import { FC, useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Link, TableContainer } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import IntlMessages from "../../../@crema/utility/IntlMessages";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
// import { getNotification, sendNotification, changeNotificationActivePage } from "../../redux/notificationManagement/actions";
interface FuncProp {
    className?: string;
    show?: any;
    onHide?: any;
    onDelete?: any;
    Header?: any;
    size?: any;
    scrollable?: any;
    width?: number;
    id?: any;
    page?: any;
    search?: any;
}
const AddCategory: FC<FuncProp> = ({
    show,
    onHide,
    onDelete,
    children,
    width,
    className,
    Header,
    size,
    scrollable,
    id,
    page,
    search,
}) => {
    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { lg: width, xs: 400 },
        bgcolor: "background.paper",
        border: "2px solid gray",
        borderRadius: "10px",
        boxShadow: 24,
        p: 4,
    };
    const dispatch = useDispatch();
    const history: any = useHistory();
    const {
        location: { state },
    } = history;
    const item: any = history?.location?.state?.item;
    // const NotificationList = useSelector((state: any) => state?.Notification?.NotificationList);
    // const [search, setSearch] = useState<string>("");
    const [value, setValue] = useState<any>("value");
    // const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    // const [show, setShow] = useState(false);
    const [UserName, setUserName] = useState("");
    const [notification, setNotification] = useState("");
    const addCategorySchema: any = Yup.object({
        UserName: Yup.string().
            required("Please enter the required field")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed "),
        Email: Yup.string()
            .required("Please enter the required field")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed "),
    });
    const CategoryFormik = useFormik({
        initialValues: {
            UserName: "",
            Email: "",
        },
        validationSchema: addCategorySchema,
        onSubmit: async (values, { resetForm }) => {
            console.log("values===", values)
            // dispatch(sendNotification({
            //   data: {
            //     UserName: values.UserName,
            //     notification: values.notification,
            //   }, postNotificationAfter: () => { resetForm(); setShow(false) }
            // }));
        },
    });
    const [selectedImage, setSelectedImage] = useState();

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {

    };
    return (
        <>
            <Modal
                open={show}
                // onClose={() => setShow(false)}
                aria-labelledby="modal-modal-UserName"
                aria-describedby="modal-modal-Email"
            >
                <Grid item lg={3} sm={6} xs={9} mb={6} ml={2}>
                    <Box
                        sx={{
                            position: "absolute" as "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: { lg: 450, xs: 350 },
                            bgcolor: "white",
                            border: "2px solid gray",
                            borderRadius: "10px",
                            boxShadow: 24,
                            p: 6,
                        }}
                    >
                        <Box component="h2" sx={{ p: 2, color: "text.primary", fontSize: 24 }}>
                            <IntlMessages id="common.profile" />
                        </Box>
                        <Box
                            sx={{
                                // "& .MuiTextField-root": { ml: 30, width: "40ch" },
                            }}
                        >
                            <Box>
                                <TextField
                                    sx={{ width: "95%", mt: 2, }}
                                    id="outlined-basic"
                                    label="UserName"
                                    variant="outlined"
                                    name="UserName"
                                    value={CategoryFormik.values && CategoryFormik.values.UserName}
                                    onChange={CategoryFormik.handleChange}
                                />
                                {CategoryFormik.touched.UserName && CategoryFormik.errors.UserName ? (
                                    <div className="Namefield" style={{ color: "#dc3545" }}>
                                        {CategoryFormik.errors.UserName}
                                    </div>
                                ) : null}
                            </Box>
                            <Box>
                                <TextField
                                    style={{ display: "flex", width: 380, height: 90, marginTop: 13, borderRadius: 10 }}
                                    id="outlined-basic"
                                    placeholder="  Email"
                                    minRows={10}
                                    // variant="outlined"
                                    name="Email"
                                    value={CategoryFormik.values && CategoryFormik.values.Email}
                                    onChange={CategoryFormik.handleChange}
                                />
                                {CategoryFormik.touched.Email && CategoryFormik.errors.Email ? (
                                    <div className="Namefield" style={{ color: "#dc3545" }}>
                                        {CategoryFormik.errors.Email}
                                    </div>

                                ) : null}
                            </Box>
                            <Box display="flex" sx={{ ml: 55, mt: 6 }}>
                                <Button variant="contained" type="submit"
                                    onClick={() => {
                                        onHide()
                                        onDelete()
                                    }}
                                >
                                    <IntlMessages id="common.add" />
                                </Button>
                                <Button variant="contained" onClick={onHide} sx={{ ml: 4 }}>
                                    <IntlMessages id="common.cancel" />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Modal>
        </>
    );
};
export default AddCategory;