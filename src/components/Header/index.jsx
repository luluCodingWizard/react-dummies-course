import styles from "./header.module.css";
const Index = ({ heading }) => {
  return <h1 className={styles.heading}>{heading}</h1>;
};
export default Index;
