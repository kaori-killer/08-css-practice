import styled, {css} from 'styled-components';
import {useBoolean} from 'usehooks-ts';

type ButtonProps = {
	active: boolean;
};

const Button = styled.button<ButtonProps>`
    background: #FFF;
    color: #000;
    border: 1px solid ${props => (props.active ? '#F00' : '#888')};

    ${props => props.active && css`
        background: #00F;
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
