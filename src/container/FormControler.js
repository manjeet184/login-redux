import { connect } from 'react-redux'
import { ADD, REMOVE } from '../Services/Action/action'
import Form from '../components/Form'
const mapStateToProps = (state) => ({
  inputData: state,
})

const mapDispatchToProps = (dispatch) => ({
  addHandler: (data) => {
    dispatch(ADD(data))
  },
  removeHandler: (dat) => {
    console.log('Controller', dat)
    dispatch(REMOVE(dat))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
