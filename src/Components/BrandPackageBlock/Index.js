import React from 'react';
import ReactDOM from 'react-dom';

import {
	FragmentWrapper,
	InsideBlock,
	Header,
	GridWrapper,
	Cell,
	CellWrapper,
	Title,
	Content
} from './Styles';

class BrandPackageBlock extends React.Component{
	render(){
		return(
			<FragmentWrapper>
				<InsideBlock>
					<Header>Our branding Package<br />One-stop service </Header>
					<hr style={{width: "72%", margin: "0"}} />
						<GridWrapper>
							<Cell>
								<CellWrapper>
									<Title>Preparation</Title>
									<ol>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Brand Proposal</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Brand research</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Brand Competitve analyses</li>
									</ol>
								</CellWrapper>
							</Cell>	
							<Cell>
								<CellWrapper>
									<Title>Website design</Title>
									<Content>
										we provides website design if you needed, along with your brand style.
									</Content>
								</CellWrapper>
							</Cell>
							<Cell>
								<CellWrapper>
									<Title>Design</Title>
									<ol>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Logo design (colors, typography, secondary patterns)</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Visual identity (business card, stationary,apron, Brochure layout, Letterhead etc.)</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Branding guideline book</li>
									</ol>
								</CellWrapper>
							</Cell>
							<Cell>
								<CellWrapper>
									<Title>Graphic design</Title>
									<ol>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Promotional material (menu, 	uniform, poster etc.)</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Banner</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Brochure design</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Signboard design</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Package design</li>
									</ol>
								</CellWrapper>
							</Cell>				
						</GridWrapper>
						<br />
						<br />
						<Header>Only Graphic design needed？</Header>
						<hr style={{width: "72%", margin: "0"}} />
						<GridWrapper>
							<Cell>
								<CellWrapper>
									<ol>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Promotional material (menu, uniform, poster etc.)</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Banner</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Brochure design</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Signboard design</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Package design</li>
									</ol>
								</CellWrapper>
							</Cell>
							<Cell>
								<CellWrapper>
									<ol start="6">
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Promotional material (menu, uniform, poster etc.)</li>
										<li style={{fontSize: "17px", lineHeight: "33px"}}>Banner</li>
									</ol>
								</CellWrapper>
							</Cell>
						</GridWrapper>
					</InsideBlock>
			</FragmentWrapper>
		);
	}
}

export default BrandPackageBlock;