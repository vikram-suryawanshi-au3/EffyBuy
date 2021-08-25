import React, { Component } from 'react'
import './knowledgeSource.css'
import PPT from './PPT/PPT.js'
import WhitePaper from './WhitePaper/WhitePaper'
import Ebooks from './E_books/Ebooks'

export default class KnowledgeSource extends Component {
    state={
        show_ebook:true,
        show_ppt:false,
        show_whitepaper:false,
    }

    ebook(){
        this.setState({
            show_ebook:true,
            show_ppt:false,
            show_whitepaper:false,
        })
    }
    ppt(){
        this.setState({
            show_ebook:false,
            show_ppt:true,
            show_whitepaper:false,
        })
    }
    whitepaper(){
        this.setState({
            show_ebook:false,
            show_ppt:false,
            show_whitepaper:true,
        })
    }

    render() {
        return (
            <div className="knowledge_source_main_div">
                <div className="knowledge_source_title_div">
                    Knowledge Source
                </div>
                <div className="btn-group" data-toggle="buttons">
                    <label className="btn btn-light active" onClick={()=>{this.ebook()}}>
                        <input type="radio" name="options" id="option3" autoComplete="off" defaultChecked/> E-BOOK
                    </label>
                    <label className="btn btn-light" onClick={()=>{this.ppt()}}>
                        <input type="radio" name="options" id="option1" autoComplete="off"/> PRESENTATION
                    </label>
                    <label className="btn btn-light" onClick={()=>{this.whitepaper()}}>
                        <input type="radio" name="options" id="option2" autoComplete="off"/> WHITEPAPER
                    </label>
                    {/* <label className="btn btn-danger">
                        <input type="radio" name="options" id="option3" autoComplete="off"/> Critical
                    </label> */}
                </div>
                {this.state.show_ebook && <div><Ebooks/></div>}
                {this.state.show_ppt && <div><PPT/></div>}
                {this.state.show_whitepaper && <div><WhitePaper/></div>}
            </div>
        )
    }
}
