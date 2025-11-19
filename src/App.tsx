import { useSelector, useDispatch } from "react-redux";
import * as S from './styles';

export function App() {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  return (
    <S.AppContainer>
      <S.HeaderContent>
        <S.CounterDisplay>
          Contador: <span>{counter}</span>
        </S.CounterDisplay>
        <S.ButtonsContainer>
          <S.StyledButton
            variant="primary"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            + Incremento
          </S.StyledButton>
          <S.StyledButton
            variant="secondary"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            - Decremento
          </S.StyledButton>
        </S.ButtonsContainer>
      </S.HeaderContent>
    </S.AppContainer>
  );
}

