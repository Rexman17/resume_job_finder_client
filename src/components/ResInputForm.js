import React from 'react'
import Results from './Results'

class ResInputForm extends React.Component {

  render () {
    return (
      <div>
        <h1>ResInputForm - Conditionally Render Me!</h1>

        <h2>Work Experience (Past 2 Yobz)</h2>
        <form>
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

              <input type="submit" value="Submit" />
        </form>

        <form>
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

              <input type="submit" value="Submit" />

        </form>

          <h2>Top 5 Skills</h2>
            <form>
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
            </form>


          <h2>Skills I Wanna Learn</h2>
            <form>
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
            </form>

            <Results />

      </div>
    )
  }
}





export default ResInputForm
