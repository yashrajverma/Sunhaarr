import React from 'react'

const Stepper = (stepperItem) => {
    return (
        <div>
            {stepperItem.map((steps, idx) => {
                return <ol class="lg:flex items-center w-full space-y-4 lg:space-y-0  ">
                    <li class="  flex-1 ">
                        <a href="https://pagedone.io/" class="flex items-center font-medium px-4 py-5 w-full rounded-lg bg-indigo-50">
                            <span class="w-8 h-8 bg-primaryNavy  rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">{idx + 1}</span>
                            <h4 class="text-base  text-primaryNavy">{steps}</h4>
                        </a>
                    </li>

                </ol>
            })}

        </div>
    )
}

export default Stepper