import React from 'react';
import ReactDOM from 'react-dom';

import {BackgroundImg, Title} from './Styles';
import yellowBar from '../../asset/yellowBar.png';

class YellowBar extends React.Component{
	render(){
		return(
			<BackgroundImg>
				<Title>Branding design VS. Graphic design</Title>
			</BackgroundImg>
		);
	}
}

export default YellowBar; 