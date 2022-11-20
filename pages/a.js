import { useEffect, useState } from "react";

import { Grid } from "@mui/material";

const NFT = (props) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("/api/data");
    const jsonData = await data.json();
    setImageData(jsonData.data);
    console.info(jsonData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2} alignItems="flex-start"
>
        {imageData ?
          imageData.map((elem) => {
              console.log(elem);
                return <Grid item md={4} lg={3} xs={6} id={elem.id}>
                <div className="a_image_container"  >
                  <img
                    src={elem.src}
                    alt="NFT"
                    className="a_image"
                  />
                  <div className="a_image_layover">
                    <div className="a_image_details">
                        <p>{elem.id}</p>
                        <p>{elem.name}</p>
                    </div>
                  </div>
                </div>
              </Grid>;
          }) :" "}
      </Grid>
    </div>
  );
};

export default NFT;
