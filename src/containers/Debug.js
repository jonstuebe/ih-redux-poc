import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import { Icon } from "antd";

const JSONDump = styled(({ data, ...extra }) => (
	<Box {...extra}>
		<pre>
			<code>{JSON.stringify(data, null, 2)}</code>
		</pre>
	</Box>
))`
	box-sizing: border-box;
	height: 300px;
	padding-top: 20px;
	overflow: auto;
`;

const Container = styled(Flex)`
	position: fixed;
	left: 0;
	bottom: ${props => (props.isOpen ? 0 : "-310px")};
	transition: bottom 250ms ease-in-out;
	width: 100%;
	box-shadow: 0 -2px 8px #f0f1f2;
	flex-direction: column;
	padding: 20px;
	box-sizing: border-box;

	code {
		font-family: "Operator Mono", fixed;
		font-size: 13px;
	}
`;

class Debug extends Component {
	state = {
		isOpen: true
	};
	render() {
		const { isOpen } = this.state;
		return (
			<Fragment>
				<Container isOpen={isOpen}>
					<Flex
						onClick={() => {
							this.setState({ isOpen: !this.state.isOpen });
						}}
						style={{ cursor: "pointer" }}
						justifyContent="space-between"
					>
						<h2 style={{ fontSize: 13 }}>Store Debug</h2>
						<Icon type={isOpen ? "down" : "up"} />
					</Flex>
					<JSONDump data={this.props.reduxState} />
				</Container>
			</Fragment>
		);
	}
}

export default connect(reduxState => {
	return { reduxState };
})(Debug);
