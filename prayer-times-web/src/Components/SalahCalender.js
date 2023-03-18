import React from 'react'

export default function SalahCalender({items,}) {
  
    return (
        <div>
            <h3>
                Asr
                    {items.data.map((days, key) =>
                        <li key={key}>{days.timings["Asr"]}</li>
                    )}
                </h3>
        </div>
    )
}
