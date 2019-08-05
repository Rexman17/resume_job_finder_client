import React from 'react'
import ResultsContainer from '../containers/ResultsContainer'

class ResInputForm extends React.Component {

  render () {
    return (
      <div>
        <h1>ResInputForm - Conditionally Render Me!</h1>

        <h2>Work Experience (Past 2 Yobz)</h2>
        <form>
          <div>
            <label>
              Job Title:
              <input type="text" name="name" />
            </label>
            <label>
              Length of Time:
              <input type="text" name="name" />
            </label>
            <label>
              Resume Bullets:
              <input type="text-area" name="name" />
            </label>

          </div>
          <div>
            <label>
              Job Title:
              <input type="text" name="name" />
            </label>
            <label>
              Length of Time:
              <input type="text" name="name" />
            </label>
            <label>
              Resume Bullets:
              <input type="textarea" name="name" />
            </label>


            </div>



          <h2>Top 5 Skills</h2>
      
              <ol>
                <li>
                  <input type="text" name="name" />
                </li>
                <li>
                  <input type="text" name="name" />
                </li>
                <li>
                  <input type="text" name="name" />
                </li>
                <li>
                  <input type="text" name="name" />
                </li>
                <li>
                  <input type="text" name="name" />
                </li>
              </ol>




          <h2>Skills I Wanna Learn</h2>

              <ol>
                <li>
                  <input type="text" name="name" />
                </li>
                <li>
                  <input type="text" name="name" />
                </li>
                <li>
                  <input type="text" name="name" />
                </li>
                <li>
                  <input type="text" name="name" />
                </li>
                <li>
                  <input type="text" name="name" />
                </li>
              </ol>
              <button type="submit">
                Submit
              </button>
            </form>

            <ResultsContainer />

      </div>
    )
  }
}





export default ResInputForm
