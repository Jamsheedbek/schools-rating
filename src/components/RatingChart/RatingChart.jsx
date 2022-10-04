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

const Regions = [
  "Andijon",
  "Namangan",
  "Farg'ona",
  "Toshkent",
  "Buxoro",
  "Jizzax",
  "Xorazm",
  "Navoiy",
  "Qashqadaryo",
  "Samarqand",
  "Qashqadaryo",
  "Surhondaryo",
];

const medals = [
  2336, 1440, 1680, 2022, 1998, 1879, 2012, 2164, 2046, 1978, 2412, 2564,
];

const RatingChart = () => {
  const renderChart = (series, categories) => {
    const max = Math.max(...series);
    const colors = [
      function ({ value }) {
        if (value === max) {
          return "#57bb8a";
        } else if (value > max * 0.95 && value <= max) {
          return "#63b682";
        } else if (value > max * 0.9 && value <= max * 0.95) {
          return "73b87e";
        } else if (value > max * 0.85 && value <= max * 0.9) {
          return "#84bb7b";
        } else if (value > max * 0.8 && value <= max * 0.85) {
          return "#94bd77";
        } else if (value > max * 0.75 && value <= max * 0.8) {
          return "#a4c073";
        } else if (value > max * 0.7 && value <= max * 0.75) {
          return "#b0be6e";
        } else if (value > max * 0.65 && value <= max * 0.7) {
          return "#c4c56d";
        } else if (value > max * 0.6 && value <= max * 0.65) {
          return "#d4c86a";
        } else if (value > max * 0.55 && value <= max * 0.6) {
          return "#e2c965";
        } else if (value > max * 0.5 && value <= max * 0.55) {
          return "#f5ce62";
        } else if (value > max * 0.45 && value <= max * 0.5) {
          return "#f3c563";
        } else if (value > max * 0.4 && value <= max * 0.45) {
          return "#e9b861";
        } else if (value > max * 0.35 && value <= max * 0.4) {
          return "#e6ad61";
        } else if (value > max * 0.3 && value <= max * 0.35) {
          return "#ecac67";
        } else if (value > max * 0.25 && value <= max * 0.3) {
          return "#e9a268";
        } else if (value > max * 0.2 && value <= max * 0.25) {
          return "#e79a69";
        } else if (value > max * 0.15 && value <= max * 0.2) {
          return "#e5926b";
        } else if (value > max * 0.1 && value <= max * 0.15) {
          return "#e2886c";
        } else if (value > max * 0.05 && value <= max * 0.1) {
          return "#e0816d";
        } else if (value <= max * 0.05) {
          return "#dd776e";
        }
      },
    ];
    var options = {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      colors,
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      series: [
        {
          name: "PRODUCT A",
          data: series.map((e) => e),
        },
      ],
      xaxis: {
        categories,
      },
      fill: {
        opacity: 1,
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    document.querySelector("#chart").innerHTML = "";
    chart.render();
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (document.querySelector("#chart")) {
      renderChart(medals, Regions);
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
              <SelectLabels
                label="Region"
                about="Hududni tanlang"
                options={[
                  { name: "Viloyatlar boyicha", value: "region" },

                  { name: "Tumanlar bo'yicha", value: "district" },

                  { name: "Maktablar bo'yicha", value: "schools" },
                ]}
              />
              <SelectLabels
                label="Rating"
                about="Reytingni tanlang"
                options={[
                  {
                    name: "Jami medallar bo'yicha",
                    value: "all_medals",
                  },
                  {
                    name: "Oltin medallar bo'yicha",
                    value: "gold_medals",
                  },
                  {
                    name: "Kumush medallar bo'yicha",
                    value: "silver_medals",
                  },
                  {
                    name: "Bronza medallar bo'yicha",
                    value: "bronze_medals",
                  },
                ]}
              />
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
