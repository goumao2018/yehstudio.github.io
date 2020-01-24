import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-self: auto;
`;

const ActiveMenu = styled.div`
    position: sticky;
    top: 0;
    width: 250px;
    height: 50px;
`;

const StyledSection = styled.div`
    height: 600px;
    padding: 36px;
`;

const sections = ['a', 'b', 'c'];

class Test extends React.Component {
    contentsEl = [];

    constructor(props) {
        super(props);
        this.state = {
            activeMenu: 'Hello a'
        };
    }

    setContentsEl = el => this.contentsEl.push(el);

    generateObserver = ref => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
                    this.setState({ ...this.state, activeMenu: entry.target.firstChild.innerText });
                }
            });
        }, { threshold: 1});

        observer.observe(ref);
    }

    componentDidMount = () => {
        this.contentsEl.map(content => this.generateObserver(content));
    }

    render = () => {
        const renderedSections = sections.map(s => <Section key={s} count={s} setContentsEl={this.setContentsEl} />);

        return (
            <Wrapper ref={this.setContentWrapper}>
                <Row>
                    {renderedSections}
                </Row>
                <ActiveMenu>
                    <p>{this.state.activeMenu}</p>
                </ActiveMenu>
            </Wrapper>
        )
    }
}

const Section = ({ setContentsEl, count }) => (
    <StyledSection ref={setContentsEl}>
        <h2>Hello {count}</h2>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
        </p>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
        </p>
    </StyledSection>
);

export default Test;