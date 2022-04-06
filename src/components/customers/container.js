import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Container() {
  return (
    <div className="tablemain">
      <div className="table-sidemenu"></div>
      <div className="table-data-area">
        <div>
          <div className="customers-contained">
            <Card
              sx={{ maxWidth: 345 }}
              style={{
                background: "black",
                borderRadius: "1.2rem",
                width: "100%",
                boxShadow: "3px 4px 10px 2px grey",
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{
                      color: "white",
                      fontSize: "0.8rem",
                      fontFamily: "montserrat",
                    }}
                  >
                    TOTAL REVENUE
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: "white",
                      fontSize: "2rem",
                      fontFamily: "montserrat",
                    }}
                  >
                    $ 1,200.00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{ maxWidth: 345 }}
              style={{
                borderRadius: "1.2rem",
                width: "100%",
                boxShadow: "0px 4px 10px -4px grey",
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    Number 1
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ fontSize: "2.2rem", fontWeight: "bold" }}
                  >
                    # 100
                  </Typography>
                  <hr />
                  <div className="revenue-display">
                    <Typography
                      variant="body2"
                      style={{ fontFamily: "montserrat", fontWeight: "bold" }}
                    >
                      EST.REVENUE
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: "bold", fontFamily: "montserrat" }}
                    >
                      $1,200.00
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{ maxWidth: 345 }}
              style={{
                borderRadius: "1.2rem",
                width: "100%",
                boxShadow: "0px 4px 10px -4px grey",
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    Number 1
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ fontSize: "2.2rem", fontWeight: "bold" }}
                  >
                    # 100
                  </Typography>
                  <hr />
                  <div className="revenue-display">
                    <Typography
                      variant="body2"
                      style={{ fontFamily: "montserrat", fontWeight: "bold" }}
                    >
                      EST.REVENUE
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: "bold", fontFamily: "montserrat" }}
                    >
                      $1,200.00
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{ maxWidth: 345 }}
              style={{
                borderRadius: "1.2rem",
                width: "100%",
                boxShadow: "0px 4px 10px -4px grey",
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    Number 1
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ fontSize: "2.2rem", fontWeight: "bold" }}
                  >
                    # 100
                  </Typography>
                  <hr />
                  <div className="revenue-display">
                    <Typography
                      variant="body2"
                      style={{ fontFamily: "montserrat", fontWeight: "bold" }}
                    >
                      EST.REVENUE
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: "bold", fontFamily: "montserrat" }}
                    >
                      $1,200.00
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
