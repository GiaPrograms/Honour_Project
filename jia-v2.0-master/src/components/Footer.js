import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {FacebookIcon, TwitterIcon, FacebookShareButton, TwitterShareButton} from 'react-share';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    // TODO: Change url
    const shareUrl = "https://socialinnovationlab.github.io/jia/";
    return (
        <div className="footer-container">
          <div className="footer-content">
            <div className="copyright-container">
              <p>© 2019 JIA OptionMap</p>
              <p>
                Designed and developed by SLiDE
                <i> visit: </i>
                <a href="https://slidelab7.ca" className="slide-link" target="_blank" rel="noopener noreferrer">slidelab.ca</a>
              </p>
            </div>
            <div className="social-media">
              <div className="social-media-text">
                <p>Share on:</p>
              </div>
              <div className="social-media-icons-container">
                <FacebookShareButton className="social-icon" size={46} round={true} url={shareUrl}>
                  <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>
                <TwitterShareButton className="social-icon" size={46} round={true} url={shareUrl}>
                  <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>
              </div>
            </div>

            <div className="disclaimer-container">
              <p onClick={this.toggle}>Disclaimer</p>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Disclaimer</ModalHeader>
                <ModalBody>
                This app was built by a team of researchers, clinicians and patient partners from various universities, health centres, research groups and patient associations, with funding from The Arthritis Society, the Chronic Pain Network, the Ontario Ministry of Research, Innovation and Science, and the Children's Hospital of Eastern Ontario Research Institute. The information contained in this app, whether in text, visuals or links, does not constitute clinical recommendations, and is for informational purposes only. You should contact your health care providers for medical advice and more in depth information on treatment options. This app was last updated on May 18, 2015 and there may be new studies that may affect the information provided. The findings of new studies will be incorporated in future versions of the app. For more information on how this app was developed and how information is sourced, please consult the "Methods" document linked in the app. Use of any treatment options suggested in this app is at the reader’s discretion, and at their own risk. 
                </ModalBody>
                <ModalFooter>
                  <Button className="next-btn" onClick={this.toggle}>Got it</Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
    )
  }
}
