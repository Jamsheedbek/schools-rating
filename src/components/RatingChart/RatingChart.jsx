import "./RatingChart.scss";
import React from "react";
import ApexCharts from "apexcharts";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Paper } from "@mui/material";
import Calendar from "../Calendar/Calendar";
import SelectLabels from "../Select/Select";

const RatingChart = () => {
  var options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    series: [
      {
        name: "PRODUCT A",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    ],
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    fill: {
      opacity: 1,
    },
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (document.querySelector("#chart")) {
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      document.querySelector("#chart").innerHTML = "";
      chart.render();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <Paper sx={{ padding: "10px" }}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Umumiy reyting" value="1" />
                <Tab label="Aholi baholash reytingi" value="2" />
              </TabList>
              <Calendar />
            </Box>
            <Box style={{ display: "flex" }}>
              <SelectLabels />
              <SelectLabels />
            </Box>
            <TabPanel value="1">
              <div id="chart"></div>
            </TabPanel>
            <TabPanel value="2">Aholi baholash reytingi</TabPanel>
          </TabContext>
        </Box>
      </Paper>
    </>
  );
};

export default RatingChart;
