import React from 'react';
import AssistantV1 from 'ibm-watson/assistant/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { withRouter } from 'react-router-dom';

import { SendMessage} from './state/actions'
import { connect } from 'react-redux';
import {CustomChat} from './CustomChat'
import HoggardHall from '../../images/HoggardHall.jpg'
import watsonMan from '../../images/watsonMan.webp'
import {Button} from 'semantic-ui-react';

 import '../../styles/style.css'


class WatsonChatContainer extends React.Component{
  // Description: This is the parent component for the watson chat page.
  // This component serves as the parent for the react-simple-chat component (<Chat/>) which is effectively the chat window.
  // The react-simple-chat also acts as a parent compnent for the <CustomChat/> component.
  // The <ThemeProvidor/> component acts as a Higher Order Class for the <Chat/> componenet and allows the theme of the componenet
  // to be changed
  // Author: Richard Chambers (react-simple-chatbot: <Chat/>, styled-components: <ThemeProvider/>)
  
      GetResponse = (userInput) => {
        //invokes the SendMessage() action located in watsonChat/state/actions
            this.props.SendMessage(userInput, this.state.service)
            return this.props.watsonResponse
      }

      Logout = () =>{
        this.props.history.push('/');
      }

      render() {
        //render method is a React.Component method. Returns JSX which is what is rendered on screen.

        //Instanciate theme object to pass as theme prop to <ThemeProvider/>
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
        //stand up new Assistant class with IBM credentials
        const service = new AssistantV1({
            version: '2019-09-01',
            authenticator: new IamAuthenticator({
              apikey: 'N7vyHwBRprtCxqIb-VhSyDOSPXFabBKbG7-BJbXHa8Xn',
            }),
            url: 'https://gateway-wdc.watsonplatform.net/assistant/api/',
          });
        return ( 
            <React.Fragment>
                <img src={HoggardHall} alt={"HoggardHall"} className={"bg"}/>
                {/* image source = https://www.flickr.com/photos/29381982@N08/26199142100  */}
                
                {/* All images used in the project have been labled for at leat non-commercial reuse */}

                <div style={{maxWidth:"70em", marginLeft: "17%", marginTop: "0%"}}>
                <h2 class="ui top attached header" style={{backgroundColor: "#006666", color:"Yellow", textAlign:"center", fontSize:"7em", fontVariant:"small-caps"}}>UNCW <br/>Watson Chat</h2>
                    <div class="ui attached segment" style={{fontWeight:"bold", fontSize:"1.9em" ,paddingTop:"3em", border: '5px solid yellow'}}>
                        Watson has been specially trained to answer student's questions about academics and advising! 
                        <ul>
                            <li>How to meet with an Adviser</li>
                            <li>Where to find buildings on campus</li>
                            <li>Graduation questions</li>
                            <li>When academic events are happening</li>
                            <li>And much much more!!</li>
                        </ul>
                        <p style={{ backgroundColor:"#006666", color:"yellow", textAlign:"center", paddingBottom: "5px", border: '2px solid black', borderRadius: "30px"}}>Ask your questions to Watson in the window below!</p>
                    </div>
                    
                </div>
               
                <div className={"watson-chat-position"}>
                    <ThemeProvider theme={theme}>
                        <ChatBot
                            botAvatar={watsonMan}
                            width={"70em"}
                            headerTitle={""}
                            steps={[
                                {
                                id: '1',
                                message: '...',
                                trigger: 'talk',
                                },
                                {
                                id: 'talk',
                                user: true,
                                trigger: '3',
                                },
                                {
                                id: '3',
                                component: <CustomChat SendMessage={this.props.SendMessage} service={service} />,
                                trigger: 'talk',
                                asMessage: true,
                                },
                            ]}
                        />
                    </ThemeProvider>
                    <Button className={"ui-button"} onClick={this.Logout} style={{ fontSize: "1.9em", paddingLeft:"17.5em", paddingRight: "17.5em"}} > Exit</Button>
                    </div>
            </React.Fragment>
            


        )}
    }

const mapDispatchToProps = {SendMessage}

const mapStateToProps = (state) => {
     return {watsonResponse: state.watsonChat.watsonChat.watsonResponse};

};

 export const WatsonChat = withRouter(connect(mapStateToProps, mapDispatchToProps)(WatsonChatContainer));