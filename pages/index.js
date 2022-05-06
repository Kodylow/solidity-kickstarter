import factory from "../ethereum/factory";

import React, { Component } from "react";

class CampaignIndex extends Component {
  static async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  render() {
    return <div>{this.props.campaigns[0]}</div>;
  }
}

export default CampaignIndex;
