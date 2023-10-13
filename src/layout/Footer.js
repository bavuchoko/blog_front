import React from 'react';
import Notice from "./footer/Notice";
import RecentContent from "./footer/RecentContent";
import RecentReply from "./footer/RecentReply";
import TotalHits from "./footer/TotalHits";
import Link from "./footer/Link";
import '../assets/css/footer/mobile.css';
import '../assets/css/footer/tablet.css';
import '../assets/css/footer/computer.css';
function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div>
                        <p className="footer-subject">공지사항</p>
                        <Notice/>
                    </div>
                    <div>
                        <p className="footer-subject">최근에 올라온 글</p>
                        <RecentContent/>
                    </div>
                    <div>
                        <p className="footer-subject">최근에 달린 댓글</p>
                        <RecentReply />
                    </div>
                    <div>
                        <p className="footer-subject">Total</p>
                        <TotalHits />
                    </div>
                </div>
                <div className="footer-row">
                    <div>
                        <p className="footer-subject">링크</p>
                        <Link />
                    </div>
                    <div>
                        <p className="footer-subject">TAG</p>
                    </div>
                    <div>
                        <p className="footer-subject">달력</p>
                    </div>
                    <div>
                        <p className="footer-subject">보관함</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;