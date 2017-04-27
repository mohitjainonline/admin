import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Dashboard = ({ secretData }) => (
  <div>
<nav className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s1">
            <h3><span className="pull-left">Chat</span><a href="javascript:void(0);" className="pull-right" id="closeRight"><i className="fa fa-times"></i></a></h3>
            <div className="slimscroll">
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar2.png" alt="" /><span>Sandra smith<small>Hi! How're you?</small></span></a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar3.png" alt="" /><span>Amily Lee<small>Hi! How're you?</small></span></a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar4.png" alt="" /><span>Christopher Palmer<small>Hi! How're you?</small></span></a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar5.png" alt="" /><span>Nick Doe<small>Hi! How're you?</small></span></a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar2.png" alt="" /><span>Sandra smith<small>Hi! How're you?</small></span></a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar3.png" alt="" /><span>Amily Lee<small>Hi! How're you?</small></span></a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar4.png" alt="" /><span>Christopher Palmer<small>Hi! How're you?</small></span></a>
                <a href="javascript:void(0);" className="showRight2"><img src="assets/images/avatar5.png" alt="" /><span>Nick Doe<small>Hi! How're you?</small></span></a>
            </div>
		</nav>
        <nav className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
            <h3><span className="pull-left">Sandra Smith</span> <a href="javascript:void(0);" className="pull-right" id="closeRight2"><i className="fa fa-angle-right"></i></a></h3>
            <div className="slimscroll chat">
                <div className="chat-item chat-item-left">
                    <div className="chat-image">
                        <img src="assets/images/avatar2.png" alt="" />
                    </div>
                    <div className="chat-message">
                        Hi There!
                    </div>
                </div>
                <div className="chat-item chat-item-right">
                    <div className="chat-message">
                        Hi! How are you?
                    </div>
                </div>
                <div className="chat-item chat-item-left">
                    <div className="chat-image">
                        <img src="assets/images/avatar2.png" alt="" />
                    </div>
                    <div className="chat-message">
                        Fine! do you like my project?
                    </div>
                </div>
                <div className="chat-item chat-item-right">
                    <div className="chat-message">
                        Yes, It's clean and creative, good job!
                    </div>
                </div>
                <div className="chat-item chat-item-left">
                    <div className="chat-image">
                        <img src="assets/images/avatar2.png" alt="" />
                    </div>
                    <div className="chat-message">
                        Thanks, I tried!
                    </div>
                </div>
                <div className="chat-item chat-item-right">
                    <div className="chat-message">
                        Good luck with your sales!
                    </div>
                </div>
            </div>
            <div className="chat-write">
                <form className="form-horizontal" action="javascript:void(0);">
                    <input type="text" className="form-control" placeholder="Say something" />
                </form>
            </div>
		</nav>
        <div className="menu-wrap">
            <nav className="profile-menu">
                <div className="profile"><img src="assets/images/avatar1.png" width="52" alt="David Green"/><span>David Green</span></div>
                <div className="profile-menu-list">
                    <a href="#"><i className="fa fa-star"></i><span>Favorites</span></a>
                    <a href="#"><i className="fa fa-bell"></i><span>Alerts</span></a>
                    <a href="#"><i className="fa fa-envelope"></i><span>Messages</span></a>
                    <a href="#"><i className="fa fa-comment"></i><span>Comments</span></a>
                </div>
            </nav>
            <button className="close-button" id="close-button">Close Menu</button>
        </div>
        <form className="search-form" action="#" method="GET">
            <div className="input-group">
                <input type="text" name="search" className="form-control search-input" placeholder="Search..." />
                <span className="input-group-btn">
                    <button className="btn btn-default close-search waves-effect waves-button waves-classic" type="button"><i className="fa fa-times"></i></button>
                </span>
            </div>
        </form>
        
        <main className="page-content content-wrap">
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="sidebar-pusher">
                        <a href="javascript:void(0);" className="waves-effect waves-button waves-classic push-sidebar">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                    <div className="logo-box">
                        <a href="index.html" className="logo-text"><span>Modern</span></a>
                    </div>
                    <div className="search-button">
                        <a href="javascript:void(0);" className="waves-effect waves-button waves-classic show-search"><i className="fa fa-search"></i></a>
                    </div>
                    <div className="topmenu-outer">
                        <div className="top-menu">
                            <ul className="nav navbar-nav navbar-left">
                                <li>		
                                    <a href="javascript:void(0);" className="waves-effect waves-button waves-classic sidebar-toggle"><i className="fa fa-bars"></i></a>
                                </li>
                                <li>
                                    <a href="#cd-nav" className="waves-effect waves-button waves-classic cd-nav-trigger"><i className="fa fa-diamond"></i></a>
                                </li>
                                <li>		
                                    <a href="javascript:void(0);" className="waves-effect waves-button waves-classic toggle-fullscreen"><i className="fa fa-expand"></i></a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown">
                                        <i className="fa fa-cogs"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-md dropdown-list theme-settings" role="menu">
                                        <li className="li-group">
                                            <ul className="list-unstyled">
                                                <li className="no-link" role="presentation">
                                                    Fixed Header 
                                                    <div className="ios-switch pull-right switch-md">
                                                        <input type="checkbox" className="js-switch pull-right fixed-header-check" checked />
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="li-group">
                                            <ul className="list-unstyled">
                                                <li className="no-link" role="presentation">
                                                    Fixed Sidebar 
                                                    <div className="ios-switch pull-right switch-md">
                                                        <input type="checkbox" className="js-switch pull-right fixed-sidebar-check" />
                                                    </div>
                                                </li>
                                                <li className="no-link" role="presentation">
                                                    Horizontal bar 
                                                    <div className="ios-switch pull-right switch-md">
                                                        <input type="checkbox" className="js-switch pull-right horizontal-bar-check" />
                                                    </div>
                                                </li>
                                                <li className="no-link" role="presentation">
                                                    Toggle Sidebar 
                                                    <div className="ios-switch pull-right switch-md">
                                                        <input type="checkbox" className="js-switch pull-right toggle-sidebar-check" />
                                                    </div>
                                                </li>
                                                <li className="no-link" role="presentation">
                                                    Compact Menu 
                                                    <div className="ios-switch pull-right switch-md">
                                                        <input type="checkbox" className="js-switch pull-right compact-menu-check"/>
                                                    </div>
                                                </li>
                                                <li className="no-link" role="presentation">
                                                    Hover Menu 
                                                    <div className="ios-switch pull-right switch-md">
                                                        <input type="checkbox" className="js-switch pull-right hover-menu-check"/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="li-group">
                                            <ul className="list-unstyled">
                                                <li className="no-link" role="presentation">
                                                    Boxed Layout 
                                                    <div className="ios-switch pull-right switch-md">
                                                        <input type="checkbox" className="js-switch pull-right boxed-layout-check"/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="li-group">
                                            <ul className="list-unstyled">
                                                <li className="no-link" role="presentation">
                                                    Choose Theme Color
                                                    <div className="color-switcher">
                                                        <a className="colorbox color-blue" href="indexca00.html?theme=blue" title="Blue Theme" data-css="blue"></a>
                                                        <a className="colorbox color-green" href="indexaf91.html?theme=green" title="Green Theme" data-css="green"></a>
                                                        <a className="colorbox color-red" href="index0e99.html?theme=red" title="Red Theme" data-css="red"></a>
                                                        <a className="colorbox color-white" href="index13d4.html?theme=white" title="White Theme" data-css="white"></a>
                                                        <a className="colorbox color-purple" href="index938c.html?theme=purple" title="purple Theme" data-css="purple"></a>
                                                        <a className="colorbox color-dark" href="index4965.html?theme=dark" title="Dark Theme" data-css="dark"></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="no-link"><button className="btn btn-default reset-options">Reset Options</button></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>	
                                    <a href="javascript:void(0);" className="waves-effect waves-button waves-classic show-search"><i className="fa fa-search"></i></a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i className="fa fa-envelope"></i><span className="badge badge-success pull-right">4</span></a>
                                    <ul className="dropdown-menu title-caret dropdown-lg" role="menu">
                                        <li><p className="drop-title">You have 4 new  messages !</p></li>
                                        <li className="dropdown-menu-list slimscroll messages">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">
                                                        <div className="msg-img"><div className="online on"></div><img className="img-circle" src="assets/images/avatar2.png" alt="" /></div>
                                                        <p className="msg-name">Sandra Smith</p>
                                                        <p className="msg-text">Hey ! I'm working on your project</p>
                                                        <p className="msg-time">3 minutes ago</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="msg-img"><div className="online off"></div><img className="img-circle" src="assets/images/avatar4.png" alt="" /></div>
                                                        <p className="msg-name">Amily Lee</p>
                                                        <p className="msg-text">Hi David !</p>
                                                        <p className="msg-time">8 minutes ago</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="msg-img"><div className="online off"></div><img className="img-circle" src="assets/images/avatar3.png" alt="" /></div>
                                                        <p className="msg-name">Christopher Palmer</p>
                                                        <p className="msg-text">See you soon !</p>
                                                        <p className="msg-time">56 minutes ago</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="msg-img"><div className="online on"></div><img className="img-circle" src="assets/images/avatar5.png" alt="" /></div>
                                                        <p className="msg-name">Nick Doe</p>
                                                        <p className="msg-text">Nice to meet you</p>
                                                        <p className="msg-time">2 hours ago</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="msg-img"><div className="online on"></div><img className="img-circle" src="assets/images/avatar2.png" alt="" /></div>
                                                        <p className="msg-name">Sandra Smith</p>
                                                        <p className="msg-text">Hey ! I'm working on your project</p>
                                                        <p className="msg-time">5 hours ago</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="msg-img"><div className="online off"></div><img className="img-circle" src="assets/images/avatar4.png" alt="" /></div>
                                                        <p className="msg-name">Amily Lee</p>
                                                        <p className="msg-text">Hi David !</p>
                                                        <p className="msg-time">9 hours ago</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="drop-all"><a href="#" className="text-center">All Messages</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i className="fa fa-bell"></i><span className="badge badge-success pull-right">3</span></a>
                                    <ul className="dropdown-menu title-caret dropdown-lg" role="menu">
                                        <li><p className="drop-title">You have 3 pending tasks !</p></li>
                                        <li className="dropdown-menu-list slimscroll tasks">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">
                                                        <div className="task-icon badge badge-success"><i className="icon-user"></i></div>
                                                        <span className="badge badge-roundless badge-default pull-right">1min ago</span>
                                                        <p className="task-details">New user registered.</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="task-icon badge badge-danger"><i className="icon-energy"></i></div>
                                                        <span className="badge badge-roundless badge-default pull-right">24min ago</span>
                                                        <p className="task-details">Database error.</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="task-icon badge badge-info"><i className="icon-heart"></i></div>
                                                        <span className="badge badge-roundless badge-default pull-right">1h ago</span>
                                                        <p className="task-details">Reached 24k likes</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="drop-all"><a href="#" className="text-center">All Tasks</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown">
                                        <span className="user-name">David<i className="fa fa-angle-down"></i></span>
                                        <img className="img-circle avatar" src="assets/images/avatar1.png" width="40" height="40" alt="" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-list" role="menu">
                                        <li role="presentation"><a href="profile.html"><i className="fa fa-user"></i>Profile</a></li>
                                        <li role="presentation"><a href="calendar.html"><i className="fa fa-calendar"></i>Calendar</a></li>
                                        <li role="presentation"><a href="inbox.html"><i className="fa fa-envelope"></i>Inbox<span className="badge badge-success pull-right">4</span></a></li>
                                        <li role="presentation" className="divider"></li>
                                        <li role="presentation"><a href="lock-screen.html"><i className="fa fa-lock"></i>Lock screen</a></li>
                                        <li role="presentation"><a href="login.html"><i className="fa fa-sign-out m-r-xs"></i>Log out</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="login.html" className="log-out waves-effect waves-button waves-classic">
                                        <span><i className="fa fa-sign-out m-r-xs"></i>Log out</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="waves-effect waves-button waves-classic" id="showRight">
                                        <i className="fa fa-comments"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-sidebar sidebar">
                <div className="page-sidebar-inner slimscroll">
                    <div className="sidebar-header">
                        <div className="sidebar-profile">
                            <a href="javascript:void(0);" id="profile-menu-link">
                                <div className="sidebar-profile-image">
                                    <img src="assets/images/avatar1.png" className="img-circle img-responsive" alt="" />
                                </div>
                                <div className="sidebar-profile-details">
                                    <span>David Green<br /><small>Art Director</small></span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <ul className="menu accordion-menu">
                        <li className="active"><a href="index.html" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-home"></span><p>Dashboard</p></a></li>
                        <li><a href="profile.html" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-user"></span><p>Profile</p></a></li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-envelope"></span><p>Mailbox</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li><a href="inbox.html">Inbox</a></li>
                                <li><a href="message-view.html">View Message</a></li>
                                <li><a href="compose.html">Compose</a></li>
                            </ul>
                        </li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-briefcase"></span><p>UI Kits</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li><a href="ui-alerts.html">Alerts</a></li>
                                <li><a href="ui-buttons.html">Buttons</a></li>
                                <li><a href="ui-icons.html">Icons</a></li>
                                <li><a href="ui-typography.html">Typography</a></li>
                                <li><a href="ui-notifications.html">Notifications</a></li>
                                <li><a href="ui-grid.html">Grid</a></li>
                                <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a></li>
                                <li><a href="ui-modals.html">Modals</a></li>
                                <li><a href="ui-panels.html">Panels</a></li>
                                <li><a href="ui-progress.html">Progress Bars</a></li>
                                <li><a href="ui-sliders.html">Sliders</a></li>
                                <li><a href="ui-nestable.html">Nestable</a></li>
                                <li><a href="ui-tree-view.html">Tree View</a></li>
                            </ul>
                        </li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-th"></span><p>Layouts</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li><a href="layout-blank.html">Blank Page</a></li>
                                <li><a href="layout-boxed.html">Boxed Page</a></li>
                                <li><a href="layout-horizontal-menu.html">Horizontal Menu</a></li>
                                <li><a href="layout-horizontal-menu-boxed.html">Boxed &amp; Horizontal Menu</a></li>
                                <li><a href="layout-horizontal-menu-minimal.html">Horizontal Menu Minimal</a></li>
                                <li><a href="layout-fixed-sidebar.html">Fixed Sidebar</a></li>
                                <li><a href="layout-static-header.html">Static Header</a></li>
                                <li><a href="layout-collapsed-sidebar.html">Collapsed Sidebar</a></li>
                                <li><a href="layout-compact-menu.html">Compact Menu</a></li>
                                <li><a href="layout-hover-menu.html">Hover Menu</a></li>
                            </ul>
                        </li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-list"></span><p>Tables</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li><a href="table-static.html">Static Tables</a></li>
                                <li><a href="table-responsive.html">Responsive Tables</a></li>
                                <li><a href="table-data.html">Data Tables</a></li>
                            </ul>
                        </li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-edit"></span><p>Forms</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li><a href="form-elements.html">Form Elements</a></li>
                                <li><a href="form-wizard.html">Form Wizard</a></li>
                                <li><a href="form-upload.html">File Upload</a></li>
                                <li><a href="form-image-crop.html">Image Crop</a></li>
                                <li><a href="form-image-zoom.html">Image Zoom</a></li>
                                <li><a href="form-select2.html">Select2</a></li>
                                <li><a href="form-x-editable.html">X-editable</a></li>
                            </ul>
                        </li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-stats"></span><p>Charts</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li><a href="charts-sparkline.html">Sparkline</a></li>
                                <li><a href="charts-rickshaw.html">Rickshaw</a></li>
                                <li><a href="charts-morris.html">Morris</a></li>
                                <li><a href="charts-flotchart.html">Flotchart</a></li>
                                <li><a href="charts-chartjs.html">Chart.js</a></li>
                            </ul>
                        </li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-log-in"></span><p>Login</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li><a href="login.html">Login Form</a></li>
                                <li><a href="login-alt.html">Login Alt</a></li>
                                <li><a href="register.html">Register Form</a></li>
                                <li><a href="register-alt.html">Register Alt</a></li>
                                <li><a href="forgot.html">Forgot Password</a></li>
                                <li><a href="lock-screen.html">Lock Screen</a></li>
                            </ul>
                        </li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-map-marker"></span><p>Maps</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li><a href="maps-google.html">Google Maps</a></li>
                                <li><a href="maps-vector.html">Vector Maps</a></li>
                            </ul>
                        </li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-gift"></span><p>Extra</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li><a href="404.html">404 Page</a></li>
                                <li><a href="500.html">500 Page</a></li>
                                <li><a href="invoice.html">Invoice</a></li>
                                <li><a href="calendar.html">Calendar</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="todo.html">Todo</a></li>
                                <li><a href="pricing-tables.html">Pricing Tables</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="timeline.html">Timeline</a></li>
                                <li><a href="search.html">Search Results</a></li>
                                <li><a href="coming-soon.html">Coming Soon</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </li>
                        <li className="droplink"><a href="#" className="waves-effect waves-button"><span className="menu-icon glyphicon glyphicon-flash"></span><p>Levels</p><span className="arrow"></span></a>
                            <ul className="sub-menu">
                                <li className="droplink"><a href="#"><p>Level 1.1</p><span className="arrow"></span></a>
                                    <ul className="sub-menu">
                                        <li className="droplink"><a href="#"><p>Level 2.1</p><span className="arrow"></span></a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Level 3.1</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Level 2.2</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Level 1.2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="page-inner">
                <div className="page-title">
                    <h3>Dashboard</h3>
                    <div className="page-breadcrumb">
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Dashboard</li>
                        </ol>
                    </div>
                </div>
                <div id="main-wrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="panel info-box panel-white">
                                <div className="panel-body">
                                    <div className="info-box-stats">
                                        <p className="counter">107,200</p>
                                        <span className="info-box-title">User activity this month</span>
                                    </div>
                                    <div className="info-box-icon">
                                        <i className="icon-users"></i>
                                    </div>
                                    <div className="info-box-progress">
                                        <div className="progress progress-xs progress-squared bs-n">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel info-box panel-white">
                                <div className="panel-body">
                                    <div className="info-box-stats">
                                        <p className="counter">340,230</p>
                                        <span className="info-box-title">Page views</span>
                                    </div>
                                    <div className="info-box-icon">
                                        <i className="icon-eye"></i>
                                    </div>
                                    <div className="info-box-progress">
                                        <div className="progress progress-xs progress-squared bs-n">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel info-box panel-white">
                                <div className="panel-body">
                                    <div className="info-box-stats">
                                        <p>$<span className="counter">653,000</span></p>
                                        <span className="info-box-title">Monthly revenue goal</span>
                                    </div>
                                    <div className="info-box-icon">
                                        <i className="icon-basket"></i>
                                    </div>
                                    <div className="info-box-progress">
                                        <div className="progress progress-xs progress-squared bs-n">
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel info-box panel-white">
                                <div className="panel-body">
                                    <div className="info-box-stats">
                                        <p className="counter">47,500</p>
                                        <span className="info-box-title">New emails recieved</span>
                                    </div>
                                    <div className="info-box-icon">
                                        <i className="icon-envelope"></i>
                                    </div>
                                    <div className="info-box-progress">
                                        <div className="progress progress-xs progress-squared bs-n">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div className="panel panel-white">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="visitors-chart">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">Visitors</h4>
                                            </div>
                                            <div className="panel-body">
                                                <div id="flotchart1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="stats-info">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">Browser Stats</h4>
                                            </div>
                                            <div className="panel-body">
                                                <ul className="list-unstyled">
                                                    <li>Google Chrome<div className="text-success pull-right">32%<i className="fa fa-level-up"></i></div></li>
                                                    <li>Firefox<div className="text-success pull-right">25%<i className="fa fa-level-up"></i></div></li>
                                                    <li>Internet Explorer<div className="text-success pull-right">16%<i className="fa fa-level-up"></i></div></li>
                                                    <li>Safari<div className="text-danger pull-right">13%<i className="fa fa-level-down"></i></div></li>
                                                    <li>Opera<div className="text-danger pull-right">7%<i className="fa fa-level-down"></i></div></li>
                                                    <li>Mobile &amp; tablet<div className="text-success pull-right">4%<i className="fa fa-level-up"></i></div></li>
                                                    <li>Others<div className="text-success pull-right">3%<i className="fa fa-level-up"></i></div></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-white" >
                                <div className="panel-heading">
                                    <h4 className="panel-title">Server Load</h4>
                                    <div className="panel-control">
                                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
                                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="server-load">
                                        <div className="server-stat">
                                            <span>Total Usage</span>
                                            <p>67GB</p>
                                        </div>
                                        <div className="server-stat">
                                            <span>Total Space</span>
                                            <p>320GB</p>
                                        </div>
                                        <div className="server-stat">
                                            <span>CPU</span>
                                            <p>57%</p>
                                        </div>
                                    </div>
                                    <div id="flotchart2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="panel panel-white">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Weather</h4>
                                    <div className="panel-control">
                                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="weather-widget">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="weather-top">
                                                    <div className="weather-current pull-left">
                                                        <i className="wi wi-day-cloudy weather-icon"></i>
                                                        <p><span>83<sup>&deg;F</sup></span></p>
                                                    </div>
                                                    <h2 className="weather-day pull-right">Miami, FL<br /><small><b>13th April, 2015</b></small></h2>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-unstyled weather-info">
                                                    <li>Wind <span className="pull-right"><b>ESE 16 mph</b></span></li>
                                                    <li>Humidity <span className="pull-right"><b>64%</b></span></li>
                                                    <li>Pressure <span className="pull-right"><b>30.15 in</b></span></li>
                                                    <li>UV Index <span className="pull-right"><b>6</b></span></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-unstyled weather-info">
                                                    <li>Cloud Cover <span className="pull-right"><b>60%</b></span></li>
                                                    <li>Ceiling <span className="pull-right"><b>17800 ft</b></span></li>
                                                    <li>Dew Point <span className="pull-right"><b>70° F</b></span></li>
                                                    <li>Visibility <span className="pull-right"><b>10 mi</b></span></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12">
                                                <ul className="list-unstyled weather-days row">
                                                    <li className="col-xs-4 col-sm-2"><span>12:00</span><i className="wi wi-day-cloudy"></i><span>82<sup>&deg;F</sup></span></li>
                                                    <li className="col-xs-4 col-sm-2"><span>13:00</span><i className="wi wi-day-cloudy"></i><span>82<sup>&deg;F</sup></span></li>
                                                    <li className="col-xs-4 col-sm-2"><span>14:00</span><i className="wi wi-day-cloudy"></i><span>82<sup>&deg;F</sup></span></li>
                                                    <li className="col-xs-4 col-sm-2"><span>15:00</span><i className="wi wi-day-cloudy"></i><span>83<sup>&deg;F</sup></span></li>
                                                    <li className="col-xs-4 col-sm-2"><span>16:00</span><i className="wi wi-day-cloudy"></i><span>82<sup>&deg;F</sup></span></li>
                                                    <li className="col-xs-4 col-sm-2"><span>17:00</span><i className="wi wi-day-sunny-overcast"></i><span>82<sup>&deg;F</sup></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="panel panel-white">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Inbox</h4>
                                    <div className="panel-control">
                                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="inbox-widget slimscroll">
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar2.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Sandra Smith</p>
                                                <p className="inbox-item-text">Hey! I'm working on your...</p>
                                                <p className="inbox-item-date">13:40 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar3.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Christopher</p>
                                                <p className="inbox-item-text">I've finished it! See you so...</p>
                                                <p className="inbox-item-date">13:34 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar4.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Amily Lee</p>
                                                <p className="inbox-item-text">This theme is awesome!</p>
                                                <p className="inbox-item-date">13:17 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar5.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Nick Doe</p>
                                                <p className="inbox-item-text">Nice to meet you</p>
                                                <p className="inbox-item-date">12:20 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar2.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Sandra Smith</p>
                                                <p className="inbox-item-text">Hey! I'm working on your...</p>
                                                <p className="inbox-item-date">10:15 AM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/avatar4.png" className="img-circle" alt="" /></div>
                                                <p className="inbox-item-author">Amily Lee</p>
                                                <p className="inbox-item-text">This theme is awesome!</p>
                                                <p className="inbox-item-date">9:56 AM</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel twitter-box">
                                <div className="panel-body">
                                    <div className="live-tile" data-mode="flip" data-speed="750" data-delay="3000">
                                        <span className="tile-title pull-right">New Tweets</span>
                                        <i className="fa fa-twitter"></i>
                                        <div><h2 className="no-m">It’s kind of fun to do the impossible...</h2><span className="tile-date">10 April, 2015</span></div>
                                        <div><h2 className="no-m">Sometimes by losing a battle you find a new way to win the war...</h2><span className="tile-date">6 April, 2015</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel facebook-box">
                                <div className="panel-body">
                                    <div className="live-tile" data-mode="carousel" data-direction="horizontal" data-speed="750" data-delay="4500">
                                        <span className="tile-title pull-right">Facebook Feed</span>
                                        <i className="fa fa-facebook"></i>
                                        <div><h2 className="no-m">If you're going through hell, keep going...</h2><span className="tile-date">23 March, 2015</span></div>
                                        <div><h2 className="no-m">To improve is to change; to be perfect is to change often...</h2><span className="tile-date">15 March, 2015</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="panel panel-white">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Project Stats</h4>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive project-stats">  
                                       <table className="table">
                                           <thead>
                                               <tr>
                                                   <th>#</th>
                                                   <th>Project</th>
                                                   <th>Status</th>
                                                   <th>Manager</th>
                                                   <th>Progress</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                               <tr>
                                                   <th scope="row">452</th>
                                                   <td>Mailbox Template</td>
                                                   <td><span className="label label-info">Pending</span></td>
                                                   <td>David Green</td>
                                                   <td>
                                                   <div className="btn-group">
                                            <button type="button" className="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                Action <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu" role="menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li className="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                                   </td>
                                               </tr>
                                               <tr>
                                                   <th scope="row">327</th>
                                                   <td>Wordpress Theme</td>
                                                   <td><span className="label label-primary">In Progress</span></td>
                                                   <td>Sandra Smith</td>
                                                   <td>
                                                       <div className="progress progress-sm">
                                                           <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" >
                                                           </div>
                                                       </div>
                                                   </td>
                                               </tr>
                                               <tr>
                                                   <th scope="row">226</th>
                                                   <td>Modern Admin Template</td>
                                                   <td><span className="label label-success">Finished</span></td>
                                                   <td>Chritopher Palmer</td>
                                                   <td>
                                                       <div className="progress progress-sm">
                                                           <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
                                                           </div>
                                                       </div>
                                                   </td>
                                               </tr>
                                               <tr>
                                                   <th scope="row">178</th>
                                                   <td>eCommerce template</td>
                                                   <td><span className="label label-danger">Canceled</span></td>
                                                   <td>Amily Lee</td>
                                                   <td>
                                                       <div className="progress progress-sm">
                                                           <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" >
                                                           </div>
                                                       </div>
                                                   </td>
                                               </tr>
                                               <tr>
                                                   <th scope="row">157</th>
                                                   <td>Website PSD</td>
                                                   <td><span className="label label-info">Testing</span></td>
                                                   <td>Nick Doe</td>
                                                   <td>
                                                       <div className="progress progress-sm">
                                                           <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" >
                                                           </div>
                                                       </div>
                                                   </td>
                                               </tr>
                                               <tr>
                                                   <th scope="row">157</th>
                                                   <td>Fronted Theme</td>
                                                   <td><span className="label label-warning">Waiting</span></td>
                                                   <td>David Green</td>
                                                   <td>
                                                       <div className="progress progress-sm">
                                                           <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
                                                           </div>
                                                       </div>
                                                   </td>
                                               </tr>
                                           </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-footer">
                    <p className="no-s">2015 &copy; Modern by Steelcoders.</p>
                </div>
            </div>
        </main>
        <nav className="cd-nav-container" id="cd-nav">
            <header>
                <h3>Navigation</h3>
                <a href="#0" className="cd-close-nav">Close</a>
            </header>
            <ul className="cd-nav list-unstyled">
                <li className="cd-selected" data-menu="index">
                    <a href="javsacript:void(0);">
                        <span>
                            <i className="glyphicon glyphicon-home"></i>
                        </span>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li data-menu="profile">
                    <a href="javsacript:void(0);">
                        <span>
                            <i className="glyphicon glyphicon-user"></i>
                        </span>
                        <p>Profile</p>
                    </a>
                </li>
                <li data-menu="inbox">
                    <a href="javsacript:void(0);">
                        <span>
                            <i className="glyphicon glyphicon-envelope"></i>
                        </span>
                        <p>Mailbox</p>
                    </a>
                </li>
                <li data-menu="#">
                    <a href="javsacript:void(0);">
                        <span>
                            <i className="glyphicon glyphicon-tasks"></i>
                        </span>
                        <p>Tasks</p>
                    </a>
                </li>
                <li data-menu="#">
                    <a href="javsacript:void(0);">
                        <span>
                            <i className="glyphicon glyphicon-cog"></i>
                        </span>
                        <p>Settings</p>
                    </a>
                </li>
                <li data-menu="calendar">
                    <a href="javsacript:void(0);">
                        <span>
                            <i className="glyphicon glyphicon-calendar"></i>
                        </span>
                        <p>Calendar</p>
                    </a>
                </li>
            </ul>
        </nav>


    
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
