import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import rocket from "../public/rocket-3424.svg";
import money from "../public/money-with-wings-svgrepo-com.svg";
import gift from "../public/yellow-gift-box-11402.svg";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestoreIcon from "@mui/icons-material/Restore";
import styles from "./styles.module.scss";
import DepositBonus from "./DepositBonus";
import { useState } from "react";
import DepositModal from "./DepositModal";

const mainComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState<boolean>(false);
  const handleOpen1 = () => {
    setOpen(false);
    setOpen1(true);
  };

  const alternativeModelOpen = () => {
    setOpen1(false);
    setOpen(true);
  };

  const [depositAmount, setDepositAmount] = useState<number>(1000);

  const handleClose1 = () => setOpen1(false);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            padding: 3,
            width: 500,
            color: "black",
            bgcolor: "black",
            justifyContent: "space-between",
          }}
        >
          <Card
            sx={{ width: 200, height: 90, display: "flex" }}
            variant="outlined"
            className={styles.linear}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                RAKE
              </Typography>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                BACK
              </Typography>
            </CardContent>
            <CardContent>
              <Image width={50} height={50} src={rocket} alt={""} />
            </CardContent>
          </Card>

          <Card
            sx={{ width: 200, height: 90, display: "flex" }}
            className={styles.linearsecond}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                CASH
              </Typography>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                BACK
              </Typography>
            </CardContent>
            <CardContent>
              <Image width={55} height={55} src={money} alt={""} />
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ padding: 3, width: 500, color: "black", bgcolor: "black" }}>
          <Card
            sx={{
              width: 500,
              height: 90,
              display: "flex",
              justifyContent: "space-between",
            }}
            className={styles.linearthird}
            onClick={handleOpen}
          >
            <CardContent sx={{ display: "flex", marginTop: "15px" }}>
              <Typography
                sx={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                DEPOSIT
              </Typography>
              <Typography
                sx={{ fontSize: 20, color: "yellow", marginLeft: "10px" }}
              >
                BONUS
              </Typography>
            </CardContent>
            <CardContent>
              <Image width={55} height={55} src={gift} alt={""} />
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ width: 548, bgcolor: "black" }}>
          <Card sx={{ bgcolor: "black" }}>
            <CardContent sx={{ display: "flex" }}>
              <FavoriteIcon sx={{ color: "darkgrey" }} />
              <Typography
                sx={{ fontSize: 17, color: "grey", marginLeft: "10px" }}
              >
                Favourites
              </Typography>
            </CardContent>
            <CardContent sx={{ display: "flex" }}>
              <RestoreIcon sx={{ color: "darkgrey" }} />
              <Typography
                sx={{ fontSize: 17, color: "grey", marginLeft: "10px" }}
              >
                Recent
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box>
        <DepositBonus
          depositAmount={depositAmount}
          open={open}
          handleClose={handleClose}
          handleSecondModal={handleOpen1}
        />
      </Box>

      <Box>
        <DepositModal
          setDepositAmount={setDepositAmount}
          alternativeModelOpen={alternativeModelOpen}
          open={open1}
        />
      </Box>
    </>
  );
};

export default mainComponent;
