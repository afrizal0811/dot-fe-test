import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { StyledCard } from '../../StyledComponents'
import { getApi } from '../../api/handleApi'
import { usersUrl } from '../../constants/constants'
import {
  deleteLocalStorage,
  getLocalStorage,
} from '../../utilities/handleStorage'
import { StyledContentContainer } from './StyledComponents'
import UsersTable from './table/usersTable'
const Users = () => {
  const { navigate } = useOutletContext()
  const [values, setValues] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState({
    current: 1,
  })

  useEffect(() => {
    if (!getLocalStorage('token')) {
      deleteLocalStorage()
      navigate('/')
    }
  }, [navigate])

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const url = `${process.env.REACT_APP_BASE_URL}${usersUrl}?page=${page.current}`
      const result = await getApi(url)
      setValues(result)
      setLoading(false)
    }
    fetch()
  }, [page])

  const handlePageChange = (page, pageSize) => {
    setPage((prev) => ({
      ...prev,
      current: page,
      pageSize: pageSize,
    }))
  }

  return (
    <StyledContentContainer
      justify='center'
      align='center'
    >
      <StyledCard $width='100%'>
        <UsersTable
          data={values.data}
          handlePageChange={handlePageChange}
          loading={loading}
          total={values.total}
          navigate={navigate}
        />
      </StyledCard>
    </StyledContentContainer>
  )
}

export default Users
