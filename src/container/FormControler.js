import { connect } from 'react-redux'
import { ADD } from '../Services/Action/action'
import Form from '../components/Form'

const mapStateToProps = (state) => ({
  inputData: state,
})

const mapDispatchToProps = (dispatch) => ({
  addHandler: (data) => {
    dispatch(ADD(data))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
