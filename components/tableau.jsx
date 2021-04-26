import React, { Component } from 'react';
import tableau from 'tableau-api';
import { withRouter } from 'next/router';


class Tableau extends Component {
  componentDidMount() {
    this.initViz()
  }


  initViz() {
    const vizUrl = 'https://public.tableau.com/views/Immigrant/Story1?:language=en&:retry=yes&:display_count=y&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }


  render() {
    return (
      <div ref={(div) => { this.vizContainer = div }}>
      </div>
    )
  }
}


export default withRouter(Tableau);
