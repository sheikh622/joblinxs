import React, { useState, useEffect } from "react";
import { Button, Form } from "@themesberg/react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
//saga
// import { updatetPassword } from "../Redux/auth/actions";

export default ({ showDefault, setShowDefault, categories,setCategories,onHide }) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.Auther);
  const [showDefaultCategory, setShowDefaultCategory] = useState(false);
  const handleClosesCategory = () => setShowDefaultCategory(false);

  const CategorySchema = Yup.object().shape({
    title: Yup.string().trim().required("Category Name is required"),
    details: Yup.string().trim().required("description is required"),
  });

  const formOptions = { resolver: yupResolver(CategorySchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    onHide();
    let arr=[]
    // display form data on success
    arr.push({value:[{ id:"", title: data.title, details:data.details },]})
    setCategories(...arr);
    // let newData = Object.assign(data, { email: login.email });
    // await dispatch(
    //   updatetPassword({
    //     title: newData.title,
    //     details: newData.details,
    //     setShowDefault: setShowDefault,
    //     reset: reset,
    //   })
    // );

  };
  useEffect(() => {
    if (!showDefault) {
      reset();
    }
  }, [showDefault])

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          {...register("title")}
          className={`form-control ${errors.title ? "is-invalid" : ""
            }`}
        />
        <div className="invalid-feedback">
          {errors.title?.message}
        </div>
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          // required
          type="text"
          placeholder="Description"
          {...register("details")}
          className={`form-control ${errors.details ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.details?.message}</div>
      </Form.Group>
      <Form.Group >
        <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
          <Button
            variant="primary"
            
            color="dark"
            size="sm"
            type="submit"
            // onClick={() => setShowDefaultCategory(false)}
          >
            Add Category
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
}