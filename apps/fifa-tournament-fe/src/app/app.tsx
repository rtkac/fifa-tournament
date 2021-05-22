import { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';

// import { useAppDispatch } from '@fifa-tournament/helpers';
// import { fetchTodo } from '@fifa-tournament/fifa-tournament/actions';
import { getTodoRequest } from '@fifa-tournament/actions';
import { AppState } from '@fifa-tournament/reducers';

// import { Header } from '@fifa-tournament/fifa-tournament/components';

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;
`;

export function App({ todo }: any) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoRequest('d1'));
  }, [dispatch, getTodoRequest]);

  useEffect(() => {
    console.log(todo)
  }, [todo]);

  return (
    <StyledApp>
      {/* <Header title="Test title" /> */}
    </StyledApp>
  );
}

const mapStateToProps = (state: AppState) => ({
  todo: state.todo
});

export default connect(mapStateToProps)(App);
