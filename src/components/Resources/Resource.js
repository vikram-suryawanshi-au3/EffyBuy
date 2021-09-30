import React, { Component } from 'react'
import './resource.css'
import { Link } from 'react-router-dom'

export default class Resource extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="resource_main_div">
                {/* <div className="resource_title">
                    ALL RESOURCES
                </div>

                <hr/> */}

                <div className="all_resources_div">
                    <Link to="/EffyBuy/resources/blog" style={{"textDecoration":"none"}}>
                        <div className="individual_resource">
                            <div className="individual_resource_logo">
                                <i class="fas fa-blog"></i>
                            </div>
                            <div className="individual_resource_details">
                                <div className="individual_resource_title">
                                    BLOGS
                                </div>
                                <div className="individula_resource_desc">
                                    Keep yourself updated with all things marketing
                                </div>
                            </div>
                        </div>
                    </Link>
                    
                    <Link to="/EffyBuy" style={{"textDecoration":"none"}}>
                        <div className="individual_resource">
                            <div className="individual_resource_logo">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <div className="individual_resource_details">
                                <div className="individual_resource_title">
                                    SUCCESS STORIES
                                </div>
                                <div className="individula_resource_desc">
                                    See how netcore helps brands elevate customer experience
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/EffyBuy/resources/case_study" style={{"textDecoration":"none"}}>
                        <div className="individual_resource">
                            <div className="individual_resource_logo">
                            <i class="fas fa-poll-h"></i>
                            </div>
                            <div className="individual_resource_details">
                                <div className="individual_resource_title">
                                    CASE STUDIES
                                </div>
                                <div className="individula_resource_desc">
                                    Take a look at our case studies
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/EffyBuy/resources/knowledge_source" style={{"textDecoration":"none"}}>
                        <div className="individual_resource">
                            <div className="individual_resource_logo">
                                <i class="fas fa-book-reader"></i>
                            </div>
                            <div className="individual_resource_details">
                                <div className="individual_resource_title">
                                    EBOOKS
                                </div>
                                <div className="individula_resource_desc">
                                    Ebooks, Whitepapers, Presentations to keep you ahead
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/EffyBuy" style={{"textDecoration":"none"}}>
                        <div className="individual_resource">
                            <div className="individual_resource_logo">
                                <i class="fas fa-laptop-code"></i>
                            </div>
                            <div className="individual_resource_details">
                                <div className="individual_resource_title">
                                    WEBINARS
                                </div>
                                <div className="individula_resource_desc">
                                    Game changing Marketing Insights to stay ahead
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/EffyBuy" style={{"textDecoration":"none"}}>
                        <div className="individual_resource">
                            <div className="individual_resource_logo">
                                <i class="fas fa-video"></i>
                            </div>
                            <div className="individual_resource_details">
                                <div className="individual_resource_title">
                                    VIDEOS
                                </div>
                                <div className="individula_resource_desc">
                                    Get the most out of Netcore with our step‑by‑step videos
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/EffyBuy" style={{"textDecoration":"none"}}>
                        <div className="individual_resource">
                            <div className="individual_resource_logo">
                                <i class="fas fa-map-signs"></i>
                            </div>
                            <div className="individual_resource_details">
                                <div className="individual_resource_title">
                                    GUIDES
                                </div>
                                <div className="individula_resource_desc">
                                    Lessons to kickstart and grow your multi-channel marketing
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
