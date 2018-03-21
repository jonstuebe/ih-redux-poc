import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import { fetchUnits } from "../actions/units";
import { collectionUnitsSelector } from "../selectors/units";

class List extends Component {
	static defaultProps = {
		units: []
	};
	componentDidMount() {
		this.props.fetchUnits();
	}
	render() {
		// console.log(this.props.units);
		return (
			<Table
				columns={[
					{
						title: "Name",
						dataIndex: "name",
						key: "name"
					},
					{
						title: "Age",
						dataIndex: "age",
						key: "age"
					},
					{
						title: "Address",
						dataIndex: "address",
						key: "address"
					}
				]}
				dataSource={[
					{
						key: "1",
						name: "John Brown",
						age: 32,
						address: "New York No. 1 Lake Park"
					}
				]}
			/>
		);
	}
}

export default connect(
	state => {
		return { units: collectionUnitsSelector(state) };
	},
	{ fetchUnits }
)(List);
