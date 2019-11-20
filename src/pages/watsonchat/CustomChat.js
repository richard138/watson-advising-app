import React from 'react';



class CustomChat extends React.Component{
    constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

    triggetNext() {
        this.setState({ trigger: true }, () => {
          this.props.triggerNextStep();
        });
      }

      render() {
        const text = this.props.GetResponse(this.props.steps.talk.value)
        console.log(text)
      return <div>{text ? text : '...'}</div>
    }
}

 export {CustomChat}