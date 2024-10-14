import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoPersonAddOutline } from "react-icons/io5";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

// Валидационная схема с помощью Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(50, "Максимум 50 символів")
    .required("Обов'язкове поле"),
  phone: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(50, "Максимум 50 символів")
    .required("Обов'язкове поле"),
});

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.phone,
    };
    onAddContact(newContact);
    actions.resetForm(); // Сброс формы после добавления
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label className={style.label}>
          <span className={style.span}>Name</span>
          <Field
            className={style.field}
            type="text"
            name="name"
            placeholder="Alina Becker"
          />
          <ErrorMessage
            name="name"
            component="div"
            className={style.errorMessage}
          />
        </label>

        <label className={style.label}>
          <span className={style.span}>Number</span>
          <Field
            className={style.field}
            type="text"
            name="phone"
            placeholder="000-00-00"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className={style.errorMessage}
          />
        </label>

        <button className={style.btn} type="submit">
          <IoPersonAddOutline className={style.icon} />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
