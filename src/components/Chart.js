import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useMemo } from "react";
import { generateRandomIntegerInRange as randomNumber } from "../utils";
import HighchartsExporting from "highcharts/modules/exporting";
HighchartsExporting(Highcharts);

const getOptions = (fullScreen = false) => ({
  title: {
    text: "",
  },
  chart: {
    height: fullScreen ? "40%" : "300px",
  },
  yAxis: [
    {
      title: {
        text: null,
      },
    },
  ],
  series: [
    {
      dataLabels: {
        enabled: true,
      },
      data: [randomNumber(), randomNumber(), randomNumber()],
    },
  ],
  exporting: {
    // menuItemDefinitions: {
    //   // Custom definition
    //   label: {
    //     onclick: function () {
    //       this.renderer
    //         .label("You just clicked a custom menu item", 100, 100)
    //         .attr({
    //           fill: "#a4edba",
    //           r: 5,
    //           padding: 10,
    //           zIndex: 10,
    //         })
    //         .css({
    //           fontSize: "1.5em",
    //         })
    //         .add();
    //     },
    //     text: "Show label",
    //   },
    // },
    buttons: {
      contextButton: {
        // menuItems: ["downloadPNG", "downloadSVG", "separator", "label"],
        menuItems: ["downloadPNG", "separator", "downloadSVG"],
      },
    },
  },
  credits: false,
});

const Chart = ({ fullScreen = false }) => {
  const options = useMemo(() => getOptions(fullScreen), [fullScreen]);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
