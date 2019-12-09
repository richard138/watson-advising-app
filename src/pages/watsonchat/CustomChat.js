import React from 'react';
import { Loading } from 'react-simple-chatbot';

class CustomChat extends React.Component{
  // The <CustomChat/> component overrides the default react-simple-ChatBot message component.
  // This is the prefered method for making asynchronous api calls.
  // React-simple-chatbot Docs: https://lucasbassetti.com.br/react-simple-chatbot/#/docs

    constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: null,
      trigger: false,
      text: null,
      sent: false,
    };

  }

    async componentDidMount() {
        const { steps } = this.props;
        if(!this.state.sent){
          const response = await this.props.service.message({
            workspaceId: 'f96277d8-c515-4dcc-ab18-442ed4cd62d6',
            input: {'text': steps.talk.value}
            })
          this.readyStateChange(response.result.output.text[0])
        }
       
      }
         
      readyStateChange(text) {
          if (text) {
            this.setState({ loading: false, result: text, sent: true });
          } else {
            this.setState({ loading: false, result: 'Sorry, we are having some connection problems.' });
          }
      }

      render() {
        if(this.state.loading) {
          return(
            <Loading/>
            )
        }
        else {
          return(
            <div>{this.state.result}</div>
          )
        }

    }
}

 export {CustomChat}