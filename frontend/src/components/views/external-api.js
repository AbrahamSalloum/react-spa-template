import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from 'react-redux';
import {callOpenApi, callSecureApi} from '../../redux/reducers/actions'


const ExternalApi =  () => {

  const message = useSelector(state => state.message)
  const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0();

  const getoken = async (f) => {
    const token = await getAccessTokenSilently()
    dispatch(f(token))
  }

  const notoken = async (f) => {
    dispatch(f())
  }

  return(
    <div>
      <button
        onClick={() => { notoken(callOpenApi) } }
        >Public Message (no jwt)</button>
      <button
        onClick={() => { getoken(callSecureApi) }}
      >Secret Message (needs jwt)</button>
      <div>
        {message}
      </div>
    </div>
  )
}

export default ExternalApi;