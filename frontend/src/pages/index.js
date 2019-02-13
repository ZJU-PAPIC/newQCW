/**
 * title: 勤创 PAPIC
 *
 */

import { Layout, Icon, Carousel } from 'antd';
import React from 'react';
import { connect } from 'dva';

import styles from './index.css';
const { Header, Footer, Sider, Content } = Layout;

class indexPage extends React.Component {
  state = {};
  render() {
    console.log(this);
    const { indexInfo } = this.props.basicInfo;
    const { scrollPictures, themeColor } = indexInfo;

    return (
      <div className={styles.normal}>
        <Layout>
          <Sider className={styles.siderStyle} />
          <Layout>
            <Header className={styles.headerStyle}>
              <div className={styles.headerLeftBox}>
                <span className={styles.mainTitle}>PAPIC</span>
                <span className={styles.subTitle}>WHAT IS PAPIC</span>
              </div>
              <div className={styles.headerRightBox}>
                <div className={styles.iconList}>
                  <Icon type="qq" />
                  <Icon type="wechat" />
                  <Icon type="github" />
                </div>
                <div>
                  <Icon type="search" />
                </div>
              </div>
            </Header>
            <Content className={styles.contentStyle}>
              <div className={styles.antdCarousel}>
                <Carousel autoplay vertical>
                  {scrollPictures.map((item,key) => {
                    return (
                      <div className={styles.carouselDivbox} key={key}>
                        <img src={item} alt="img" />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </Content>
            <Footer className={styles.footerStyle}>
              <div className={styles.footerInfo}>PAPIC@2.0.1 —— Here For You</div>
            </Footer>
          </Layout>
          <Sider className={styles.siderStyle} />
        </Layout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    basicInfo: state.basic,
  };
}

export default connect(mapStateToProps)(indexPage);
