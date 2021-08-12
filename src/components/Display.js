import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'

import React, { useState } from 'react'
// const arr = []
const Display = (props) => {
  const data = props.item.inputData.inputItem
  return (
    <div>
      <TableContainer component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {data.map((row) => (
            <TableRow key={row.userMobile}>
              <TableCell align="left"></TableCell>
              <TableCell align="left">{row.userName}</TableCell>
              <TableCell align="left">{row.userEmail}</TableCell>
              <TableCell align="left">{row.userMobile}</TableCell>
            </TableRow>
          ))} */}
          {data.length > 0 &&
            data.map((item, index) => {
              console.log(item, 'item...')
              return (
                <TableRow key={index}>
                  <TableCell align="left">{item && index + 1}</TableCell>
                  <TableCell align="left">
                    {item && item.inputData.userName}
                  </TableCell>
                  <TableCell align="left">
                    {item && item.inputData.userEmail}
                  </TableCell>
                  <TableCell align="left">
                    {item && item.inputData.userMobile}
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </TableContainer>
    </div>
  )
}

export default Display
