"use client";

import MainLayout from "@/components/MainLayout/MainLayout";
import styles from "@/styles/login.module.scss";

import { Formik } from "formik";
import { loginSchema } from "@/src/validations/loginSchema";

import {
  Button,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter()

  return (
    <MainLayout>
      <div className={styles.formContainer}>
        <h1>Signin to your PopX account</h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log(values);
            router.replace('/profile')
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <TextField
                fullWidth
                name="email"
                label="Email Address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.email &&
                  Boolean(errors.email)
                }
                helperText={
                  touched.email
                    ? errors.email
                    : ""
                }
              />

              <TextField
                fullWidth
                type="password"
                name="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.password &&
                  Boolean(errors.password)
                }
                helperText={
                  touched.password
                    ? errors.password
                    : ""
                }
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
              >
                Login
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </MainLayout>
  );
}