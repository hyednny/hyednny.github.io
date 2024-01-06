import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterComponent = styled.footer`
  background: #e0e0e0;
  width: 100%;
  padding: 50px 0;
  margin-top: auto;
`

const FooterContent = styled.div`
  width: 768px;
  height: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    font-size: 13px;
  }
`

const Content1 = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
`

const ContentCopyRight = styled.div`
  width: 100%;
  font-size: 11px;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterComponent>
      <FooterContent>
        <Content1>Developer Hyednny</Content1>
        <ContentCopyRight>© 2022. hyednny all rights reserved.</ContentCopyRight>
      </FooterContent>
    </FooterComponent>
  )
}

export default Footer
