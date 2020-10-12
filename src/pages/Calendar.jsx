import React, {useState} from 'react'
import {Datepicker, START_DATE} from '@datepicker-react/styled'

function Calendar() {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  })

  function handleDatesChange(data: OnDatesChangeProps) {
    if (!data.focusedInput) {
      setState({...data, focusedInput: START_DATE})
    } else {
      setState(data)
    }
  }

  return (
    <Datepicker
      onDatesChange={handleDatesChange}
      startDate={state.startDate}
      endDate={state.endDate}
      focusedInput={state.focusedInput}
    />
  )
}

export default Calendar;