import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import Chart from 'chart.js/auto';


const BarGraph = () => {
  useEffect(() => {
    createCharts();
  }, []);

  const createCharts = () => {
    const jobTrendsData = {
      labels: ['IT', 'Healthcare', 'Finance', 'Education', 'Manufacturing'],
      datasets: [{
        label: 'Trending Jobs in India',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [300, 150, 200, 100, 250]
      }]
    };

    const unemployedCitiesData = {
      labels: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'],
      datasets: [{
        label: 'Unemployed Population',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [120000, 90000, 80000, 60000, 50000]
      }]
    };

    const graduatesData = {
      labels: ['Engineering', 'Medical', 'Commerce', 'Arts', 'Science'],
      datasets: [{
        label: 'Graduates from India',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        data: [250000, 180000, 150000, 120000, 200000]
      }]
    };

   
    const interviewsData = [200, 330, 600, 490, 420];
   

    
    destroyChartIfExists('interviewsChart');
   

  
    createChart('interviewsChart', 'bar', { labels: ['2020', '2021', '2022', '2023', '2024'], datasets: [{ label: 'Citation Index', data: interviewsData, backgroundColor: 'rgba(160, 30, 30, 4)', borderColor: 'rgba(160, 30, 30, 4)', borderWidth: 1 }] });
   
  };

  const destroyChartIfExists = (chartId) => {
    const existingChart = Chart.getChart(chartId);
    if (existingChart) {
      existingChart.destroy();
    }
  };

  const createChart = (chartId, chartType, chartData) => {
    const ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
      type: chartType,
      data: chartData
    });
  };

  return (
   
    
    
      <div className="head" >
      
     
      <Container>
        <Row className="mt-4">
         <p>International Journal For Research In Multidisciplinary Advancements (IJRMA) indexed in Google Scholar with following citations.</p>
          <Col style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }}>
          <Table borderless striped hover style={{width:'18rem'}} >
      <thead>
        <tr>
         
          <th></th>
          <th>All</th>
          <th>Since 2020</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>Citations</td>
          <td>4995</td>
          <td>3890</td>
        </tr>
        <tr>
          
          <td>h-index</td>
          <td>25</td>
          <td>22</td>
        </tr>
        <tr>
          <td>i10-index</td>
          <td>130</td>
          <td>100</td>
        </tr>
      </tbody>
    </Table>

            <Card style={{width:'18rem'}}>
              <Card.Body>
                <h5 className="card-title">Citations</h5>
                <canvas id="interviewsChart" width="400" height="400"></canvas>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
   
   
   
   
  );
};

export default BarGraph;
