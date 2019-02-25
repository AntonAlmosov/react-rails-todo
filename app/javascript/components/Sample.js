import React from "react"
// import PropTypes from "prop-types"
class Sample extends React.Component {
  componentDidMount(){
    console.log('mounted')
  }
  render () {
    return (
      <React.Fragment>
        <div>Hello React</div>
      </React.Fragment>
    );
  }
}

export default Sample
