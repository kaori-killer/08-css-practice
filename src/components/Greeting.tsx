import styled from 'styled-components';

const Paragraph = styled.p`
  color: #00F;

  strong {
    font-size: 2em;
    color: #F00;
  }
`;

const BigParagraph = styled(Paragraph)`
  font-size: 1em;
`;

function HelloWorld({className}: React.HTMLAttributes<HTMLElement>) {
	return (
		<BigParagraph className={className}>
            Hello, World
			<strong>!</strong>
		</BigParagraph>
	);
}

const SmallHelloWorld = styled(HelloWorld)`
    font-size: 0.5em;
`;

export default function Greeting() {
	return (
		<SmallHelloWorld />
	);
}
