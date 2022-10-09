import React from 'react'

export default function OutputCard(props) {
    const flag=props.flag;
    const bmiMessage=props.bmiMessage;
  return (
    <div className="card-secondry">
    <div className=" card-body1">
      <div className="heading-text">
        { flag === true ? (
          <h2>
            BMI:{props.bmi} - {bmiMessage}
          </h2>
        ) : (
          ""
        )}
      </div>
   </div>
   </div>
  )
}
