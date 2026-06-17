import styles from "./MainLayout.module.scss";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={styles.wrapper}>{children}</main>;
}