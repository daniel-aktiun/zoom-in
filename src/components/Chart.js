import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import HighchartsExporting from "highcharts/modules/exporting";
// HighchartsExporting(Highcharts);

const options = {
  title: {
    text: "",
  },
  chart: {
    height: 300,
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
};

const Chart = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
