import { createReduxStore, AppDispatch } from 'app/providers/StoreProvider/config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { StateSchema } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
};
