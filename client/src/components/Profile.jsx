import React, { PropTypes } from 'react';


const Profile = ({user}) => (
  <div className="page-inner" >
                <div className="profile-cover">
                    <div className="row">
                        <div className="col-md-3 profile-image">
                            <div className="profile-image-container">
                                <img src="assets/images/avatar4.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-12 profile-info">
                            <div className=" profile-info-value">
                                <h3>1020</h3>
                                <p>Followers</p>
                            </div>
                            <div className=" profile-info-value">
                                <h3>1780</h3>
                                <p>Friends</p>
                            </div>
                            <div className=" profile-info-value">
                                <h3>260</h3>
                                <p>Photos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="main-wrapper">
                    <div className="row">
                        <div className="col-md-3 user-profile">
                            <h3 className="text-center">{user.params.name}</h3>
                            <p className="text-center">{user.role}</p>
                            <hr />
                            <ul className="list-unstyled text-center">
                                <li><p><i className="fa fa-map-marker m-r-xs"></i>Melbourne, Australia</p></li>
                                <li><p><i className="fa fa-envelope m-r-xs"></i><a href="#">{ decodeURIComponent(user.params.email)}</a></p></li>
                                <li><p><i className="fa fa-link m-r-xs"></i><a href="#">www.themeforest.net</a></p></li>
                            </ul>
                            <hr />
                            <button className="btn btn-primary btn-block"><i className="fa fa-plus m-r-xs"></i>Follow</button>
                        </div>
                        <div className="col-md-9 m-t-lg">
                           <div className="panel panel-white">
                                <div className="panel-body">
                                    <div id="rootwizard">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li role="presentation" className="active"><a href="#tab1" data-toggle="tab"><i className="fa fa-user m-r-xs"></i>Personal Info</a></li>
                                            <li role="presentation"><a href="#tab2" data-toggle="tab"><i className="fa fa-truck m-r-xs"></i>Product Info</a></li>
                                            <li role="presentation"><a href="#tab3" data-toggle="tab"><i className="fa fa-truck m-r-xs"></i>Payment</a></li>
                                            <li role="presentation"><a href="#tab4" data-toggle="tab"><i className="fa fa-check m-r-xs"></i>Finish</a></li>
                                        </ul>
                          
                                    
                                        <div className="progress progress-sm m-t-sm">
                                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" >
                                            </div>
                                        </div>
                                        <form id="wizardForm" novalidate="novalidate">
                                            <div className="tab-content">
                                                <div className="tab-pane active fade in" id="tab1">
                                                    <div className="row m-b-lg">
                                                        <div className="col-md-6">
                                                            <div className="row">
                                                                <div className="form-group col-md-6">
                                                                    <label for="exampleInputName">First Name</label>
                                                                    <input type="text" className="form-control error" name="exampleInputName" id="exampleInputName" placeholder="First Name" aria-required="true" aria-invalid="true"/><label id="exampleInputName-error" className="error" for="exampleInputName">This field is required.</label>
                                                                </div>
                                                                <div className="form-group  col-md-6">
                                                                    <label for="exampleInputName2">Last Name</label>
                                                                    <input type="text" className="form-control col-md-6 error" name="exampleInputName2" id="exampleInputName2" placeholder="Last Name" aria-required="true"/><label id="exampleInputName2-error" className="error" for="exampleInputName2">This field is required.</label>
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label for="exampleInputEmail">Email address</label>
                                                                    <input type="email" className="form-control error" name="exampleInputEmail" id="exampleInputEmail" placeholder="Enter email" aria-required="true"/><label id="exampleInputEmail-error" className="error" for="exampleInputEmail">This field is required.</label>
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label for="exampleInputPassword1">Password</label>
                                                                    <input type="password" className="form-control error" name="exampleInputPassword1" id="exampleInputPassword1" placeholder="Password" aria-required="true"/><label id="exampleInputPassword1-error" className="error" for="exampleInputPassword1">This field is required.</label>
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label for="exampleInputPassword2">Confirm Password</label>
                                                                    <input type="password" className="form-control error" name="exampleInputPassword2" id="exampleInputPassword2" placeholder="Confirm Password" aria-required="true"/><label id="exampleInputPassword2-error" className="error" for="exampleInputPassword2">This field is required.</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h3>Personal Info</h3>
                                                            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
                                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab2">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <img src="assets/images/envato-logo.png" width="250" alt=""/>
                                                            <div className="m-t-md">
                                                                <address>
                                                                    <strong>Twitter, Inc.</strong><br />
                                                                    795 Folsom Ave, Suite 600<br/>
                                                                    San Francisco, CA 94107<br/>
                                                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                                                </address>
                                                                <address>
                                                                    <strong>Full Name</strong><br/>
                                                                    <a href="mailto:#">first.last@example.com</a>
                                                                </address>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <div className="form-group col-md-12">
                                                                <label for="exampleInputProductName">Product Name</label>
                                                                <input type="text" className="form-control" name="exampleInputProductName" id="exampleInputProductName" placeholder="Product Name"/>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label for="exampleInputProductId">Product ID</label>
                                                                <input type="text" className="form-control" name="exampleInputProductId" id="exampleInputProductId" placeholder="Product ID"/>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label for="exampleInputQuantity">Quantity</label>
                                                                <input type="number" min="1" max="5" className="form-control" name="exampleInputQuantity" id="exampleInputQuantity" placeholder="Quantity"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab3">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group col-md-12">
                                                                <label for="exampleInputCard">Card Number</label>
                                                                <div className="row">
                                                                    <div className="col-md-8">
                                                                        <input type="text" className="form-control" name="exampleInputCard" id="exampleInputCard" placeholder="Card Number"/>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <input type="text" className="form-control col-md-4" name="exampleInputSecurity" id="exampleInputSecurity" placeholder="Security Code"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label for="exampleInputHolder">Card Holders Name</label>
                                                                <input type="text" className="form-control" name="exampleInputHolder" id="exampleInputHolder" placeholder="Card Holders Name"/>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label for="exampleInputExpiration">Expiration</label>
                                                                <input type="text" className="form-control date-picker" name="exampleInputExpiration" id="exampleInputExpiration" placeholder="Expiration"/>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label for="exampleInputCsv">CSV</label>
                                                                <input type="text" className="form-control" name="exampleInputCsv" id="exampleInputCsv" placeholder="CSV"/>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label className="f-s-12">By pressing Next You will Agree to the Payment <a href="#">Terms &amp; Conditions</a></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab4">
                                                    <h2 className="no-s">Thank You !</h2>
                                                    <div className="alert alert-info m-t-sm m-b-lg" role="alert">
                                                        Congratulations ! You got the last step.
                                                    </div>
                                                </div>
                                                <ul className="pager wizard">
                                                    <li className="previous disabled"><a href="#" className="btn btn-default">Previous</a></li>
                                                    <li className="next"><a href="#" className="btn btn-default">Next</a></li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
                <div className="page-footer hide">
                    <p className="no-s">2015 © Modern by Steelcoders.</p>
                </div>
            </div>
);
export default Profile;
