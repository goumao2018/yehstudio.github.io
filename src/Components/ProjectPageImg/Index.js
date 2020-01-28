import React from 'react';
import ReactDOM from 'react-dom';

import {
	FragmentWrapper,
	ImgContainer,
	GridWrapper,
	Cell
}from './Styles';
import Branding from '../../asset/project/Branding.png';
import ServicePic1 from '../../asset/project/ServicePic1.png';
import ServicePic2 from '../../asset/project/ServicePic2.png';
import ServicePic3 from '../../asset/project/ServicePic3.png';

class ProjectPageImg extends React.Component{
	render(){
		return(
			<FragmentWrapper>
				<ImgContainer>
					<img src={Branding} alt="Branding" style={{width: "92%", height: "600px"}} />
				</ImgContainer>
				<GridWrapper>
					<Cell>
						<img src={ServicePic1} alt="ServicePic1" style={{width: "100%"}} />
					</Cell>
					<Cell>
						<img src={ServicePic2} alt="ServicePic2" style={{width: "100%"}} />
					</Cell>
					<Cell>
						<img src={ServicePic3} alt="ServicePic3" style={{width: "100%"}} />
					</Cell>
				</GridWrapper>
			</FragmentWrapper>
		);
	}
}

export default ProjectPageImg;