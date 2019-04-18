import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    temp: [],
  };

  async componentDidMount() {
    const res = await axios.get(
      'http://api.openweathermap.org/data/2.5/forecast?q=Yerevan,AM&units=metric&appid=f6cf1fdabc65c55ba93214e4ea7d9583'
    );
    this.setState({temp: res.data.list});
    // console.log(this.state.temp);
  }

  render() {
    const temp = this.state.temp.map(result => {
      return (
        <div>
          Weather: {result.dt_txt} {result.main.temp_min} {result.main.temp_max}
          <img
            alt="icon"
            src={`http://openweathermap.org/img/w/${
              result.weather[0].icon
            }.png`}
          />
        </div>
      );
    });

    return (
      <div>
        <h1>5 days weather forecast of Yerevan</h1>
        {temp}
      </div>
    );
  }
}

export default App;
