import React from 'react'
import  {Row, Col, Container} from 'react-bootstrap'

function Header() {
    return (
        <div>
            <h1 style={{color : 'black' , textAlign: "center"}}>Learn Web Dev</h1>

                <Container className='dev'>
                    <Row>
                        <Col><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" /></Col>
                        <Col><img src="https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/css-logo-300x300.png" /> </Col>
                        <Col><img src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png" /></Col>
                </Row>
                </Container>
            
        </div>
    )
}

export default Header
