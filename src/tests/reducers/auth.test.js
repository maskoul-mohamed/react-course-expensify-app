import authReducer from '../../reducers/auth';

test('should setup default state', () => {
    const state = authReducer(undefined, { type: "@@INIT"});
    expect(state).toEqual({})
});

test('should setup user id when login', () => {
    const uid = 'sdflkdl';
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer(undefined, action);
    expect(state.uid).toEqual(uid);
});

test('should wipe out user id when logout', () => {
    const action = {
        type: 'LOGOUT'        
    }
    const state = authReducer({uid: '123sdsd'}, action);
    expect(state).toEqual({});
});