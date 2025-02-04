import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { ReduxDispatch, RootState } from './store.ts';

export const useAppDispatch = () => useDispatch<ReduxDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;