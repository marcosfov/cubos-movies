'use client'

import { useEffect, useState } from 'react'

import * as S from './styles'

interface SeachInputProps {
  onSearch: (searchTerm: string) => void
  placeholder: string
}

const SearchInput = ({ onSearch, placeholder }: SeachInputProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!searchTerm) return

    if (e.key === 'Enter') {
      onSearch(searchTerm)
    }
  }

  return (
    <S.Wrapper>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </S.Wrapper>
  )
}

export default SearchInput
