import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Card,
  CardContent,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "sticky",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20%",
  height: "37%",
  bgcolor: "black",
  // border: "2px solid #000",
  boxShadow: 24,
};


export default function DepositModal(props: any) {

  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <Modal
        sx={{ height: "100%" }}
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  color: "white",
                  marginLeft: "25px",
                }}
              >
                Select Amount
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  color: "white",
                  marginLeft: "25px",
                }}
              >
                Next step: Payment Method
              </Typography>
            </Box>
            <Box sx={{ marginRight: "40px", marginTop: "5px" }}>
              <CloseIcon
                sx={{
                  position: "absolute",
                  color: "silver",
                  width: "20px",
                  height: "20px",
                }}
                onClick={props.alternativeModelOpen}
              />
            </Box>
          </Box>

          <Card
            sx={{
              backgroundColor: "#212121",
              marginTop: "20px",
              height: "82%",
            }}
          >
            <CardContent
              sx={{
                width: "90%",
                height: "80%",
                padding: 1,
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  height: "22%",
                  width: "98%",
                  border: "1px solid white",
                  display: "flex",
                  justifyContent: "space-between",
                  borderRadius: "8px",
                }}
              >
                <Input
                  sx={{
                    input: { marginLeft: "20px", fontSize: "15px" },
                    borderRadius: 1,
                    color: "white",
                    width: "40%",
                    height: "90%",
                    marginLeft: "10px",
                    IconComponent: { fill: "white" },
                  }}
                  onChange={(e) => {
                    props.setDepositAmount(Number(e.target.value));
                  }}
                  disableUnderline
                  id="basic-input"
                  type="tel"
                />

                <Select
                  sx={{
                    height: "70%",
                    width: "30%",
                    color: "white",
                    fontSize: "9px",
                    marginRight: "10px",
                    marginTop: "5px",
                    border: "1px solid silver",
                    borderRadius: "8px",
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>EUR</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Box>

              <Button
                sx={{
                  marginLeft: "10px",
                  marginTop: "20px",
                  height: "20%",
                  width: "90%",
                  backgroundColor: "#ad0f0a",
                  borderRadius: "10px",
                }}
                variant="contained"
                onClick={props.alternativeModelOpen}
              >
                DEPOSIT NOW
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
