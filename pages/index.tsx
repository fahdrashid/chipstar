import { Box } from "@mui/system";
import MainComponent from "../components/MainComponent";
import styles from "./styles.module.scss";
import DepositBonus from "../components/DepositBonus";

export default function Home() {
  return (
    <>
      <Box className={styles.fullPage}>
        <Box className={styles.container}>
          <MainComponent />
        </Box>
      </Box>
    </>
  );
}
