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
  credits: false,
});

const Chart = ({ fullScreen = false }) => {
  const options = useMemo(() => getOptions(fullScreen), [fullScreen]);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
