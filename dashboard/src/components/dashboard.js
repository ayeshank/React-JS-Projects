import React, { Component } from 'react';
import './dashboard.css';
import { Container, Row, Col } from 'react-bootstrap';
import WidgetText from './WidgetText.js';
import WidgetBar from './WidgetBar.js';
import WidgetDoughnut from './WidgetDoughnut.js';
import WidgetPareto from './WidgetPareto.js';
import WidgetPie from './WidgetPie.js';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const config = {
  apiKey: 'AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI',
  spreadsheetId: '1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg'
}
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}
/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;




class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      items:[],
      dropdownOptions:[],
      selectedValue:null,
      organicSource:null,
      directSource:null,
      referralSource:null,
      pageViews:null,
      users:null,
      newUsers:null,
      sourceArr:[],
      usersArr:[]
    }
  }
  getData=arg=>{
    const arr=this.state.items;
    const arrlen=arr.length;
    let organicSource=0;
    let directSource=0;
    let referralSource=0;
    let pageViews=0;
    let users=0;
    let newUsers=0;
    let sourceArr=[];
    let usersArr=[];

    let selectedValue=null;

    for (let i = 0; i < arrlen; i++) 
    {
    if(arg == arr[i]["month"])
      {
      organicSource=arr[i].organic_source
      directSource=arr[i].direct_source;
      referralSource=arr[i].referral_source;
      pageViews=arr[i].page_views;
      users=arr[i].users;
      newUsers=arr[i].new_users;
      sourceArr.push(
        {
          label: "Oraganic Source",
          value: arr[i].organic_source
        },
        {
          label: "Direct Source",
          value: arr[i].direct_source
        },
        {
          label: "Referral Source",
          value: arr[i].referral_source
        }
      )


      usersArr.push(
        {
          label: "Users",
          value: arr[i].users
        },
        {
          label: "New Users",
          value: arr[i].new_users
        }
      )


      }
    }
    selectedValue=arg;
    this.setState({
      organicSource:organicSource,
      directSource:directSource,
      referralSource:referralSource,
      pageViews:pageViews,
      users:users,
      newUsers:newUsers,
      sourceArr:sourceArr,
      usersArr:usersArr

    },()=>{
      console.log(this.state.organicSource);
    })

  }
  updateDashboard=event=>{

this.getData(event.value);
this.setState({selectedValue:event.value},()=>{
  console.log(this.state.organicSource);

});

  }
//excel import

 
  componentDidMount(){
    fetch(url)
    .then(response => response.json())
    .then(data => {

        let batchRowValues = data.valueRanges[0].values;

        const rows = [];

        for (let i = 1; i < batchRowValues.length; i++) {
            let rowObject = {};
            for (let j = 0; j < batchRowValues[i].length; j++) {
                rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
            }
            rows.push(rowObject);
        }
                        // dropdown options

        let dropdownOptions = [];

        for (let i = 0; i < rows.length; i++) {
            dropdownOptions.push(rows[i].month);
        }

        dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();
        this.setState(
            {
                items: rows,
                dropdownOptions: dropdownOptions,
                selectedValue: "Jan 2018"
            },
            () => this.getData("Jan 2018")
        );
      });
  }

   
    render() {

    const chartData = [
        {
          label: "Venezuela",
          value: "290"
        },
        {
          label: "Saudi",
          value: "260"
        },
        {
          label: "Canada",
          value: "180"
        },
        {
          label: "Iran",
          value: "140"
        },
        {
          label: "Russia",
          value: "115"
        }
      ];
     
      
    return (
      <div >

        <Container fluid>
          <Row className="TopHeader">
            <Col>
            Dashboard
            <Dropdown options={this.state.dropdownOptions} onChange={this.updateDashboard} value={this.state.selectedValue} placeholder="Select an option" />
            </Col>
          </Row>
        </Container>



        <Container>
          
        <Row >
                  <Col>
                      <WidgetText title="Organic Source" value={this.state.organicSource} description="Some text"/>
                  </Col>

                  <Col>
                  <WidgetText title="Direct Source" value={this.state.directSource} description="Some text"/>
                  </Col>

                  <Col>
                  <WidgetText title="Referral Source" value={this.state.referralSource} description="Some text"/>
                  </Col>

                  <Col>
                  <WidgetText title="Page Views" value={this.state.pageViews} description="Some text"/>
                  </Col>

          </Row>

          <Row>
                <Col>
                <WidgetText title="Users" value={this.state.users} description="Some text"/>
                </Col>
                <Col>
                <WidgetText title="New Users" value={this.state.newUsers} description="Some text"/>
                </Col>
              
            
            <Col>
            <WidgetPie title="Source Comparison" data={this.state.sourceArr}/>
             </Col>
        
        
            <Col>
            <WidgetDoughnut title="Users Comparison" data={this.state.usersArr}/>
             </Col>
          
          
           </Row>  
           <br/><br/> 
                <Row>
                  <Col>
                  <WidgetPareto title="Users Comparison In Terms Of Pareto Graph" data={this.state.usersArr}/>
                  </Col>
                 
                </Row>
                <Row>
                <Col>
                <WidgetBar title="Source Comparison  In Terms Of Bar Graph" data={this.state.sourceArr}/>

                 
                  </Col>
                </Row>
            
          
        </Container>
      </div>
    )
  }
}

export default Dashboard;
