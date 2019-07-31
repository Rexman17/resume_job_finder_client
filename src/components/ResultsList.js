import React from 'react'
import Result from './Result'

class ResultsList extends React.Component {

  // componentDidMount() {
  //   // debugger
  //   this.props.getMoves(this.props.user.id)
  // }

  render() {
    // console.log("inside MoveList", this.props);
    // const mappedMoves = this.props.moves.map((move) => {
    //   // debugger
    //   return <Move move={move} key={move.id} />
    // })

    return (
      <div className="row">
          mappedResults
      </div>
    )
  }
}

// the connect is an HOC which is listening to the redux for when the mapStateToProps changes, i.e., when moves gets updated
// whenever the moves reducer gets updated

export default ResultsList
