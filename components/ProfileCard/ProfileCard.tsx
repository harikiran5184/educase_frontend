"use client"

import Image from "next/image";
import { CameraFilled } from "@ant-design/icons";

import styles from "./ProfileCard.module.scss";
import Ellipse from '@/src/assests/Ellipse_114@2x.png'
export default function ProfileCard() {
    return (
        <div className={styles.profileSection}>
            <div className={styles.profileHeader}>
                <div className={styles.avatarWrapper}>
                    <Image
                        src={Ellipse}
                        alt="Profile"
                        width={76}
                        height={76}
                        className={styles.avatar}
                    />

                    <div className={styles.cameraIcon}>
                        <CameraFilled />
                    </div>
                </div>

                <div className={styles.userInfo}>
                    <h3>Marry Doe</h3>
                    <p>Marry@gmail.com</p>
                </div>
            </div>

            <p className={styles.description}>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
                Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
                Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>

            <div className={styles.divider}></div>
        </div>
    );
}