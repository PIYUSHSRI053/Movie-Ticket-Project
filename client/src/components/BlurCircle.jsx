import React from 'react'

const BlurCircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto" }) => {
    return (
        <div className="absolute -z-50 h-58 w-58 rounded-full bg-circle/40 blur-[100px]"
            style={{ top: top,left:left,right:right,bottom:bottom }}>
        </div>
    )
}

export default BlurCircle