import React, {useEffect, useState} from 'react';
import { GET_COVID_REQUESTED } from '../redux/actions/covidActions'
import { connect } from 'react-redux'
import { Table, Thead, Tbody, Tr, Th, Td, Box, Tfoot,Center, Flex, VStack, Stack, Heading, Text, chakra } from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { useTable, useSortBy } from "react-table"
import { Spinner } from "@chakra-ui/react"

const LandingPage = ({
    covid: {loading, covid},
    getCovid
  }) => {

    useEffect(() => {
getCovid()
    },[]);
 
    return (
        <div >
            <Stack spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px" >
      <Heading fontSize="xl">COVID SITUATION REPORT IN NIGERIA</Heading>
      
    </Box>
    <Flex justify="center" align="center" >
        {loading? <Center><Spinner /></Center>:
            <Table p={3} borderRadius="base" borderWidth="1px" mb="20px" maxWidth="700px" size="sm">
  <Thead>   
    <Tr>
      <Th>STATE</Th>
      <Th isNumeric>CONFIRMED CASES</Th> 
      <Th isNumeric>ON ADMISSION</Th>
      <Th isNumeric>DISCHARGED</Th>
      <Th isNumeric>DEATH</Th>

    </Tr>
  </Thead>
  <Tbody>
      {covid?.data?.states.map((item, index) => (
    <Tr key={item.id}>
      <Td>{item.state}</Td>
      <Td isNumeric>{item.confirmedCases}</Td>
      <Td isNumeric>{item.casesOnAdmission}</Td>
      <Td isNumeric>{item.discharged}</Td>
      <Td isNumeric>{item.death}</Td>
    </Tr>
      ))}
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>Total</Th>
      <Th isNumeric>{covid?.data?.totalConfirmedCases}</Th>
      <Th isNumeric>{covid?.data?.totalActiveCases}</Th>
     
      <Th isNumeric>{covid?.data?.discharged}</Th>

      <Th isNumeric>{covid?.data?.death}</Th>

    </Tr>
  </Tfoot>
</Table>}
</Flex>
</Stack>
</div>
    )

}

const mapStateToProps = ({covid}) => ({
    covid: covid
  })
  
  const mapDispatchToProps = (dispatch) => ({
    getCovid: () => dispatch({ type: GET_COVID_REQUESTED }),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)