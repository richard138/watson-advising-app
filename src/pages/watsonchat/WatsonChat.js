import React from 'react';
import AssistantV1 from 'ibm-watson/assistant/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import { SendMessage} from './state/actions'
import { connect } from 'react-redux';
import {CustomChat} from './CustomChat'

 import '../../styles/Login.css'


class WatsonChatContainer extends React.Component{


    componentDidMount() {
        const service = new AssistantV1({
            version: '2019-09-01',
            authenticator: new IamAuthenticator({
              apikey: 'N7vyHwBRprtCxqIb-VhSyDOSPXFabBKbG7-BJbXHa8Xn',
            }),
            url: 'https://gateway-wdc.watsonplatform.net/assistant/api/',
          });  
        this.setState({service: service})

      }
    
    
      GetResponse = (userInput) => {
            this.props.SendMessage(userInput, this.state.service)
            return this.props.watsonResponse
      }

      render() {
        const theme = {
          background: '#f5f8fb',
          fontFamily: 'Helvetica Neue',
          headerBgColor: '#006666',
          headerFontColor: '#f3e389',
          headerFontSize: '15px',
          botBubbleColor: '#006666',
          botFontColor: '#fff',
          userBubbleColor: '#fff',
          userFontColor: '#4a4a4a',
        };
        return ( 
            <React.Fragment>
                <div style={{  
                    backgroundImage: "url( '../../images/loginImage.jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                        }}>
                    <div className={"header-position"}>
                        <h1 className={"header-style"}>Watson Chat</h1>
                        <ThemeProvider theme={theme}>
                        <ChatBot
                            headerTitle={"Chat With Addie"}
                            steps={[
                                {
                                id: '1',
                                message: 'Ask me Anything!',
                                trigger: 'talk',
                                },
                                {
                                id: 'talk',
                                user: true,
                                trigger: '3',
                                },
                                {
                                id: '3',
                                component: <CustomChat GetResponse={this.GetResponse} />,
                                trigger: 'talk',
                                asMessage: true,
                                },
                            ]}
                        />
                        </ThemeProvider>
                    </div>
                </div>
            
       
            </React.Fragment>
            


        )}
    }

const mapDispatchToProps = {SendMessage}

const mapStateToProps = (state) => {
     return {watsonResponse: state.watsonChat.watsonChat.watsonResponse};

};

 export const WatsonChat = connect(mapStateToProps, mapDispatchToProps)(WatsonChatContainer);