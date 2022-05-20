import { Button, TextField } from "@mui/material";
import React from "react";
const instruction = [
  {
    ADD: {
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(0001), RESET",
    },
    AND:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(0010), RESET",
    },
    MOV:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(L), B(E), RESET",
    },
    MVI:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "PC(E), MAR(E,L)",
      3: "PC(I)",
      4: "",
      5: "",
      6: "A(L), RAM(E), RESET",
    },
    INR:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(0011), RESET",
    },
    DCR:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(0100), RESET",
    },
    CMP:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(0101), RESET",
    },
    CLR:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(0110), RESET",
    },
    CMA:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(0111), RESET",
    },
    SWP:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "B(E), TMP(L)",
      5: "A(E), B(L)",
      6: "A(L), TMP(E), RESET",
    },
    FLP:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(1000), RESET",
    },
    SQR:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(1001), RESET",
    },
    SQT:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(1010), RESET",
    },
    LCM:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(1011), RESET",
    },
    TCA:{
      0: "PC(E), MAR(E,L)",
      1: "PC(I), RAM(E), IR(L)",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "A(E,L), B(E), ALU(1100), RESET",
    } 
    }

    }
    


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
