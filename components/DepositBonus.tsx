import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, CardContent } from "@mui/material";
import styles from "./styles.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import DepositCard from "./DepositCard";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  justifyContent: "center",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "transparent",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function BasicModal(props: any) {
  const [bonusInfo, setBonusInfo] = useState(true);

  return (
    <div>
      <Box sx={{ height: "900px" }}>
        <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Card
              sx={{
                position: "fixed",
                width: 459,
                height: "90%",
                bgcolor: "#151617",
                borderRadius: "20px",
              }}
            >
              <CloseIcon
                sx={{
                  position: "absolute",
                  color: "silver",
                  width: "25px",
                  height: "25px",
                  marginLeft: "400px",
                  marginTop: "43px",
                  marginRight: "45px",
                }}
                onClick={props.handleClose}
              />
              {bonusInfo ? (
                <Box>
                  <Typography className={styles.heading}>
                    {" "}
                    Deposit Bonus
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ marginLeft: "20px" }}>
                  <ArrowBackIosNewIcon
                    sx={{
                      position: "absolute",
                      color: "silver",
                      width: "25px",
                      height: "25px",
                      marginLeft: "3px",
                      marginTop: "45px",
                      marginRight: "45px",
                    }}
                    onClick={() => {
                      setBonusInfo(true);
                    }}
                  />

                  <Typography className={styles.heading}>
                    {" "}
                    Deposit Bonus
                  </Typography>
                </Box>
              )}

              {bonusInfo && (
                <>
                  <Box>
                    <Typography
                      className={styles.smallheading}
                      onClick={() => {
                        setBonusInfo(false);
                      }}
                    >
                      Details {">"}
                    </Typography>
                  </Box>
                  <Box
                    className={styles.blur}
                    sx={{ height: 50, width: 90 }}
                  ></Box>

                  <Box>
                    <DepositCard
                      depositText="1st deposit"
                      bonusAmount="$700.00 / $1800.00"
                      progessValue={31}
                      gradient1="#924FE7"
                      gradient2="#6725BB"
                      buttonText="CLAIM"
                      btnColor="#032784"
                      isDisabled={true}
                    />
                  </Box>

                  <Box>
                    <DepositCard
                      depositText="2nd deposit"
                      bonusAmount={
                        `$` + `${props.depositAmount}` + ` /$4100.00`
                      }
                      progessValue={(
                        (props.depositAmount / 4100) *
                        100
                      ).toFixed(2)}
                      gradient1="#5681EE"
                      gradient2="#163993"
                      buttonText="DEPOSIT"
                      btnColor="#032784"
                      isDisabled={false}
                      handleSecondModal={props.handleSecondModal}
                    />
                  </Box>

                  <Box sx={{ opacity: 0.5 }}>
                    <DepositCard
                      depositText="3rd deposit"
                      bonusAmount="$0.00 / $0.00"
                      progessValue={0}
                      gradient1="#1DC57C"
                      gradient2="#145934"
                      buttonText="DEPOSIT"
                      btnColor="#032784"
                      isDisabled={true}
                    />
                  </Box>

                  <Box sx={{ opacity: 0.5 }}>
                    <DepositCard
                      depositText="4th deposit"
                      bonusAmount="$0.00 / $0.00"
                      progessValue={0}
                      gradient1="#F33A3D"
                      gradient2="#AA0508"
                      buttonText="DEPOSIT"
                      btnColor="#032784"
                      isDisabled={true}
                    />
                  </Box>
                </>
              )}

              {bonusInfo === false && (
                <>
                  <Card sx={{ marginTop: "80px", marginLeft: "10px" }}>
                    <CardContent className={styles.para}>
                      <p>
                        Up to 270% Guaranteed Welcome Bonus With Your First 4
                        Deposits | No Betting Limits, Wagering with deposit
                        Funds!
                      </p>

                      <ul className={styles.list}>
                        <li>
                          1st deposit max. $900 up to 200% real money bonus
                        </li>
                        <li>
                          2nd deposit max. $2.100 up to 210%real money bonus
                        </li>
                        <li>
                          3rd deposit max. $4.300 up to 220% real money bonus
                        </li>
                        <li>
                          4th deposit max. $7.700 up to 270% real money bonus
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card sx={{ marginTop: "170px", marginLeft: "10px" }}>
                    <CardContent className={styles.list}>
                      <p>
                        The Bonus money is guaranteed to be transferred as real
                        money after the wagering requirement is met. Deposit $30
                        or more for each stage to claim. <br /> <br />
                        Wagering with deposit funds only, multiple deposits are
                        allowed. No bet limits. Bonus percentage and max.
                        deposit amount increases after each of the first 4
                        deposits, max. $15.000. <br /> <br />
                        The sum of the first 4 deposits is the base for the
                        total welcome bonus amount. Wager the sum to receive the
                        accrued bonus in cash with no extra conditions attached.
                        Unlimited cash deposits are allowed to complete the
                        wagering requirement.
                        <br /> <br />
                        The deposit balance and any winnings from your deposits
                        can be withdrawn at any time after your deposits have
                        been wagered at least once (wager x1). Bonus stays
                        active even once a withdrawal is submitted.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}
            </Card>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}
