import React, { Component } from 'react'
import './knowledgeSource.css'
import PPT from './PPT/PPT.js'
import WhitePaper from './WhitePaper/WhitePaper'
import Ebooks from './E_books/Ebooks'
import DemoCaseStudy from './DemoCaseStudy/DemoCaseStudy'

export default class KnowledgeSource extends Component {
    state={
        show_ebook:false,
        show_ppt:false,
        show_whitepaper:true,
        show_case_studies:false
    }

    componentDidMount(){
        let loc = this.props.location
        // alert(loc)
        // this.setState({
        //     loc:loc
        // })
        if(loc === '/EffyBuy/resources/ebooks'){
            this.setState({
                show_ebook:true,
                show_ppt:false,
                show_whitepaper:false,
                show_case_studies:false,
                ebook_class:'active'
            })
        }else if(loc === '/EffyBuy/resources/case_study'){
            this.setState({
                show_ebook:false,
                show_ppt:false,
                show_whitepaper:false,
                show_case_studies:true,
                case_study_class:'active'
            })
        }else if(loc === '/EffyBuy/resources/ppt'){
            this.setState({
                show_ebook:false,
                show_ppt:true,
                show_whitepaper:false,
                show_case_studies:false,
                ppt_class:'active'
            })
        }else{
            this.setState({
                show_ebook:false,
                show_ppt:false,
                show_whitepaper:true,
                show_case_studies:false,
                white_paper_class:'active'
            })
        }
    }

    // componentDidUpdate(_,prevState){
    //     if (prevState.loc !== this.state.loc) {
    //         alert("changed")
    //       }
    // }

    ebook(){
        this.setState({
            show_ebook:true,
            show_ppt:false,
            show_whitepaper:false,
            show_case_studies:false
        })
    }
    ppt(){
        this.setState({
            show_ebook:false,
            show_ppt:true,
            show_whitepaper:false,
            show_case_studies:false
        })
    }
    whitepaper(){
        this.setState({
            show_ebook:false,
            show_ppt:false,
            show_whitepaper:true,
            show_case_studies:false
        })
    }
    casestudy(){
        this.setState({
            show_ebook:false,
            show_ppt:false,
            show_whitepaper:false,
            show_case_studies:true
        })
    }

    render() {
        // let check_location = this.props.location
        // alert(check_location)
        return (
            <div className="knowledge_source_main_div">
                <div className="knowledge_source_title_div">
                    Knowledge Source
                </div>
                <div className="btn-group" data-toggle="buttons">
                    <label className={"btn btn-light " + this.state.ebook_class} onClick={()=>{this.ebook()}}>
                        <input type="radio" name="options" id="option3" autoComplete="off" defaultChecked={this.state.show_ebook === true} /> E-BOOK
                    </label>
                    <label className={"btn btn-light " + this.state.case_study_class} onClick={()=>{this.casestudy()}}>
                        <input type="radio" name="options" id="option4" autoComplete="off" defaultChecked={this.state.show_case_studies === true}/> CASE STUDY
                    </label>
                    <label className={"btn btn-light " + this.state.ppt_class} onClick={()=>{this.ppt()}}>
                        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked={this.state.show_ppt === true}/> PRESENTATION
                    </label>
                    <label className={"btn btn-light " + this.state.white_paper_class} onClick={()=>{this.whitepaper()}}>
                        <input type="radio" name="options" id="option2" autoComplete="off" defaultChecked={this.state.show_whitepaper === true}/> WHITEPAPER
                    </label>
                    {/* <label className="btn btn-danger">
                        <input type="radio" name="options" id="option3" autoComplete="off"/> Critical
                    </label> */}
                </div>
                {this.state.show_case_studies && <div ><DemoCaseStudy/></div>}
                {this.state.show_ebook && <div><Ebooks/></div>}
                {this.state.show_ppt && <div><PPT/></div>}
                {this.state.show_whitepaper && <div><WhitePaper/></div>}
            </div>
        )
    }
}
