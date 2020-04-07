import React, { Component } from 'react'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'

const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    //font-weight: bold;
    font-weight: 350;
    cursor: pointer;
    border-radius: 0;
    background: #fff;
    color: #333 !important;
    padding: 10px 20px;
    font-size: 18px;
    box-shadow: 0px 0px 0px 3px #473228,
                -6px 6px #61ae24,
                -6px 6px 0px 3px #473228;    
`

const Item = (props) => {
    return (
        <div className="row pt-4 pb-4">
            <div className="col-md-10 offset-md-1">
                <div>
                    <div className="card px-5">
                        <div className="row">
                            <div className="col-md-4">
                                <Thumbnail/>
                            </div>
                            <div className="col-md-8">
                                <div className="pt-4 pb-4">
                                    <h4>{props.title}</h4>
                                    <h4>{props.description}</h4>
                                    <div className="cta-wrapper">
                                        <Button onClick={props.handleVideoChange} className="btn cta-btn">
                                            Click aquí para ver el video
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item