import { Button, TextField } from "@mui/material";
import React from "react";
const instruction = [
  {
    name: "ADD",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0001), RESET",
  },
  {
    name: "AND",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0010), RESET",
  },
  {
    name: "MOV",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(L), B(E), RESET",
  },
  {
    name: "MVI",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2: PC(E), MAR(E,L)",
    3: "T3: PC(I)",
    4: "T4:",
    5: "T5:",
    6: "T6: A(L), RAM(E), RESET",
  },
  {
    name: "INR",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5: A(E,L), B(E), ALU(0100), RESET",
    6: "T6: A(E,L), B(E), ALU(0011), RESET",
  },
  {
    name: "DCR",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0100), RESET",
  },
  {
    name: "CMP",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0101), RESET",
  },
  {
    name: "CLR",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0110), RESET",
  },
  {
    name: "CMA",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(0111), RESET",
  },
  {
    name: "SWP",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4: B(E), TMP(L)",
    5: "T5: A(E), B(L)",
    6: "T6: A(L), TMP(E), RESET",
  },
  {
    name: "FLP",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(1000), RESET",
  },
  {
    name: "SQR",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(1001), RESET",
  },
  {
    name: "SQT",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(1010), RESET",
  },
  {
    name: "LCM",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(1011), RESET",
  },
  {
    name: "TCA",
    0: "T0: PC(E), MAR(E,L)",
    1: "T1: PC(I), RAM(E), IR(L)",
    2: "T2:",
    3: "T3:",
    4: "T4:",
    5: "T5:",
    6: "T6: A(E,L), B(E), ALU(1100), RESET",
  },
];
const Image = () => {
  const [code, setCode] = React.useState("");
  const [resultCode, setResultCode] = React.useState([]);

  React.useEffect(() => {
    console.log(resultCode);
    // console.log(resultCode[0].ins);
  }, [resultCode]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "50px",
            width: "25%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              // margin: "10px",
              // padding: "10px",
              // border: "1px solid black",
            }}
          >
            <TextField
              id="outlined-basic"
              label="A"
              variant="outlined"
              style={{
                margin: "10px",
                width: "50%",
              }}
            />
            <TextField
              id="outlined-basic"
              label="B"
              variant="outlined"
              style={{
                margin: "10px",
                width: "50%",
              }}
            />
          </div>
          <TextField
            id="outlined-multiline"
            label="Code Area"
            variant="outlined"
            multiline
            rows={12}
            value={code}
            InputLabelProps={{ style: { fontSize: 20 } }}
            onChange={(e) => {
              setCode(e.target.value);
              const result = e.target.value.split("\n");
              result.map((item, index) => {
                const resultItem = item.split(" ");
                resultCode.ins = resultItem[0];
                // setResultCode;
                // resultCode.=resultItem[1];
                // return null;
              });
              setResultCode(e.target.value.split("\n"));
            }}
          />
          <Button
            variant="contained"
            color="primary"
            aria-controls="simple-menu"
            aria-haspopup="true"
            style={{
              width: "50%",
              marginLeft: "25%",
              marginTop: "20px",
              backgroundColor: "teal",
            }}
          >
            Load
          </Button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", width: "25%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              // margin: "10px",
              // padding: "10px",
              // border: "1px solid black",
            }}
          >
            <TextField
              id="outlined-basic"
              label="A"
              disabled
              variant="outlined"
              style={{
                margin: "10px",
                width: "50%",
              }}
            />
            <TextField
              id="outlined-basic"
              label="B"
              disabled
              variant="outlined"
              style={{
                margin: "10px",
                width: "50%",
              }}
            />
          </div>
          <TextField
            id="outlined-multiline"
            label="Output Clock Cycles"
            disabled
            variant="outlined"
            multiline
            rows={12}
            InputLabelProps={{ style: { fontSize: 20 } }}
          />
          <Button
            variant="contained"
            color="primary"
            aria-controls="simple-menu"
            aria-haspopup="true"
            style={{
              width: "50%",
              marginLeft: "25%",
              marginTop: "20px",
              backgroundColor: "teal",
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Image;
