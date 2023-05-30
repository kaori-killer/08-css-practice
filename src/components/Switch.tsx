import styled, {css} from 'styled-components';
import {useBoolean} from 'usehooks-ts';

type ButtonProps = {
	active: boolean;
};

const Button = styled.button<ButtonProps>`
    background: ${props => (props.active ? '#00F' : '#FFF')};
    color:  ${props => (props.active ? '#FFF' : '#000')};
    border: 1px solid #888;

    ${props => props.active && css`
        background: #F00;
        color: #FFF
    `}
`;

export default function Switch() {
	const {value: active, toggle} = useBoolean(false);

	return (
		<Button type='button' onClick={toggle} active={active}>
            on/off
		</Button>
	);
}
