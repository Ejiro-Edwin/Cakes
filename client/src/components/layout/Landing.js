import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Img from 'react-image'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: []
    };
  }

  componentDidMount() {
    axios.get('/api/cake')
      .then(res => {
        this.setState({ cakes: res.data });
        console.log(this.state.cakes);
      });
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                {/* <h3 className="panel-title">
                  Cakes CATALOG
            </h3> */}
              </div>
              <div className="panel-body">
              <Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Cake</Link>
              {this.state.cakes.map(cake =>
                <div className="card">
                    <div className="card-body">
                      <h1 className="card-title">{cake.name}</h1>
                      <a href="#" className="btn btn-primary">{cake.name}</a>
                    </div>
                    <Img className="card-img-top" src={cake.imageUrl} alt="Card image"/>
                </div>
                  )}
              </div>
            </div>
          </div>
        </div>
        </div>
        )
      }
    }
    
    export default Landing;
