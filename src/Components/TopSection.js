import React from 'react'
import styled from 'styled-components'

export default function TopSection() {
    return (
        <Container>
            <div className='top-section'>
                Velkommen👋
            </div>
        </Container>
    )
}

const Container = styled.div`
    .top-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
    }


    @media screen and (max-width: 525px) {
        .top-section .search-box {
            width: 120px;
            z-index: 101;
        }
`
