import { Formik, Form, Field } from "formik";
import { IoPersonAddOutline } from "react-icons/io5";
import style from "./ContactForm.module.css";

const ContactForm = () => {
  const intialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik initialValues={intialValues} onSubmit={handleSubmit}>
      <Form className={style.form}>
        <label className={style.label}>
          <span className={style.span}>Name</span>
          <Field
            className={style.field}
            type="text"
            name="name"
            placeholder="Alina Becker"
          />
        </label>
        <label className={style.label}>
          <span className={style.span}>Number</span>
          <Field
            className={style.field}
            type="text"
            name="phone"
            placeholder="+38 000 000 00 00"
          />
        </label>
        <button className={style.bth} type="submit">
          <IoPersonAddOutline className={style.icon} />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
