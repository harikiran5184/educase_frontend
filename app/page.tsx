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

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

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
                width: { md: "49%" }
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
                width: { md: "49%" }

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