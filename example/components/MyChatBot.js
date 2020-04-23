import React, { Component }  from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const Theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [
  {
    id: 'start_1',
    message: 'Hi I’m here to help answer your motoring questions during the COVID-19 (Coronavirus) outbreak.',
    trigger: 'start_11',
  },
  {
    id: 'start_11',
    message: 'Ready to get started?',
    trigger: ({step}) => 'start_2',
  }, 
  {
    id: 'start_2',
    options: [
      { value: '1', label: 'Yes', trigger: 'start_3' },
      { value: '2', label: 'No', trigger: 'end_3' },
    ],
  },
  {
    id: 'end_3',
    component: (
      <div>Remember to use the   <span className='rsc_icon_close_inline'/>  icon at any time if you need help again. Please use the x in the top right hand corner to close our chat. Bye for now.  </div>
    ),    
    end: true,
  },
  {
    id: 'start_3',
    message: 'OK, let’s get you the answers you need. Which best describes your situation?',
    trigger: '1',
  },  
  {
    id: '1',
    message: 'Hello World',
    end: true
  }
];

const Config = {
  floating: true,
  botDelay: 1000,
  userDelay: 400,
  //headerComponent: <div className='brandbot-header'><a href='#' onMouseUp={() => this.chatBot.toggleChatBot(false)}>XXX</a></div>
};

class BrandBotHeader extends Component {
  render() {
    return (
      <div className='brandbot-header'>
        <a href="#" onMouseUp={this.props.onReset}><img width="32" height="26" alt="restart" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODQiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA4NCA2OCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJiIj48cmVjdCB3aWR0aD0iODQiIGhlaWdodD0iNjgiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBpZD0iYSIgY2xpcC1wYXRoPSJ1cmwoI2IpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzAwIC0yMjcpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MDUgMjMyKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguNDc2IDI4LjU0NikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3LjAwMikiPjxwYXRoIGQ9Ik04NjAuNDksMjc0LjU0NCw4NTIuNDY3LDI2My4xbC0xMS40NDIsOC4wMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NDEuMDI1IC0yNjMuMTAyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48cGF0aCBkPSJNODEyLjEsMjg2LjVhMjkuNDI2LDI5LjQyNiwwLDAsMCw0OC4zNDQtMjIuNzgyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODEyLjEwMiAtMjYyLjkzMSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxOS4wMTIpIj48cGF0aCBkPSJNNzk3LjY2LDI1NS42NWw4LjAyMywxMS40NDIsMTEuNDQyLTguMDIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzk3LjY2IC0yNTUuNjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9nPjxwYXRoIGQ9Ik04NTIuMzU0LDI0Ny42NzdhMjkuNDI2LDI5LjQyNiwwLDAsMC00OC4zNDQsMjIuNzgyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzk1Ljg4NyAtMjQwLjc4OSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PC9nPjwvZz48L3N2Zz4="/></a>
        <a href="#" onMouseUp={this.props.onClose}><img width="32" height="26" alt="close" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODQiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA4NCA2OCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJiIj48cmVjdCB3aWR0aD0iODQiIGhlaWdodD0iNjgiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBpZD0iYSIgY2xpcC1wYXRoPSJ1cmwoI2IpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzEwLjgwNiAtMjM4LjM3NCkiPjxsaW5lIHgyPSI2MCIgeTI9IjYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MjMuODA2IDI0Mi4zNzQpIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzIi8+PGxpbmUgeDE9IjYwIiB5Mj0iNjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyMy44MDYgMjQyLjM3NCkiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiLz48L2c+PC9nPjwvc3ZnPg=="/></a>
      </div>        
    );
  }
}


class MyChatBot extends Component {

  onToggle = (opened) => {
    this.chatBot.toggleChatBot(opened);
    if (!opened)
      this.chatBot.resetChatBot();
  }
  onReset = () => {
    this.chatBot.resetChatBot();
  }  

  render() {
    Config.headerComponent = <BrandBotHeader onReset={() => this.onReset()} onClose={() => this.onToggle(false)}/>;
    
    return (
      <div>
        <ThemeProvider theme={Theme} >
          <ChatBot steps={steps} {...Config} 
            onRef={ref => (this.chatBot = ref)}
          />
        </ThemeProvider>
      </div>      
    );  
  }
}

export default MyChatBot;