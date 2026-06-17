import MainLayout from "@/components/MainLayout/MainLayout";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

import styles from "@/styles/profile.module.scss";

export default function ProfilePage() {
    return (
        <MainLayout>
            <div className={styles.container}>
                <div className={styles.topBar}>
                    <h2>Account Settings</h2>
                </div>

                <ProfileCard />
            </div>
        </MainLayout>
    );
}