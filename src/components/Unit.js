import React, { Component, Fragment as F } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert, Button, Card, Spin } from "antd";
import "antd/dist/antd.css";

import { fetchUnit, fetchUnitError } from "../actions/units";
import { unitSelector } from "../selectors/units";

class Unit extends Component {
	static propTypes = {
		id: PropTypes.number.isRequired
	};
	render() {
		const { error, record, isLoading } = this.props;
		return (
			<div style={{ margin: 20 }}>
				<Card loading={isLoading} title="Property" style={{ marginBottom: 20 }}>
					{record && (
						<F>
							<h3>Address</h3>
							<address>
								{record.streetAddress1}
								<br />
								{record.city}, {record.state}
							</address>
							<h3>Users</h3>
							<ul style={{ padding: 0 }}>
								{record.users.map((user, index) => (
									<li key={index} style={{ listStyle: "none" }}>
										<p>
											{user.name} <small>({user.email})</small>
										</p>
									</li>
								))}
							</ul>
						</F>
					)}
				</Card>
				<Button
					loading={isLoading}
					type="primary"
					onClick={e => {
						e.preventDefault();
						this.props.fetchUnit();
					}}
				>
					fetch unit
				</Button>
				<Button
					onClick={e => {
						e.preventDefault();
						this.props.fetchUnitError();
					}}
				>
					fetch unit (error response)
				</Button>
			</div>
		);
	}
}

export default connect(
	(state, ownProps) => {
		return unitSelector(state, ownProps.id);
	},
	{
		fetchUnit,
		fetchUnitError
	}
)(Unit);
