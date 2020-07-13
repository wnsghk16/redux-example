import React from "react";

const CountdownActions = dispatcher =>({
    tick(currentCount) {
        dispatcher.handleAction({type: 'TICK'})
    },
    reset(count) {
        dispatcher.handleAction({
            type:'REST',
            count
        })
    }
})

export default CountdownActions