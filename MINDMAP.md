**actions:** it's an object with type and payload
**payload:** carries data/data we pass to reducer
**dispatch:** triggers/sends an action
**reducer:** it's a function, decides what to do with the data, updates the state
**selectors:** functions, extract data from redux state
**pure functions:** no colateral effects, relies on its own parameters, it always returns the same thing given the same parameters
**useSelector and useDispatch:** new hooks

**Redux Flow**

1. Create an action
2. Test the action by importing in a component and dispatching
3. Write a case in the reducer
4. Write a selector