import React, { useEffect } from "react";
import Chart from "chart.js";
import API from "../../utils/API";
import vaccineChart from "../../utils/vaccineChart";

const Home = () => {
  // const [data, setData] = useState();

  useEffect(() => {
    API.GetData.then((res) => {
      console.log(res);
    })
  }, []);


  

  return (
    <div>
        <canvas id="myChart" width="400" height="400"></canvas>
    </div>

  )
};

export default Home;