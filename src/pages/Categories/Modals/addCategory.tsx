import { Box, Button, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCategory, updateCategory } from "redux/Category/actions";
import * as Yup from "yup";
import IntlMessages from "../../../@crema/utility/IntlMessages";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

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
  data?: any;
  activeButton?: any;
  selectedItem?: any;
  //   selectedImage?:any;
}
const AddCategory: FC<FuncProp> = ({
  show,
  onHide,
  activeButton,
  selectedItem,
  onDelete,
  children,
  width,
  data,
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
  const forAction: any = history?.location?.state?.from;

  const [value, setValue] = useState<any>("value");

  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState<any>("");

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const addCategorySchema: any = Yup.object({
    title: Yup.string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed "),
    details: Yup.string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed "),
  });
//   useEffect(() => {
//       if(selectedItem){
//           CategoryFormik.setFieldValue("title", selectedItem.title?selectedItem.title:"");
//       }

//     }, [selectedItem]);
  const CategoryFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: selectedItem.title,
      details: selectedItem.details,
    },
    validationSchema: addCategorySchema,
    onSubmit: async (values, action) => {
      forAction === "edit"
        ? await dispatch(
            updateCategory({    
              data: {
                title: values.title,
                categoryImg: selectedImage,
                details: values.details,
                setReset: action.resetForm,
                setSelectedImage: setSelectedImage,
              },
              history: history,
            })
          )
        : await dispatch(
            addCategory({
              title: values.title,
              categoryImg: selectedImage,
              details: values.details,
              setReset: action.resetForm,
              setSelectedImage: setSelectedImage,
            })
          );
    },
  });
  console.log("CategoryFormik", CategoryFormik);
  console.log("selectedItem <><><>", selectedItem.title);

  return (
    <>
      <Modal
        open={show}
        // onClose={() => setShow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
            <Box
              component="h2"
              sx={{ p: 2, color: "text.primary", fontSize: 24 }}
            >
              <IntlMessages id="common.addCategory" />
            </Box>
            <form onSubmit={CategoryFormik.handleSubmit}>
              <Box>
                <Box>
                  <TextField
                    sx={{ width: "100%", mt: 2 }}
                    id="Category Name"
                    label="Category Name"
                    variant="outlined"
                    name="title"
                    value={CategoryFormik.values && CategoryFormik.values.title}
                    onChange={CategoryFormik.handleChange}
                  />
                  {CategoryFormik.touched.title &&
                  CategoryFormik.errors.title ? (
                    <div className="Namefield" style={{ color: "#dc3545" }}>
                      {CategoryFormik.errors.title}
                    </div>
                  ) : null}
                </Box>
                <Box>
                  <TextField
                    multiline
                    rows={4}
                    style={{
                      display: "flex",
                      //   width: 380,
                      //   height: 90,
                      marginTop: 13,
                      borderRadius: 10,
                    }}
                    id="outlined-basic"
                    placeholder=" Details"
                    // minRows={10}
                    // variant="outlined"
                    name="details"
                    value={
                      CategoryFormik.values && CategoryFormik.values.details
                    }
                    onChange={CategoryFormik.handleChange}
                  />
                  {CategoryFormik.touched.details &&
                  CategoryFormik.errors.details ? (
                    <div className="Namefield" style={{ color: "#dc3545" }}>
                      {CategoryFormik.errors.details}
                    </div>
                  ) : null}
                  <div className="selected" style={{ paddingTop: "15px" }}>
                    <input
                      accept="image/*"
                      type="file"
                      onChange={imageChange}
                    />
                    {selectedImage && (
                      <div
                        style={{
                          height: "100px",
                          width: "130px",

                          marginTop: "10px",
                        }}
                      >
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain",
                          }}
                          src={URL.createObjectURL(selectedImage)}
                          alt="Thumb"
                        />
                      </div>
                    )}
                  </div>
                </Box>
                <Box display="flex" sx={{ ml: 55, mt: 6 }}>
                  <Button variant="contained" type="submit">
                    {activeButton === "edit" ? (
                      <IntlMessages id="admin.update" />
                    ) : (
                      <IntlMessages id="common.addAdmin" />
                    )}
                  </Button>
                  <Button variant="contained" onClick={onHide} sx={{ ml: 4 }}>
                    <IntlMessages id="common.cancel" />
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Grid>
      </Modal>
    </>
  );
};
export default AddCategory;
