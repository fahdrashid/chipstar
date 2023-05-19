import { Box, Button, Card, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import ProgressBar from "./ProgressBar";

const DepositCard = (props: any) => {
  return (
    <Card
      className={styles.linearfour}
      sx={{
        width: 370,
        height: 100,
        background: `linear-gradient(to left, ${props.gradient1}, ${props.gradient2})`,
      }}
    >
      <Box>
        <Button
          sx={{
            "&.Mui-disabled": {
              color: "#c0c0c0",
            },
            backgroundColor: "#032784",
          }}
          className={styles.button}
          variant="contained"
          disabled={props.isDisabled}
          onClick={props.handleSecondModal}
        >
          {props.buttonText}
        </Button>
      </Box>
      <Box>
        <Typography className={styles.innerheading}>
          {props.depositText}
        </Typography>
      </Box>

      <Box>
        <Typography className={styles.innersmallheading}>
          Bonus Amount:{" "}
          <span className={styles.effect}>{props.bonusAmount} </span>
        </Typography>
      </Box>
      <Box>
        <Typography className={styles.bar}>{props.progessValue} %</Typography>

        <ProgressBar pValue={props.progessValue} />
      </Box>
    </Card>
  );
};

export default DepositCard;
