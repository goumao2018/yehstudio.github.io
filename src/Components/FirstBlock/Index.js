import React from 'react';
import ReactDOM from 'react-dom';

import {FirstDiv, Header, Paragraph, Content} from './Styles';

class FirstBlock extends React.Component{
	render(){
		return(
		<FirstDiv>
			<Header>Branding Design</Header>
			<Paragraph>
				<Content>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</Content>
			</Paragraph>
		</FirstDiv>
		);
	}
}
export default FirstBlock;