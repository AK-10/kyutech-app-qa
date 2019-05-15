import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styled from "styled-components";

import Color from "./utils/Color";

const Wrapper = styled.div`
  /* width: 100%; */
  padding: 15px 10px;
`;

const RequestHeading = styled.h6`
  font-size: 20px;
  margin: 0;
`;

const AnswerHeading = styled.h6`
  margin: 0;
  font-size: 20px;
  color: red;
  font-weight: bold;
`

const Detail = styled.p`
  font-size: 16px;
  color: ${Color.Grey};
`;


class Panel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
    this.changeState = this.changeState.bind(this)
    this.setString = this.setString.bind(this)
  }

  changeState(event, expanded) {
    this.setState({
      expanded: expanded
    })
    console.log("test")
    this.render()
  }

  setString(text) {
    if(this.state.expanded || text == null) {
      return text
    } else {
      return text.length <= 50
      ? text
      : text.substring(0, 50) + "..."
    }
  }

  render() {
    const requestStr = this.setString(this.props.request)
    const requestPDStr = this.setString(this.props.requestPD)
    const answer = this.props.answer == null ? "未回答です" : this.props.answer;
    const reqPD =
      this.props.requestPD == null ? null : (
        <Detail>{requestPDStr}</Detail>
      );
    return (
      <ExpansionPanel onChange={this.changeState}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div>
            <RequestHeading>Q.</RequestHeading>
            <Detail>{requestStr}</Detail>
            {reqPD}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <AnswerHeading>A.</AnswerHeading>
            <Detail>{answer}</Detail>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

const QAPanels = props => {
  const panels = props.items.map((item, index) => {
    return <Panel key={index} request={item.request} requestPD={item.requestPD} answer={item.answer}/>
  });
  return (
    <Wrapper>
      {panels}
    </Wrapper>
  );
}
export default QAPanels;
