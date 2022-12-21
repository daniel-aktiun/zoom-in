import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import HighchartsExporting from "highcharts/modules/exporting";
// HighchartsExporting(Highcharts);

const options = (fullScreen = false) => ({
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
      showInLegend: false,
      dataLabels: {
        enabled: false,
      },
      data: [1, 2, 3],
    },
  ],
  credits: false,
});

const Chart = ({ fullScreen = false }) => {
  return (
    <HighchartsReact highcharts={Highcharts} options={options(fullScreen)} />
  );
};

export default Chart;
