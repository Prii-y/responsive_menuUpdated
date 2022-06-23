import React, { useState, useContext } from 'react'



const Parent=({children})=>{


    return <Appcontext.Provider value='Context says hello'>
        {children}
    </Appcontext.Provider>
}

// export {Parent,Appcontext};