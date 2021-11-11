import React, { Component } from 'react';
import { Text } from "react-native";

import { connect } from 'react-redux';
import I18n from '../Screens/i18n/i18n';

class App_Text extends Component {

	constructor(props) {
		super(props);
		this.state = {
			i18n: I18n
		};
	}

	componentWillMount() {
		const { language } = this.props;
		if (language) this.setMainLocaleLanguage(language);
	}

	componentWillReceiveProps = nextProps => {
		const { language } = nextProps;
		if (language) this.setMainLocaleLanguage(language);
	}

	setMainLocaleLanguage = language => {
		let i18n = this.state.i18n;
		i18n.locale = language;
		this.setState({ i18n });
	}

	render() {
		const { i18nKey, style } = this.props;
		const { i18n } = this.state;
		return (
			<Text style={style}>
				{i18nKey ? i18n.t(i18nKey) : this.props.children}
			</Text>
		);
	}
}

const mapStateToProps = state => {
	return {
		language: state.languageReducer.language
	};
};

export default connect(mapStateToProps, null)(App_Text);