import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { Line, Bubble, Doughnut } from 'react-chartjs-2';
import { StarIcon} from "@heroicons/react/outline"

// Chart.register(Chart.scale.Category);

const ChartComponent = ({ data }) => {
    const options = {
        scales: {
          y: {
            min: 1,
            max: 11,
          },
        },
      };

  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: 'Rating',
        data: data.map((d) => d.rating),
        borderColor: '#000',
        backgroundColor: '#FF7B8B',
        tension: 0.3,
      },
   
    ],
  };

//   const starImg = new Image();
//   starImg.src = 'https://cdn.pixabay.com/photo/2013/07/12/17/39/star-152151__340.png';


  const chartDataEmociones = {
    labels: data.map((d) => d.date),
    datasets: [
        {
          label: 'Sentimiento',
            data: data.map((d) => d.sentimiento),
            borderColor: '#4B5563',
            backgroundColor: '#E5E7EB',
            tension: 0.3,
            // pointStyle: starImg,
            // pointRadius: 10,
            // pointHoverRadius: 10,
        },
    ],
    };




  return (
    <>
    <div className="mt-8 w-full text-center" style={{ height: '500px' }} >
        <h2 className='text-xl font-bold text-gray-900'>Rating Diario</h2>
      <Line data={chartData} options={options} />
      {/* <Doughnut data={chartDataEmociones} /> */}
    </div>
    </>
  );
};

export default ChartComponent;
