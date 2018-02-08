import React from 'react';

import ReportHeader from "./report-header";
import ReportRow from "./report-row";

module.exports = class ReportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opening: null,
      header: [],
      rows: [],
      closing: null,
    };
    
    this._setInitialState = this._setInitialState.bind(this);
    this._parseHeader     = this._parseHeader.bind(this);
    this._parseRows       = this._parseRows.bind(this);
  }

  _setInitialState(props) {
    this.setState({
      opening: props.opening,
      header: this._parseHeader(props.data),
      rows: this._parseRows(props.data),
      closing: props.closing
    });
  }

  componentDidMount() {
    this._setInitialState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._setInitialState(nextProps);
  }

  _parseHeader(data) {
    if (data.length == 0) return null;
    return (<ReportHeader data={Object.keys(data[0])} />);
  }

  _parseRows(data) {
    if (data.length == 0) return null;

    let content = [];
    data.forEach((entry, index) => {
      content.push((<ReportRow key={'row_' + index} data={entry} />));
    });

    return content;
  }

  render() {
    return (
      <div className={'page ' + this.props.className}>
        <div className="page__opening">{this.state.opening}</div>
        <div className="page__table">
          {this.state.header}
          {this.state.rows}
        </div>
        <div className="page__closing">{this.state.closing}</div>
      </div>
    );
  }
}
