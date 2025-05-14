import React from "react";
import styles from "@/styles/components/CollaborativeNetwork.module.css";

const CollaborativeNetworkSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Our<br />
          Collaborative<br />
          Network
        </h2>

        <div className={styles.grid}>
          <div className={styles.partnerBox}>
            <img
              src="/image/iic-logo.jpeg"
              alt="IIC logo"
              className={styles.logo}
            />
            <span className={styles.companyName}>IIC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborativeNetworkSection;
