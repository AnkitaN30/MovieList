import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from './store';

function ReduxProvider({ children }) {
    return <Provider store={store} >{children}</Provider>
}

const reduxRender = (ui, ...renderOptions) =>
    rtlRender(ui, { wrapper: ReduxProvider }, ...renderOptions);

export * from '@testing-library/react'
export { reduxRender as render };
