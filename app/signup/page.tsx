"use client";

import MainLayout from "@/components/MainLayout/MainLayout";
import styles from "@/styles/signup.module.scss";

import { Formik } from "formik";
import { signupSchema } from "@/src/validations/signupSchema";

import {
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter()

  return (
    <MainLayout>
      <div className={styles.container}>


        <Formik
          initialValues={{
            fullName: "",
            phoneNumber: "",
            email: "",
            password: "",
            companyName: "",
            agency: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            console.log(values);
            router.push('/login')
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              className={styles.formMain}
            >
              <div className={styles.form} >

                <h1>Create your PopX account</h1>
                <TextField
                  fullWidth
                  name="fullName"
                  label="Full Name*"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.fullName &&
                    Boolean(errors.fullName)
                  }
                  helperText={
                    touched.fullName
                      ? errors.fullName
                      : ""
                  }
                />

                <TextField
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number*"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.phoneNumber &&
                    Boolean(errors.phoneNumber)
                  }
                  helperText={
                    touched.phoneNumber
                      ? errors.phoneNumber
                      : ""
                  }
                />

                <TextField
                  fullWidth
                  name="email"
                  label="Email Address*"
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
                  label="Password*"
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

                <TextField
                  fullWidth
                  name="companyName"
                  label="Company Name*"
                  value={values.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.companyName &&
                    Boolean(errors.companyName)
                  }
                  helperText={
                    touched.companyName
                      ? errors.companyName
                      : ""
                  }
                />

                <FormControl>
                  <FormLabel
                    sx={{
                      color: "#1D2226",
                      fontWeight: 500,
                    }}
                  >
                    Are you an Agency?*
                  </FormLabel>

                  <RadioGroup
                    row
                    name="agency"
                    value={values.agency}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />

                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>

                {touched.agency &&
                  errors.agency && (
                    <span className={styles.error}>
                      {errors.agency}
                    </span>
                  )}
              </div>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                sx={{
                  mt: 2,
                  height: 46,
                  backgroundColor: "#6C25FF",
                  textTransform: "none",

                  "&:hover": {
                    backgroundColor: "#6C25FF",
                  },
                }}
              >
                Create Account
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </MainLayout>
  );
}