"use client";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

import MainLayout from "@/components/MainLayout/MainLayout";
import styles from "@/styles/landing.module.scss";

export default function Home() {
  const router = useRouter();

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Welcome to PopX</h1>

          <div>
            <p className={styles.lowerP} >Lorem ipsum dolor sit amet,</p>
            <p className={styles.lowerP} >consectetur adipiscing elit.</p>
          </div>

          <div className={styles.buttonsContainer} >
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={() => router.push("/signup")}
              sx={{
                mt: 2,
                height: 46,
                backgroundColor: "#6C25FF",
                textTransform: "none",
                width: { md: "47%" }
              }}
            >
              Create Account
            </Button>

            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={() => router.push("/login")}
              sx={{
                mt: 2,
                height: 46,
                backgroundColor: "#CEBAFB",
                color: "#1D2226",
                textTransform: "none",

                "&:hover": {
                  backgroundColor: "#CEBAFB",
                },
                width: { md: "47%" }

              }}
            >
              Already Registered? Login
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}