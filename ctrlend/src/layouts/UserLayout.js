import React, { Fragment } from 'react';
import Link from 'umi/link';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import styles from './UserLayout.less';
import logo from '../assets/logo.svg';


const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 浙大勤创技术部出品
  </Fragment>
);

const UserLayout = ({ children }) => (
  // @TODO <DocumentTitle title={this.getPageTitle()}>
  <div className={styles.container}>
    <div className={styles.lang}>
      <SelectLang />
    </div>
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.header}>
          <Link to="/">
            <img alt="logo" className={styles.logo} src={logo} />
            <span className={styles.title}>浙大勤创网后台管理</span>
          </Link>
        </div>
        <div className={styles.desc}>ZJU PAPIC Website Control Panel</div>
      </div>
      {children}
    </div>
    <GlobalFooter copyright={copyright} />
  </div>
);

export default UserLayout;
